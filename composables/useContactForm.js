import { submitContactForm } from '../api/index'
import qs from 'qs'

export default function() {
    //定义表单绑定的ref
    const contactForm = ref(null)
    //定义初始化数据
    const form = ref({
        name: '',
        mobile: '',
        email: '',
        content: '',
    })
    //定义表单验证规则, 文字框用blur(失去焦点), 需要选择的用change(数据改变)
    const rules = {
        name: [{ required: true, message: 'Enter Contact window', trigger: ['blur']}],
        mobile: [{ required: true, message: 'Enter Phone no', trigger: ['blur']}],
        email: [{ required: true, message: 'Enter Email', trigger: ['blur']},
        { type: 'email', message: '邮箱格式错误', trigger: ['blur']}],
        content: [{ required: true, message: 'Enter Message', trigger: ['blur']}],
    }
    const isDisabled = ref(false) //禁用按钮避免重复提交

    const submitForm = () => {
        isDisabled.value = true
        contactForm.value.validate((valid) => {
            if(valid) {
                //发送请求
                const headers = {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
                var postdata = qs.stringify(form.value)
                submitContactForm(postdata, headers).then(res => {
                    isDisabled.value = false
                    if(res.code === 0) {
                        ElMessage.success(res.msg)
                        //重置表单
                        contactForm.value.resetFields()
                    }
                    else {
                        ElMessage.error(res.msg)
                    }
                }).catch((error)=>{
                    ElMessage.error(error)
                    isDisabled.value = false
                })
            }
            else {
                isDisabled.value = false
                return false
            }
        })
    }

    return {
        contactForm,
        form,
        submitForm,
        rules,
        isDisabled
    }
}
import { submitContactForm } from '../api/index'

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

    const submitForm = () => {
        contactForm.value.validate(async (valid) => {
            if(valid) {
                //发送请求
                submitContactForm({ params: form.value }).then(res => {
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
                })
            }
        })
    }

    return {
        contactForm,
        form,
        submitForm,
        rules
    }
}
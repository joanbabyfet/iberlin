import { submitContactForm } from '../api/index'

export default function() {
    const form = ref({
        name: '',
        mobile: '',
        email: '',
        content: '',
    })

    const submit = () => {
        submitContactForm({ params: JSON.stringify(form.value) }).then(res => {
            
        }).catch((err)=>{
            console.log(err)
        })
    }

    return {
        form,
        submit
    }
}
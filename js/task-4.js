const formEl = document.querySelector('.login-form')

formEl.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()

    const email = formEl.elements.email
    const emailValue = email.value.trim()

    const password = formEl.elements.password;
    const passwordValue = password.value.trim()

    if(!emailValue || !passwordValue) {
        return alert('All form fields must be filled in');
    } else {
        const formData = {
            [formEl.elements.email.name]: [formEl.elements.email.value],
            [formEl.elements.password.name]: [formEl.elements.password.value],
        }
        console.log(formData)
        formEl.reset()
    }
}

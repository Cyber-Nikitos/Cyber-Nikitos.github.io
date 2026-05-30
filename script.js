const openButton = document.querySelector('.toggle-form')
const form = document.querySelector('form')

openButton.addEventListener('click', function() {
    form.classList.toggle('form-active')
})
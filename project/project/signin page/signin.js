let signUpButton = document.getElementById('signUp')
let signInButton = document.getElementById('signIn')
let container = document.getElementById('container')

signUpButton.addEventListener('click', function () {
    container.classList.add('right-panel-active')
})

signInButton.addEventListener('click', function () {
    container.classList.remove('right-panel-active')
})


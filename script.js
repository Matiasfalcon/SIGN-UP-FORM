let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm-password');





confirmPassword.addEventListener('click', () => {
    while (password.innerText.length > confirmPassword.innerText.length) {
        if (password.innerText != confirmPassword.innerText) {
            alert('El password debe coincidir.')
        } else {
            console.log('cacas');
        }
    }
})




console.log(password);
console.log(confirmPassword);
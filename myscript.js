
// const submitBtn = document.getElementById('submit');
const form = document.querySelector('form');
const inputs = Array.from(document.querySelectorAll('input'));
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
form.addEventListener('submit' , ()=>{
    if (password.value !== confirmPassword.value){
    console.log('hello');
        alert('Password is not match')
        password.style.border = '1px solid red';
        confirmPassword.style.border = '1px solid red';
        return false;
        
   
    }

    else{
        console.log('submit');
        inputs.forEach(input => {
            input.value = '';
            });
            password.style.border = '';
            confirmPassword.style.border = '';

            alert('Your Account Has Been Created');
            return true;
        }
})

   






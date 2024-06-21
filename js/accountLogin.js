const accInput = document.getElementById("account");
const pwdInput = document.getElementById("password");
const logInBtn = document.getElementById("log-in-btn");

logInBtn.addEventListener("click", function(){
    alert(`Account: ${accInput.value}\nPassword: ${pwdInput.value}`);
})

// POST to backend
// axios({
//     URL: '',
//     method: 'POST',
//     data: {}
// }).then(result => {

// })
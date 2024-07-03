const accInput = document.getElementById("account");
const pwdInput = document.getElementById("password");
const logInBtn = document.getElementById("log-in-btn");

logInBtn.addEventListener("click", function(){
    alert(`Account: ${accInput.value}\nPassword: ${pwdInput.value}`);

    // POST to backend servise
    // const loginProm = new Promise((resolve, reject) =>{
    //     const xhr = XMLHttpRequest();
    //     xhr.open('POST', 'URL');
    //     xhr.addEventListener('loadend', () => {
    //         //TO-DO
    //     });
    //     xhr.setRequsetHeader('Content-Type', 'application/json');
    //     const userObj = {
    //         username : accInput.value,
    //         password : pwdInput.value
    //     }
    //     const userStr = JSON.stringify(userObj);
    //     xhr.send(userStr);
    // })
    // loginProm.then(result => {
    //     //TO-DO
    //     alert(`Account: ${accInput.value}\nPassword: ${pwdInput.value}`);
    // }).catch(error =>{
    //     console.dir(error);
    // });
})



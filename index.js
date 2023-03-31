const input1 = document.querySelector("#password");
const input2 = document.querySelector("#conf-password");
input2.addEventListener('input', inputChange);
input1.addEventListener('input', inputChange);

const div2 = document.querySelector(".form-2:last-child");

function inputChange(e) {
    var pwd1 = document.getElementById("password").value;
    var pwd2 = document.getElementById("conf-password").value;
    console.log(pwd1)

    if (pwd1 != pwd2) {
        input1.setAttribute('style', 'border-color: red');
        input2.setAttribute('style', 'border-color: red');    
        
        pwd1 = document.getElementById("password").value;
        pwd2 = document.getElementById("conf-password").value;
    } else {
        input1.setAttribute('style', '');
        input2.setAttribute('style', '');
    }
}
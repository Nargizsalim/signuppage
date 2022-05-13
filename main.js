const id =(id) => document.getElementById (id)
const classes = (classes) => document.getElementsByClassName (classes)

let username  = id('username'),
    email = id ('email'),
    password = id ('password'),
    form = id ('form'),
    errorMsg = classes ('error'),
    successIcon = classes ('success-icon'),
    failureIcon = classes ('failure-icon')
    button = id ('submit')

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    engine(username, 0, 'Username cannot be blank');
    engine(email, 1, 'Email cannot be blank');
    engine(password, 2, 'Password cannot be blank');

})    

let engine = (id, serial,message) =>{
    if (id.value.trim() ===""){
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red"

        failureIcon[serial].style.opacity = "1"
        successIcon[serial].style.opacity = "0"

    } else{
        errorMsg[serial].innerHTML = ""
        id.style.border = "2px solid green"

        failureIcon[serial].style.opacity = "0"
        successIcon[serial].style.opacity = "1"

    }
}

username.value = localStorage.getItem ('username')
username.oninput = () =>{
    localStorage.setItem('username', username.value);
}

email.value = localStorage.getItem ('email')
email.oninput = () =>{
    localStorage.setItem('email', email.value);
    
}
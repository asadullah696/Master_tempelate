

let loginform = () =>{
    document.getElementById("signup").style.display = "none"
    document.getElementById("login").style.display = "flex"
}


let signupform = () =>{
    document.getElementById("signup").style.display = "flex"
    document.getElementById("login").style.display = "none"
}

const userProfile = [];
let userData = (ev) =>{
    ev.preventDefault();
    let userInfo = {
        name : document.getElementById("usermail").value, 
        password : document.getElementById("userpassword").value, 
    }
}
console.log(userProfile)
let savingData = () =>{
    userProfile.push(userData)
}
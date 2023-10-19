

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


        

        // Login Function

        const checkValidation = () =>{
        let email = ["asadullah", "badshah", "Kings", "uzair"]
        let password = ["12345678"]
        
        let useremail = document.getElementById("emailLogin").value ;
        let userpassword = document.getElementById("passwordLogin").value ;
        
        let emailCheck = !email.includes(useremail);
        console.log(emailCheck)
        let passwordCheck = !password.includes(userpassword);

        if(email.includes(useremail) && password.includes(userpassword)){
            true
            document.getElementById("loginPass").href = "./Html/main.html"
        }
        // else{
        //     if(emailCheck == true){
        //         document.getElementById("erroremail").style.display = "flex"
        //     }

        //     if(passwordCheck == true){
        //         document.getElementById("errorpassword").style.display = "flex"
        //     }
        }
let userDeatilslogin=JSON.parse(localStorage.getItem("user-data"))||[]

let loginData=JSON.parse(localStorage.getItem("loged-data"))||[]
loginData=userDeatilslogin
let mailData=JSON.parse(localStorage.getItem("login-value"))||[];

localStorage.setItem("loged-data",JSON.stringify(loginData))


let formData=document.getElementById("form-user-data");
let emailData=document.querySelector(".email-data");
let passData=document.querySelector(".password-data")


formData.addEventListener("submit",function(e){
    e.preventDefault();
    let x=false
    loginData.forEach((element) => {
        
        if(emailData.value==element.email && passData.value==element.password){
            x=true;
            mailData.push(element.fname);
            mailData.push(element.lname);
        }
      
        
    });

    if(x==true){
        alert("Login Successful");
        location.href=`index.html`

    }
    else{
        alert("You don't have an account");
    }
     
    localStorage.setItem("login-value",JSON.stringify(mailData))

})
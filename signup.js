let userDeatils=JSON.parse(localStorage.getItem("user-data"))||[]



let user_form_data=document.getElementById("user-form");
let emailData=document.querySelector(".emailD");
let mobileData=document.querySelector(".mobile-data");
let passwordData=document.querySelector(".password-data");
let f_name=document.querySelector(".f-name");
let l_name=document.querySelector(".l-name")

user_form_data.addEventListener("submit",function(e){
    e.preventDefault();


    console.log(emailData.value);
    if(emailData.value!="" && mobileData.value!="" && passwordData.value!=""){
        let obj={
            fname:f_name.value,
            lname:l_name.value,
            email:emailData.value,
            mobile:mobileData.value,
            password:passwordData.value
        }
        userDeatils.push(obj);
        
        localStorage.setItem("user-data",JSON.stringify(userDeatils))
      
        alert("Sign up Successful")


        location.href=`login.html`
      
    }
    else{
        alert("Please fill all the columns")
    }
   
})
let cartData = JSON.parse(localStorage.getItem("cart")) || [];
let AddressData=JSON.parse(localStorage.getItem("Address-Data"))||[];





let deliviryData=document.querySelector(".dilevryAdd");
Display(AddressData[0])

function Display(data){
    deliviryData.innerHTML="";
    let DisplayP=document.createElement("h4");
    DisplayP.innerText="Deliver To This Address";
    let Ddata=document.createElement("p");
    let arrData=[];
    for(let key in data){
        arrData.push(data[key])
        // console.log(data[key])
    }
    console.log(arrData)
    Ddata.innerText=arrData.join(",")


    deliviryData.append(DisplayP,Ddata)
}


let totMrp = document.getElementById("tot-price")
  let totDis = document.getElementById("tot-dis")
  let totPrice = document.getElementById("pay-amount")
  let dilCharge = document.getElementById("free-del")
  let savings=document.getElementById("savings")

  let Tmrp = 0;
  let TPrice = 0;
  for (let i = 0; i < cartData.length; i++) {
    Tmrp += cartData[i].mrp * cartData[i].quantity
    TPrice += Number(cartData[i].Price) * cartData[i].quantity

  }
  console.log(Tmrp)
  console.log(TPrice)
  totMrp.innerText = `₹${Tmrp}`;
  totPrice.innerText = `₹${TPrice}`;
  if (+cartData.length > 0) {
    if (TPrice > 500) {
      dilCharge.innerText = "FREE"
    }

  }

  savings.innerText=(Tmrp - TPrice)
  totDis.innerText = `- ₹${(Tmrp - TPrice)}`

  let order_summery_count=document.getElementById("order-summery-count")
  order_summery_count.innerText= cartData.length;




  let paymentbtn=document.getElementById("cod-btn");

  paymentbtn.addEventListener("click",function(){
    AddressData={...AddressData[0],paymenttype:`Cash on Delivery`}
    localStorage.setItem("Address-Data",JSON.stringify(AddressData))
     location.href=`paymentSuccessfull.html`

  })


  let cardname=document.getElementById("name-inp");
  let cardNum=document.getElementById("address-inp");
  let expdate=document.getElementById("landmark-inp");
  let ccvNum=document.getElementById("ccv-inp");

  let formEl=document.getElementById("form-input");

  formEl.addEventListener("submit",function(e){
    e.preventDefault();
    if(cardname.value=="" || cardNum.value=="" || expdate.value=="" || ccvNum.value==""){
        alert("Card is not Valid")
    }
    else{
        AddressData={...AddressData[0],paymenttype:`Card Payment`}
        localStorage.setItem("Address-Data",JSON.stringify(AddressData))
         location.href=`paymentSuccessfull.html`

    }

  })



  
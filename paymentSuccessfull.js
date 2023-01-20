let cartData = JSON.parse(localStorage.getItem("cart")) || [];
let Data=JSON.parse(localStorage.getItem("Address-Data"))||[];


  let pType = document.getElementById("pay-type")
  let Mnum = document.getElementById("mob-num")
  let totPrice = document.getElementById("tot-amt")
 

  
  let TPrice = 0;
  for (let i = 0; i < cartData.length; i++) {
    TPrice += Number(cartData[i].Price) * cartData[i].quantity
  }
 
  totPrice.innerText = `₹${TPrice}`;
 
Mnum.innerText=Data.mobile
pType.innerText =Data.paymenttype;

//   savings.innerText=(Tmrp - TPrice)
//   totDis.innerText=AddressData.mobile;







  let homebtn=document.getElementById("home-btn")

  homebtn.addEventListener("click",()=>{
    location.href=`index.html`
    localStorage.clear();
  })
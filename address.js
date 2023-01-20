let cartData = JSON.parse(localStorage.getItem("cart")) || [];


let totMrp = document.getElementById("tot-price")
let totDis = document.getElementById("tot-dis")
let totPrice = document.getElementById("pay-amount")
let dilCharge = document.getElementById("free-del")
let savings = document.getElementById("savings")

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

savings.innerText = (Tmrp - TPrice)
totDis.innerText = `- ₹${(Tmrp - TPrice)}`



let order_summery_count = document.getElementById("order-summery-count")
order_summery_count.innerText = cartData.length;


let nameInp = document.getElementById("name-inp");
let mobileInp = document.getElementById("mobile-inp");
let addressInp = document.getElementById("address-inp");
let pinInp = document.getElementById("pin-inp");
let formInp = document.getElementById("form-input");
let landmarkInp = document.getElementById("landmark-inp")

let AddressData = JSON.parse(localStorage.getItem("Address-Data")) || [];

formInp.addEventListener("submit", (event) => {
  event.preventDefault()
  if (nameInp.value == "" || mobileInp.value == "" || addressInp == "" || pinInp.value == "" || AddressData == []) {
    alert(`Please Fill All Madatory Fields`);
  }
  else {
    location.href = `payment.html`

    if (landmarkInp.value == "") {
      let obj = {
        name: nameInp.value,
        mobile: mobileInp.value,
        address: addressInp.value,
        pin: pinInp.value
      }
      AddressData.push(obj)
    }
    else {
      let obj = {
        name: nameInp.value,
        mobile: mobileInp.value,
        address: addressInp.value,
        landmark: landmarkInp.value,
        pin: pinInp.value
      }
      AddressData.push(obj)

    }
    localStorage.setItem("Address-Data", JSON.stringify(AddressData));

  }
})
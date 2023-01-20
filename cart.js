
let cartData = JSON.parse(localStorage.getItem("cart")) || [];


let itemCount = document.getElementById("item-count")
itemCount.innerText = cartData.length;

let countlength = Number(cartData.length)
let insideData = document.getElementById("inside-container")

Display_1(cartData)

function Display_1(data) {
  insideData.innerHTML = ""
  data.forEach((element, index) => {
    let card_product = document.createElement("div");
    let img_div = document.createElement("div")
    let image = document.createElement("img");


    let Riview_div = document.createElement("div")
    let review = document.createElement("p");
    let starimg = document.createElement("img")
    starimg.setAttribute("src", "./images/star png1.png")
    starimg.setAttribute("class", "star-png")
    let ratingValue=document.createElement("h4")
    ratingValue.innerText=element.review;
    ratingValue.setAttribute("class","rating-value")

    Riview_div.setAttribute("class", "riview-div")
    let product_name = document.createElement("p");
    product_name.setAttribute("class", "pro-name");
    let brandName=document.createElement("p")
    brandName.innerText=element.brand
    brandName.setAttribute("class","brand-name");
    let mrp = document.createElement("p");
    let price = document.createElement("h3");
    let discount = document.createElement("p");
    discount.innerText = `${element.Discount} Off`;
    discount.setAttribute("class", "discount-price")
    let Add_to_cart = document.createElement("button")
    let whiteStar = document.createElement("img");
    whiteStar.setAttribute("src", "./images/star png.png")
    whiteStar.setAttribute("class", "star-png")

    mrp.setAttribute("class", "mrp-cross")
    image.setAttribute("src", element.img)
    review.innerText = element.rating;
    product_name.innerText = element.name;
    mrp.innerText = `₹${element.mrp}`;
    price.innerText = `₹${element.Price}`;
    let divButtons = document.createElement("div")
    divButtons.setAttribute("class", "div-buttons")
    let incrPro = document.createElement("button");
    let ProCountNum = document.createElement("span")
    ProCountNum.innerText = element.quantity;
    let decPro = document.createElement("button");
    incrPro.innerText = "+";
    decPro.innerText = "-"
    Add_to_cart.innerText = "Remove"
    Add_to_cart.addEventListener("click", function () {
      countlength--
      let filtered = data.filter((ele, ind) => {
        
        // element.quantity=1;
        if (index == ind) {
          return false;
        }
        else {
          return true;
        }
      })
    
      Display_1(filtered)
      location.reload()
      localStorage.setItem("cart", JSON.stringify(filtered))
      
      itemCount.innerText = countlength
      // order_summery_count.innerText= cartData.length
      

    })
    // order_summery_count.innerText= cartData.length

    incrPro.addEventListener("click", function () {
      element.quantity++;
      localStorage.setItem("cart",JSON.stringify(cartData))
      ProCountNum.innerText = element.quantity;
      // Display_1(cartData)



      let Tmrp = 0;
      let TPrice = 0;
      for (let i = 0; i < data.length; i++) {
        Tmrp += data[i].mrp * data[i].quantity
        TPrice += Number(data[i].Price) * data[i].quantity

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


      totDis.innerText = `- ₹${(Tmrp - TPrice)}`
    })
    decPro.addEventListener("click", function () {
      if (element.quantity > 1) {
        element.quantity--;
        localStorage.setItem("cart",JSON.stringify(cartData))
        ProCountNum.innerText = element.quantity;
        // Display_1(cartData)
       
      }


      let Tmrp = 0;
      let TPrice = 0;
      for (let i = 0; i < data.length; i++) {
        Tmrp += data[i].mrp * data[i].quantity
        TPrice += Number(data[i].Price) * data[i].quantity

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


      totDis.innerText = `- ₹${(Tmrp - TPrice)}`


    })






    if (element.rating > 0) {
      Riview_div.append(review, starimg)
    }
    else {
      Riview_div.append(review, whiteStar)
    }
    img_div.append(image)
    divButtons.append(decPro, ProCountNum, incrPro, Add_to_cart)
    card_product.append(img_div, Riview_div,ratingValue, product_name,brandName, mrp, price, discount, divButtons)
    insideData.append(card_product)

  });

  let totMrp = document.getElementById("tot-price")
  let totDis = document.getElementById("tot-dis")
  let totPrice = document.getElementById("pay-amount")
  let dilCharge = document.getElementById("free-del")

  let Tmrp = 0;
  let TPrice = 0;
  for (let i = 0; i < data.length; i++) {
    Tmrp += data[i].mrp * data[i].quantity
    TPrice += Number(data[i].Price) * data[i].quantity

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


  totDis.innerText = `- ₹${(Tmrp - TPrice)}`



}
let order_summery_count=document.getElementById("order-summery-count")
order_summery_count.innerText= cartData.length



let Nextbutton=document.getElementById("Payment-button");

Nextbutton.addEventListener("click",function(){
  if(cartData.length>0){
    location.href=`address.html`
  }
  else{
    alert("Cart is Empty..")
  }
})
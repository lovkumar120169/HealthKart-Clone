let imagesLink = [
  "https://img7.hkrtcdn.com/22822/bnr_2282186_o.jpg",
  "https://img9.hkrtcdn.com/22824/bnr_2282348_o.jpg",
  "https://img1.hkrtcdn.com/22822/bnr_2282190_o.png",
  "https://img9.hkrtcdn.com/22822/bnr_2282198_o.jpg",
  "https://img1.hkrtcdn.com/22823/bnr_2282210_o.jpg",
  "https://img9.hkrtcdn.com/22823/bnr_2282218_o.jpg",
];

let imageTag = document.getElementById("slide-1-image");
let back_btn = document.getElementById("back-btn");
let forword_btn = document.getElementById("forword-btn");

let count = 0;
imageTag.setAttribute("src", imagesLink[count])
count++
let Dots = document.querySelector(".slick-dots")
setInterval(() => {

  imageTag.setAttribute("src", imagesLink[count])
  count++;
  if (count == 5) {
    count = 0;
  }


}, 3000)

//   forword_btn.addEventListener("click",function(){
//     count++;
//     imageTag.setAttribute("src",imagesLink[count])
//     if(count==5){
//         count=0;
//       }
// })


// back_btn.addEventListener("click",function(){
//     if(count==0){
//         count=5;
//     }
//     count--;
//     imageTag.setAttribute("src",imagesLink[count]) 
//  })

let product_1 = [
  {
    name: "HealthKart HK Vitals Super Strength Fish Oil Purity 84%, 60",
    brand: "HealthKart",
    rating: 0,
    mrp: 999,
    Price: 599,
    Discount: "40%",
    img: "https://img3.hkrtcdn.com/22586/prd_2258522_o.jpg",
    id: 1,
    quantity:1
  },
  {
    name: "MuscleBlaze Super Gainer XXL Powder, 5 kg (11 lb), Chocolate",
    brand: "Muscleblaze",
    rating: 4.4,
    mrp: 6449,
    Price: 3599,
    Discount: "44%",
    img: "https://img4.hkrtcdn.com/12151/prd_1215013-MuscleBlaze-Super-Gainer-XXL-OP-11-lb-Chocolate_o.jpg",
    id: 2,
    quantity:1
  },
  {
    name: "MuscleBlaze Beginner's Protein Powders, 1 kg (2.2 lb), Cookies..",
    brand: "Muscleblaze",
    rating: 4.4,
    mrp: 2279,
    Price: 1329,
    Discount: "41%",
    img: "https://img6.hkrtcdn.com/12151/prd_1215005-MuscleBlaze-Beginners-Protein-OP-2.2-lb-Cookies-and-Cream_o.jpg",
    id: 3,
    quantity:1
  },
  {
    name: "MB Fuel One Whey Protein Powder Immunity+, 1 kg (2.2 lb), Chocolate",
    brand: "MB Fuel One",
    rating: 4.5,
    mrp: 2669,
    Price: 1749,
    Discount: "34%",
    img: "https://img2.hkrtcdn.com/13039/prd_1303871-MB-Fuel-One-Whey-Protein-Immunity-OP-2.2-lb-Chocolate_o.jpg",
    id: 4,
    quantity:1
  },
  {
    name: "HealthKart Biotin (10000 mcg) tablets, 90 tablet(s)",
    brand: "Healthkart",
    rating: 0,
    mrp: 1000,
    Price: 449,
    Discount: "55%",
    img: "https://img2.hkrtcdn.com/14613/prd_1461211-HealthKart-Biotin-10000-mcg-OP-90-tablets-Unflavoured_o.jpg",
    id: 5,
    quantity:1
  },
  {
    name: "MuscleBlaze Beginner's Protein Powders, 1 kg (2.2 lb).....",
    brand: "Muscleblaze",
    rating: 4.4,
    mrp: 2279,
    Price: 1329,
    Discount: "41%",
    img: "https://img2.hkrtcdn.com/15126/prd_1512571-MuscleBlaze-Beginners-Protein-OP-2.2-lb-Magical-Mango_o.jpg",
    id: 6,
    quantity:1
  },
  {
    name: "MuscleBlaze Raw Whey Isolate Powder, 1 kg (2.2 lb)",
    brand: "Muscleblaze",
    rating: 3.9,
    mrp: 3699,
    Price: 2199,
    Discount: "40%",
    img: "https://img8.hkrtcdn.com/12485/prd_1248437_o.jpg",
    id: 7,
    quantity:1
  },
  {
    name: "MuscleBlaze Biozyme Performance Whey Protein, 2 kg (4.4 lb)...",
    brand: "Muscleblaze",
    rating: 4.9,
    mrp: 6149,
    Price: 4749,
    Discount: "22%",
    img: "https://img10.hkrtcdn.com/15127/prd_1512659-MuscleBlaze-Biozyme-Performance-Whey-OP-4.4-lb-Rich-Chocolate_o.jpg",
    id: 8,
    quantity:1
  },
  {
    name: "MuscleBlaze Whey Performance (70%) Protein OP, 4 kg (8.8 lb)..",
    brand: "Muscleblaze",
    rating: 4.7,
    mrp: 8599,
    Price: 8399,
    Discount: "2%",
    img: "https://img6.hkrtcdn.com/12151/prd_1215035-MuscleBlaze-Whey-Performance-70-Protein-OP-8.8-lb-Chocolate_o.jpg",
    id: 9,
    quantity:1
  },
  {
    name: "MuscleBlaze Super Gainer XXL Powder, 3 kg (6.6 lb), Cookies &..",
    brand: "Muscleblaze",
    rating: 4.4,
    mrp: 3749,
    Price: 2449,
    Discount: "34%",
    img: "https://img4.hkrtcdn.com/8698/prd_869763-MuscleBlaze-Super-Gainer-XXL-OP-6.6-lb-Cookies-Cream_o.jpg",
    id: 10,
    quantity:1
  },
  {
    name: "MuscleBlaze Super Gainer XXL Powder, 3 kg (6.6 lb), Chocolate",
    brand: "Muscleblaze",
    rating: 4.4,
    mrp: 4299,
    Price: 2449,
    Discount: "43%",
    img: "https://img2.hkrtcdn.com/12139/prd_1213811-MuscleBlaze-Super-Gainer-XXL-OP-6.6-lb-Chocolate_o.jpg",
    id: 11,
    quantity:1
  },
  {
    name: "MuscleBlaze Super Gainer XXL Powder, 1 kg (2.2 lb), Cookies..",
    brand: "Muscleblaze",
    rating: 4.4,
    mrp: 1449,
    Price: 849,
    Discount: "41%",
    img: "https://img4.hkrtcdn.com/12151/prd_1215023-MuscleBlaze-Super-Gainer-XXL-OP-2.2-lb-Cookies-Cream_o.jpg",
    id: 12,
    quantity:1
  },
  {
    name: "MuscleBlaze High Protein Lean Mass Gainer Powder, 5 kg (11 lb)",
    brand: "Muscleblaze",
    rating: 0,
    mrp: 6999,
    Price: 5599,
    Discount: "20%",
    img: "https://img6.hkrtcdn.com/12326/prd_1232515-MuscleBlaze-High-Protein-Lean-Mass-Gainer-OP-11-lb-Chocolate_o.jpg",
    id: 13,
    quantity:1
  },
  {
    name: "MuscleBlaze Super Gainer XXL, 3 kg (6.6 lb), Chocolate Mint",
    brand: "Muscleblaze",
    rating: 4.5,
    mrp: 4299,
    Price: 2449,
    Discount: "43%",
    img: "https://img8.hkrtcdn.com/13355/prd_1335497-MuscleBlaze-Super-Gainer-XXL-6.6-lb-Chocolate-Mint_o.jpg",
    id: 14,
    quantity:1
  },
  {
    name: "MB Fuel One Whey Protein Powder Immunity+, 2 kg (4.4 lb), Chocolate",
    brand: "MB Fuel One",
    rating: 4.5,
    mrp: 4499,
    Price: 3599,
    Discount: "20%",
    img: "https://img2.hkrtcdn.com/15126/prd_1512521-MB-Fuel-One-Whey-Protein-Immunity-OP-4.4-lb-Chocolate_o.jpg",
    id: 15,
    quantity:1
  },
  {
    name: "MB Fuel One Whey Protein Powder Immunity+, 1 kg (2.2 lb), Mango",
    brand: "MB Fuel One",
    rating: 4.5,
    mrp: 2669,
    Price: 1749,
    Discount: "34%",
    img: "https://img4.hkrtcdn.com/15126/prd_1512523-MB-Fuel-One-Whey-Protein-Immunity-OP-2.2-lb-Mango_o.jpg",
    id: 16,
    quantity:1
  }
  //  {
  //   name:"MB Fuel One Whey Protein Powder Immunity+, 500 g (1.1 lb), Chocolate",
  //   brand:"MB Fuel One",
  //   rating:4.5,
  //   mrp:1199,
  //   Price:1049,
  //   Discount:"12%",
  //   img:"https://img1.hkrtcdn.com/22481/prd_2248030-MB-Fuel-One-Whey-Protein-Immunity-OP-1.1-lb-Chocolate_o.jpg" ,  
  //   id:17
  // },
  //  {
  //   name:"MuscleBlaze Beginner's Protein Powders, 1 kg (2.2 lb), Blueberry",
  //   brand:"Muscleblaze",
  //   rating:4.4,
  //   mrp:2279,
  //   Price:1329,
  //   Discount:"41%",
  //   img:"https://img6.hkrtcdn.com/15126/prd_1512585-MuscleBlaze-Beginners-Protein-OP-2.2-lb-Blueberry_o.jpg" ,  
  //   id:18

  //  }
];



let cartData = JSON.parse(localStorage.getItem("cart")) || []


let container_product_1 = document.querySelector(".container-product-1");
let countEl = document.getElementById("count");
countEl.innerText = cartData.length;
let countNum = 0;
Display_1(product_1)

function Display_1(data) {

  data.forEach((element) => {
    console.log("luv")
    let card_product = document.createElement("div");
    let img_div = document.createElement("div")
    let image = document.createElement("img");


    let Riview_div = document.createElement("div")
    let review = document.createElement("p");
    let starimg = document.createElement("img")
    starimg.setAttribute("src", "./images/star png1.png")
    starimg.setAttribute("class", "star-png")

    Riview_div.setAttribute("class", "riview-div")
    let product_name = document.createElement("p");
    let mrp = document.createElement("p");
    let price = document.createElement("h3");
    let discount = document.createElement("p");
    discount.innerText = `${element.Discount} Off`;
    discount.setAttribute("class", "discount-price")
    let Add_to_cart = document.createElement("button")


    mrp.setAttribute("class", "mrp-cross")
    image.setAttribute("src", element.img)
    review.innerText = element.rating;
    product_name.innerText = element.name;
    mrp.innerText = `₹${element.mrp}`;
    price.innerText = `₹${element.Price}`;
    Add_to_cart.innerText = "Add To Cart"
    Add_to_cart.setAttribute("class", "first-click")
    Add_to_cart.addEventListener("click", function () {
      let x=false
      for (let i = 0; i < cartData.length; i++) {
        
        if (element.id == cartData[i].id) {
              x = true;
        }
      }

      if (x == true) {
        Add_to_cart.setAttribute("onclick", location.href = `cart.html`);
      }
      else {
        countNum = Number(cartData.length);
        countNum++
        countEl.innerText = countNum;

        cartData.push(element)

        localStorage.setItem("cart", JSON.stringify(cartData))

        Add_to_cart.innerText = "Product Added"

      }
    })


    if (element.rating > 0) {
      Riview_div.append(review, starimg)
    }
    else {
      Riview_div.append(review)
    }
    img_div.append(image)
    card_product.append(img_div, Riview_div, product_name, mrp, price, discount, Add_to_cart)
    container_product_1.append(card_product)

  });


}






let imagesLink_slide_2 = [
  "https://img9.hkrtcdn.com/22822/bnr_2282198_o.jpg",
  "https://img1.hkrtcdn.com/22823/bnr_2282210_o.jpg",
  "https://img9.hkrtcdn.com/22823/bnr_2282218_o.jpg",
];



let imageTag_2 = document.getElementById("slide-2-image");
let back_btn_2 = document.getElementById("back-btn-2");
let forword_btn_2 = document.getElementById("forword-btn-2");

let count_2 = 0;
imageTag_2.setAttribute("src", imagesLink_slide_2[count_2])
count_2++
setInterval(() => {
  imageTag_2.setAttribute("src", imagesLink_slide_2[count_2])
  count_2++;
  if (count_2 == 2) {
    count_2 = 0;
  }


}, 2000);










let product_2 = [
  {
    name: "HealthKart HK Vitals Multivitamin with Multimineral,Taurine..",
    brand: "HealthKart",
    rating: 4.6,
    mrp: 950,
    Price: 574,
    Discount: "39% Off",
    img: "https://img9.hkrtcdn.com/22178/prd_2217718-HealthKart-HK-Vitals-Multivitamin-with-MultimineralTaurine-Ginseng-Extract-90-tablets-Unflavoured_o.jpg",
    id: 1
  },
  {
    name: "HealthKart HK Vitals Fish Oil 1000mg with 180mg EPA..",
    brand: "HealthKart",
    rating: 4.6,
    mrp: 699,
    Price: 379,
    Discount: "45% Off",
    img: "https://img5.hkrtcdn.com/22258/prd_2225764-HealthKart-HK-Vitals-Fish-Oil-1000mg-with-180mg-EPA-and-120mg-DHA-60-capsules_o.jpg",
    id: 2
  },
  {
    name: "HealthKart HK Vitals Biotin (10000 mcg), 90 tablet(s)",
    brand: "HealthKart",
    rating: 4.4,
    mrp: 659,
    Price: 499,
    Discount: "24% Off",
    img: "https://img5.hkrtcdn.com/20643/prd_2064214-HealthKart-HK-Vitals-Biotin-10000-mcg-90-tablets-Unflavoured_o.jpg",
    id: 3
  },
  {
    name: "HealthKart HK Vitals Skin Radiance Collagen, 200 g, Orange",
    brand: "HealthKart",
    rating: 4.3,
    mrp: 1099,
    Price: 849,
    Discount: "22% Off",
    img: "https://img3.hkrtcdn.com/16796/prd_1679532-HealthKart-HK-Vitals-Skin-Radiance-Collagen-200-g-Orange_o.jpg",
    id: 4
  }

];


let container_product_2 = document.querySelector(".container-product-2");


Display_2(product_2)
function Display_2(data) {

  data.forEach((element) => {
    console.log("luv")
    let card_product = document.createElement("div");
    let img_div = document.createElement("div")
    let image = document.createElement("img");


    let Riview_div = document.createElement("div")
    let review = document.createElement("p");
    let starimg = document.createElement("img")
    starimg.setAttribute("src", "./images/star png1.png")
    starimg.setAttribute("class", "star-png")

    Riview_div.setAttribute("class", "riview-div")
    let product_name = document.createElement("p");
    let mrp = document.createElement("p");
    let price = document.createElement("h3");
    let discount = document.createElement("p");
    discount.innerText = element.Discount;
    discount.setAttribute("class", "discount-price")
    let Add_to_cart = document.createElement("button")


    mrp.setAttribute("class", "mrp-cross")
    image.setAttribute("src", element.img)
    review.innerText = element.rating;
    product_name.innerText = element.name;
    mrp.innerText = `₹${element.mrp}`;
    price.innerText = `₹${element.Price}`;
    Add_to_cart.innerText = "Add To Cart"


    if (element.rating > 0) {
      Riview_div.append(review, starimg)
    }
    else {
      Riview_div.append(review)
    }
    img_div.append(image)
    card_product.append(img_div, Riview_div, product_name, mrp, price, discount, Add_to_cart)
    container_product_2.append(card_product)

  });


}















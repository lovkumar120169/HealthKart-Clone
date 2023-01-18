let imagesLink=[
    "https://img7.hkrtcdn.com/22822/bnr_2282186_o.jpg",
    "https://img9.hkrtcdn.com/22824/bnr_2282348_o.jpg",
    "https://img1.hkrtcdn.com/22822/bnr_2282190_o.png",
    "https://img9.hkrtcdn.com/22822/bnr_2282198_o.jpg",
    "https://img1.hkrtcdn.com/22823/bnr_2282210_o.jpg",
    "https://img9.hkrtcdn.com/22823/bnr_2282218_o.jpg",
];

let imageTag=document.getElementById("slide-1-image");
let back_btn=document.getElementById("back-btn");
let forword_btn=document.getElementById("forword-btn");

let count=0;
imageTag.setAttribute("src",imagesLink[count])
count++
let Dots=document.querySelector(".slick-dots")
    setInterval(()=>{
        imageTag.setAttribute("src",imagesLink[count])
        count++;
        if(count==5){
          count=0;
        }
      
      
      },5000)

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


    

  



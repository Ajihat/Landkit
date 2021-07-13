const bannerArrowRight = document.querySelector(".arrowright");
const bannerArrowLeft = document.querySelector(".arrowleft");
const bannerImg = document.querySelector(".banner_img");
const instagramText = document.querySelector(".text_instagram");
const airbnbText = document.querySelector(".text_airbnb");


// ADDING OPACITY WHEN CLICKING ARROW BUTTONS
bannerArrowRight.addEventListener("mousedown", function(){
    bannerArrowRight.style.opacity = "0.8"
})

bannerArrowRight.addEventListener("mouseup", function(){
    bannerArrowRight.style.opacity = "1"
})

bannerArrowLeft.addEventListener("mousedown", function(){
    bannerArrowLeft.style.opacity = "0.8"
})

bannerArrowLeft.addEventListener("mouseup", function(){
    bannerArrowLeft.style.opacity = "1"
})


// CHANGING BANNER IMG WHEN CLICKING ON ARROW BUTTONS

bannerArrowRight.addEventListener("click", function(){
    bannerImg.classList.toggle("banner_img_invisible")
})

bannerArrowLeft.addEventListener("click", function(){
    bannerImg.classList.toggle("banner_img_invisible")
})


// CHANGING BANNER TEXT WHEN CLICKING ON ARROW BUTTONS


bannerArrowRight.addEventListener("click", function(){
    instagramText.classList.toggle("text_invisible")
})

bannerArrowRight.addEventListener("click", function(){
    airbnbText.classList.toggle("text_invisible")
})

bannerArrowLeft.addEventListener("click", function(){
    instagramText.classList.toggle("text_invisible")
})

bannerArrowLeft.addEventListener("click", function(){
    airbnbText.classList.toggle("text_invisible")
})
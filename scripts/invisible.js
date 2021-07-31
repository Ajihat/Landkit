const mottoInvisible = document.querySelector(".motto.invisible");
const landingImgInvisible = document.querySelector(".landing_img.invisible");
const fav1Invisible = document.querySelector(".fav1.invisible");
const fav2Invisible = document.querySelector(".fav2.invisible");
const fav3Invisible = document.querySelector(".fav3.invisible");
const formInvisible = document.querySelector(".form.invisible");
const textTypingMottoInvisible = document.querySelector(".texttyping_motto.invisible");
const dashboardInvisible = document.querySelector(".dashboard_motto");
const dashboardImgInvisible = document.querySelector("img.invisible");
const standardOffert = document.querySelector(".standardoffert");
const enterpriseOffert = document.querySelector(".enterpriseoffert");

// REMOVING "INVISIBLE" CLASSES FROM LANDING ITEMS 
setTimeout(function(){ 
    mottoInvisible.classList.remove("invisible");
    landingImgInvisible.classList.remove("invisible");
    fav1Invisible.classList.remove("invisible");
    fav2Invisible.classList.remove("invisible");
    fav3Invisible.classList.remove("invisible");
}, 1000);



// REMOVING "INVISIBLE" CLASSES FROM TYPEWRITING ITEMS

window.addEventListener("scroll", function(){

    let currentScrollPosition = window.scrollY
    if (currentScrollPosition > 0.8*landingWrapperHeight) {
        formInvisible.classList.remove("invisible")
        textTypingMottoInvisible.classList.remove("invisible")
    }

    if (currentScrollPosition > landingWrapperHeight + logosHeight + 0.4*texttypingHeight) {
        dashboardInvisible.classList.remove("invisible")
        dashboardImgInvisible.classList.remove("invisible")
    }

    if (currentScrollPosition > landingWrapperHeight + logosHeight + texttypingHeight + dashboardHeight + asideMottoHeight + bannerFirstLayerHeight + 0.5*statsHeight) {
        standardOffert.classList.remove("invisible")
        enterpriseOffert.classList.remove("invisible")
    }

})


// REMOVING "INVISIBLE" CLASSES FROM DASHBOARD ITEMS


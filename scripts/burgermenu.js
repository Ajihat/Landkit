const burgerIcon = document.querySelector(".burger");
const mobileMenu = document.querySelector(".phone_menu");
const closeMenu = document.querySelector(".close_menu");
const accountDivs = [...document.querySelectorAll("div.account")];

burgerIcon.addEventListener("click", function () {
    mobileMenu.style.display = "flex";
    document.body.style.height = "100vh";
    document.body.style.overflowY = "hidden";
})

closeMenu.addEventListener("click", function () {
    mobileMenu.style.display = "none";
    document.body.style.height = "auto";
    document.body.style.overflowY = "visible";
})

accountDivs.forEach(div => {
    div.addEventListener("click", function () {
        const arrow = document.querySelector(`div#${this.id} i`);
        arrow.classList.toggle("rotated");
        const p = document.querySelector(`div#${this.id} p`);
        p.classList.toggle("checked");
        const hiddenDiv = document.querySelector(`div.${this.id}`);
        console.log(hiddenDiv)
        hiddenDiv.classList.toggle("visible")
    })
}

)
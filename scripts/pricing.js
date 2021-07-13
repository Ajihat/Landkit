const buttonSwitch = document.querySelector(".switch_button")
const buttonCircle = document.querySelector(".circle")
const price = document.querySelector(".standardoffert p:nth-of-type(2) span") 

buttonSwitch.addEventListener("click", function(){

    buttonSwitch.classList.toggle("switch_button_active");
    buttonCircle.classList.toggle("circle_active");

    if (buttonCircle.classList.contains("circle_active")) {
        let time = 50;
        for(let i = Number(price.innerText); i < 50; i++) {
            setTimeout(function(){price.innerText = String(i)}, time)
            time += 50
        }
    }

    if (buttonCircle.classList.contains("circle")) {
        let time = 50;
        for(let a = Number(price.innerText); a > 28; a--) {
            setTimeout(function(){price.innerText = String(a)}, time)
            time += 50
        }
    }
})


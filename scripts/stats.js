const landingWrapperHeight = document.querySelector(".landing_wrapper").clientHeight;
const logosHeight = document.querySelector(".logos").clientHeight;
const texttypingHeight = document.querySelector(".texttyping").clientHeight;
const dashboardHeight = document.querySelector(".dashboard").clientHeight;
const asideMottoHeight = document.querySelector(".aside_motto").clientHeight;
const bannerFirstLayerHeight = document.querySelector(".banner_firstlayer").clientHeight;
const statsHeight = document.querySelector(".stats").clientHeight;

const satisfaction = document.querySelector(".text div div:first-child p:first-child");
const support = document.querySelector(".text div div:nth-of-type(2) p:first-child span")
const sales = document.querySelector(".text div div:last-child p:first-child")

// SATISFACTION CODE

window.addEventListener("scroll", function(){

    let currentScrollPosition = window.scrollY
    
    if (currentScrollPosition > landingWrapperHeight + logosHeight + texttypingHeight + dashboardHeight + asideMottoHeight + 0.4*bannerFirstLayerHeight && satisfaction.innerText == "50 %" ) {
        
        let timesatisfaction = 40
        for(let i = 51; i < 101; i++) {
            setTimeout(function(){satisfaction.innerText = String(i) + " %"}, timesatisfaction)
            timesatisfaction += 40
        }

        
    }

    if (currentScrollPosition > landingWrapperHeight + logosHeight + texttypingHeight + dashboardHeight + asideMottoHeight + 0.4*bannerFirstLayerHeight && support.innerText == "12" ) {
        
        let timesupport = 155
        for(let a = 13; a < 25; a++) {
            setTimeout(function(){support.innerText = String(a)}, timesupport)
            timesupport += 155
        }

        
    }

    if (currentScrollPosition > landingWrapperHeight + logosHeight + texttypingHeight + dashboardHeight + asideMottoHeight + 0.4*bannerFirstLayerHeight && sales.innerText == "50 k+" ) {
        
        let timesales = 40
        for(let b = 51; b < 101; b++) {
            setTimeout(function(){sales.innerText = String(b) + " k+"}, timesales)
            timesales += 40
        }
    }
})


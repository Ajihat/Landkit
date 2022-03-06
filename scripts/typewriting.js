const spanWriteText = document.getElementById("typing");
const timeForLetter = 70;  //ms
const timeForLastLetter = 500; //ms
const text1 = ["", "D", "e", "v", "e", "l", "o", "p", "e", "r", "s", "."];
const text2 = ["", "D", "e", "s", "i", "g", "n", "e", "r", "s", "."];
const text3 = ["", "F", "o", "u", "n", "d", "e", "r", "s", "."];
const totalTypingTime = (((text1.length + text2.length + text3.length) * 2) - 3) * timeForLetter + 3 * timeForLastLetter


setInterval(function () {
    let time = 0;
    let currentLettersText1 = [];
    let currentLettersText2 = [];
    let currentLettersText3 = [];
    for (let i = 0; i < text1.length * 2; i++) {
        if (i < text1.length) {
            currentLettersText1.push(text1[i]);
            let currentText = currentLettersText1.join("")
            setTimeout(function () {
                spanWriteText.innerText = currentText
            }, time);
            time += timeForLetter;
        } else {
            currentLettersText1.splice(currentLettersText1.length - 1);
            let currentText = currentLettersText1.join("");
            let timeValue = (i === text1.length) ? timeForLastLetter : timeForLetter;
            time += timeValue;
            setTimeout(function () {
                spanWriteText.innerText = currentText;
            }, time)

        }
    }
    for (let i = 0; i < text2.length * 2; i++) {
        if (i < text2.length) {
            currentLettersText2.push(text2[i]);
            let currentText = currentLettersText2.join("")
            setTimeout(function () {
                spanWriteText.innerText = currentText
            }, time);
            time += timeForLetter;
        } else {
            currentLettersText2.splice(currentLettersText2.length - 1);
            let currentText = currentLettersText2.join("");
            let timeValue = (i === text2.length) ? timeForLastLetter : timeForLetter;
            time += timeValue;
            setTimeout(function () {
                spanWriteText.innerText = currentText;
            }, time)

        }
    }

    for (let i = 0; i < text3.length * 2; i++) {
        if (i < text3.length) {
            currentLettersText3.push(text3[i]);
            let currentText = currentLettersText3.join("")
            setTimeout(function () {
                spanWriteText.innerText = currentText
            }, time);
            time += timeForLetter;
        } else {
            currentLettersText3.splice(currentLettersText3.length - 1);
            let currentText = currentLettersText3.join("");
            let timeValue = (i === text3.length) ? timeForLastLetter : timeForLetter;
            time += timeValue;
            setTimeout(function () {
                spanWriteText.innerText = currentText;
            }, time)

        }
    }

}, totalTypingTime)


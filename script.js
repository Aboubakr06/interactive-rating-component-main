let SubmitBtn = document.getElementById("submit-btn");
let RateAgain = document.getElementById("rate-again")
let TopContainer = document.querySelector(".top");
let BottomContainer = document.querySelector(".bottom");

let numbersEl = ["1", "2", "3", "4", "5"];

let RatingVal = "";
let selectedRat = document.getElementById("selected-rating")


for (let i = 0; i < numbersEl.length; i++) {
    let button = document.getElementById(numbersEl[i]);

    button.addEventListener("click", function() {
        for (let j = 0; j < numbersEl.length; j++) {
            let selected = document.getElementById(numbersEl[j]);
            selected.style.background = "hsl(213, 19%, 15%)";
            selected.style.color = "hsl(217, 12%, 63%)";
        }
        button.style.background = "hsl(217, 12%, 63%)";
        button.style.color = "white";
        RatingVal = i+1;
    });
}

SubmitBtn.addEventListener("click", function () {
    if (RatingVal > 0) {
    TopContainer.style.display = "none";
    BottomContainer.style.display = "grid";
    selectedRat.innerHTML = `You selected ${RatingVal} out of 5`
}

});

RateAgain.addEventListener("click", function () {
    TopContainer.style.display = "grid";
    BottomContainer.style.display = "none";

});

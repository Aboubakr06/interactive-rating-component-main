let SubmitBtn = document.getElementById("submit-btn");
let RateAgain = document.getElementById("rate-again")
let TopContainer = document.querySelector(".top");
let BottomContainer = document.querySelector(".bottom");

let OneBtn = document.getElementById("1");
let TwoBtn = document.getElementById("2");
let ThreeBtn = document.getElementById("3");
let FourBtn = document.getElementById("4");
let FiveBtn = document.getElementById("5");

let RatingVal = "";
let selectedRat = document.getElementById("selected-rating")


OneBtn.addEventListener("click", function() {
    OneBtn.style.background = "hsl(217, 12%, 63%)";
    OneBtn.style.color = "white"
    
    TwoBtn.style.background = "hsl(213, 19%, 15%)";
    ThreeBtn.style.background = "hsl(213, 19%, 15%)";
    FourBtn.style.background = "hsl(213, 19%, 15%)";
    FiveBtn.style.background = "hsl(213, 19%, 15%)";

    TwoBtn.style.color = "hsl(217, 12%, 63%)";
    ThreeBtn.style.color = "hsl(217, 12%, 63%)";
    FourBtn.style.color = "hsl(217, 12%, 63%)";
    FiveBtn.style.color = "hsl(217, 12%, 63%)";
    
    RatingVal = 1;
})

TwoBtn.addEventListener("click", function() {
    TwoBtn.style.background = "hsl(217, 12%, 63%)";
    TwoBtn.style.color = "white"

    OneBtn.style.background = "hsl(213, 19%, 15%)";
    ThreeBtn.style.background = "hsl(213, 19%, 15%)";
    FourBtn.style.background = "hsl(213, 19%, 15%)";
    FiveBtn.style.background = "hsl(213, 19%, 15%)";

    OneBtn.style.color = "hsl(217, 12%, 63%)";
    ThreeBtn.style.color = "hsl(217, 12%, 63%)";
    FourBtn.style.color = "hsl(217, 12%, 63%)";
    FiveBtn.style.color = "hsl(217, 12%, 63%)";

    RatingVal = 2;
})

ThreeBtn.addEventListener("click", function() {
    ThreeBtn.style.background = "hsl(217, 12%, 63%)";
    ThreeBtn.style.color = "white"

    OneBtn.style.background = "hsl(213, 19%, 15%)";
    TwoBtn.style.background = "hsl(213, 19%, 15%)";
    FourBtn.style.background = "hsl(213, 19%, 15%)";
    FiveBtn.style.background = "hsl(213, 19%, 15%)";

    OneBtn.style.color = "hsl(217, 12%, 63%)";
    TwoBtn.style.color = "hsl(217, 12%, 63%)";
    FourBtn.style.color = "hsl(217, 12%, 63%)";
    FiveBtn.style.color = "hsl(217, 12%, 63%)";

    RatingVal = 3;
})

FourBtn.addEventListener("click", function() {
    FourBtn.style.background = "hsl(217, 12%, 63%)";
    FourBtn.style.color = "white"
    
    OneBtn.style.background = "hsl(213, 19%, 15%)";
    TwoBtn.style.background = "hsl(213, 19%, 15%)";
    ThreeBtn.style.background = "hsl(213, 19%, 15%)";
    FiveBtn.style.background = "hsl(213, 19%, 15%)";

    OneBtn.style.color = "hsl(217, 12%, 63%)";
    TwoBtn.style.color = "hsl(217, 12%, 63%)";
    ThreeBtn.style.color = "hsl(217, 12%, 63%)";
    FiveBtn.style.color = "hsl(217, 12%, 63%)";
    
    RatingVal = 4;
})

FiveBtn.addEventListener("click", function() {
    FiveBtn.style.background = "hsl(217, 12%, 63%)";
    FiveBtn.style.color = "white"
    
    OneBtn.style.background = "hsl(213, 19%, 15%)";
    TwoBtn.style.background = "hsl(213, 19%, 15%)";
    ThreeBtn.style.background = "hsl(213, 19%, 15%)";
    FourBtn.style.background = "hsl(213, 19%, 15%)";

    OneBtn.style.color = "hsl(217, 12%, 63%)";
    TwoBtn.style.color = "hsl(217, 12%, 63%)";
    ThreeBtn.style.color = "hsl(217, 12%, 63%)";
    FourBtn.style.color = "hsl(217, 12%, 63%)";
    
    RatingVal = 5;
})


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

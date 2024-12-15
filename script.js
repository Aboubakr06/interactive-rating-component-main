let SubmitBtn = document.getElementById("submit-btn");
let RateAgain = document.getElementById("rate-again")
let TopContainer = document.querySelector(".top");
let BottomContainer = document.querySelector(".bottom");
let selectedRat = document.querySelector("#selected-rating span");

let RatingVal = null;

const selectedStyles = (element) => {
	element.style.background = "hsl(217, 12%, 63%)";
    element.style.color = "hsl(0, 0%, 100%)";
}

const removeStyles = () => {
	for (let i = 0; i < 5; i++) {
        let selected = document.getElementById(i + 1);
        selected.style.background = "hsl(213, 19%, 15%)";
		selected.style.color = "hsl(217, 12%, 63%)";
    }
}

for (let i = 0; i < 5; i++) {
    let button = document.getElementById(i + 1);
    button.addEventListener("click", function() {
        removeStyles();
        selectedStyles(button);
        RatingVal = i+1;
    });
}

SubmitBtn.addEventListener("click", function () {
    if (RatingVal) {
		TopContainer.style.display = "none";
		BottomContainer.style.display = "grid";
		selectedRat.textContent = ` ${RatingVal} `;
	}
});

RateAgain.addEventListener("click", function () {
    TopContainer.style.display = "grid";
    BottomContainer.style.display = "none";
	removeStyles();
	RatingVal = null;
});

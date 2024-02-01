const cmpScr = document.querySelector("#cmpScr");
const urScr = document.querySelector("#urScr");
const rock = document.querySelector("#rock");
const imgsRock = document.querySelector("#imgsRock")
const scissor = document.querySelector("#scissor");
const paper = document.querySelector("#paper");
const secondMain = document.querySelector(".secondMain");
const rockWinId = document.querySelector("#rockWinId");
const exitIcon = document.querySelector("#exitIcon");
const gameRulesId = document.querySelector("#gameRulesId");
const rnBtn = document.querySelector("#rnBtn");

 rockWinId.style.display = "none";
rock.addEventListener("click", () => {
    secondMain.style.display = "none";
    rockWinId.style.display = "block";

});

exitIcon.addEventListener("click", () => {
    gameRulesId.style.display = "none";
});

rnBtn.addEventListener("click", () => {
    gameRulesId.style.display = "block";
});


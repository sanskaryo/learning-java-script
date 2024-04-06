let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const gencomp = () => {
    let options = ["rock", "paper", "scissors"];

    const rantopt = Math.floor(Math.random() *3);
    return options[rantopt];
}

const playGame = (choiceID) => {
    console.log("user choice = ", choiceID);
    



};

choices.forEach(choice => {
console.log(choice);

const choiceID = choice.getAttribute("id");

choice.addEventListener("click", () => {
console.log("choice was clicked");
playGame(choiceID);
});
});
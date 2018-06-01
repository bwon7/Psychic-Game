var computerChoices = ["b", "a", "c", "d", "e", "f", "g", "h", "i", "g", "k", "l", "n", "m", "o", "p", "q", "r", "s", "t", "y", "x", "z"];
function randomLetter(array) {
    return Math.floor(Math.random() * array.length);
}

//var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var computerChoice = computerChoices[randomLetter(computerChoices)];
var wins = 0;
var losses = 0;
var guessleft = 12;
var mychoice = [];
var finals = "<p>wins: " + wins + "</p>" +
    "<p>losses: " + losses + "</p>" +
    "<p>Guess Left: " + guessleft + "</p>" +
    "<p>Your Guess: " + mychoice + "</p>";
document.querySelector("#game").innerHTML = finals;
document.onkeyup = function (event) {
    var userGuess;

    regexp = /^[a-z]/;
    if (regexp.test(event.key)) {
        userGuess = event.key;
        if (userGuess == computerChoice) {
            wins++;
            mychoice.push(userGuess);

            computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            guessleft = 12;
        }
        else if (userGuess !== computerChoice) {
            if (guessleft === 1) {
                losses++;
                mychoice.push(userGuess);
                guessleft = 12;
                computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            }
            guessleft--;
            mychoice.push(userGuess);
        }

        var finals = "<p>wins: " + wins + "</p>" +
            "<p>losses: " + losses + "</p>" +
            "<p>Guess Left: " + guessleft + "</p>" +
            "<p>Your Guess: " + mychoice + "</p>";
        document.querySelector("#game").innerHTML = finals;

    }
    else {
        alert("type letter")
    }

    console.log(computerChoice)
    console.log(userGuess)


}


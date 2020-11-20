//variables to select .classes in a shorter way later on

let choiceButtons = document.querySelectorAll('.choice');
let playButton = document.querySelector('.play');
let tryagain = document.querySelector('.tryagain');


//array for three possible choices/outcome
let choices = ['rock', 'paper', 'scissors'];


//empty strings for clarity, also possible to just write: let computerPick, let yourPick

let yourPick = "";
let computerPick = "";

//Minimumscore for player and computer
let pMin = "1";
let cMin = "1";

let computerScore = "";
let playerScore = "";


let announcement = "";
//empty string for announcement (will fill in empty HTML tag with result), see line 40 to 76

//store value of playerChoice
choiceButtons.forEach(choice => {
    //forEach takes every member of choiceButtons individually, and defines each individual member as choice
    choice.addEventListener('click', function () {
        //yourPick will be defined as: the clicked(and previously defined) choice = button, its value (given in html), so rock paper or scissors
        yourPick = choice.value;
        document.querySelector('.yP').innerHTML = "You picked: " + yourPick;
        document.querySelector('.pick').classList.remove('hide');
        console.log("you picked " + yourPick);
    });

});


playButton.addEventListener('click', function () {

    // define generated number as random for future computerpick, this wil generate number between 0 and 2
    let random = Math.floor(Math.random() * 3);
    //choices[random] will select the index of the array 'choices', so 0 1 or 2, random has been defined above.
    computerPick = choices[random];


    document.querySelector('.result').classList.remove('hide');
    document.querySelector('.cP').classList.remove('hide');


    document.querySelector('.cP').innerHTML = "The computer picked: " + computerPick;
    console.log("computer picked " + computerPick);

    // compare yourpick to different options, possible to write shorter?
    if (yourPick === "rock") {
        if (computerPick === "paper") {
            announcement = "You Lost!";

        }
        if (computerPick === "scissors") {
            announcement = "You Won!";
        }
        if (computerPick === "rock") {
            announcement = "It's a TIE!";
        }
    }

    if (yourPick === "paper") {
        if (computerPick === "scissors") {
            announcement = "You Lost!";
        }
        if (computerPick === "rock") {
            announcement = "You Won!";
        }
        if (computerPick === "paper") {
            announcement = "It's a TIE!";
        }
    }

    if (yourPick === "scissors") {
        if (computerPick === "rock") {
            announcement = "You Lost!";
        }
        if (computerPick === "paper") {
            announcement = "You Won!";
        }
        if (computerPick === "scissors") {
            announcement = "It's a TIE!";
        }
    }

    //If else if statements to check announcement value, to change Background of .result dependant on result
    console.log(announcement);
    document.querySelector('.result').innerHTML = announcement;
    if (announcement === "You Lost!") {
        document.querySelector('.result').classList.remove('bgtie', 'bgwin');
        document.querySelector('.result').classList.add('bgloss');
        computerScore = cMin++;

    } else if (announcement === "It's a TIE!") {
        document.querySelector('.result').classList.remove('bgloss', 'bgwin');
        document.querySelector('.result').classList.add('bgtie');

    } else {
        document.querySelector('.result').classList.remove('bgtie', 'bloss');
        document.querySelector('.result').classList.add('bgwin');
        playerScore = pMin++;

    }

    // only display score when you pressed play for the first time
    document.querySelector('.score').classList.remove('hide');
    document.querySelector('.yS').innerHTML = "Your score is: " + playerScore;
    document.querySelector('.cS').innerHTML = "The computers score is: " + computerScore;


    //if else if statement to make play again button based on score differences
    if (playerScore <= computerScore - 2) {
        tryagain.classList.remove('hide');
        tryagain.innerHTML = "Tired of losing? <br> Play again!"
    } else if (computerScore <= playerScore - 2) {
        tryagain.classList.remove('hide');
        tryagain.innerHTML = "Give him a chance will ya! <br> Play again!"

    } else if (computerScore > 5 || playerScore > 5) {
        tryagain.classList.remove('hide');
        tryagain.innerHTML = "Want a reset? <br> Play again!"
    } else {};
    tryagain.addEventListener('click', function () {
        location.reload();

    })

});
let choiceButtons = document.querySelectorAll('.choice');
// querySelectorAll = selecteren van alle elementen met gegeven class/ID
let playButton = document.querySelector('.play');
//querySelector = selecteren van specifieke class/id


let choices = ['rock', 'paper', 'scissors'];
//array for three different outcomes

let yourPick = "";
let computerPick = "";
//empty strings for clarity, also possible to just write: let computerPick, let yourPick
let computerScore = "";
let playerScore = "";

let announcement = "";
//empty string for announcement (will fill in empty HTML tag with result), see line 40 to 76

//playerChoice
choiceButtons.forEach(choice => {
    //forEach takes every member of choiceButtons individually, and defines each individual member as choice
    choice.addEventListener('click', function () {
        yourPick = choice.value;
        //yourPick will be defined as: the clicked(and previously defined) choice = button, its value (given in html), so rock paper or scissors
        document.querySelector('.yP').innerHTML = "You picked: " + yourPick;
        document.querySelector('.pick').classList.remove('hide');
        console.log("you picked " + yourPick);
    })

});

//computerChoice & comparison
playButton.addEventListener('click', function () {
    let random = Math.floor(Math.random() * 3);
    // define generated number as random for future computerpick, this wil generate number between 0 and 2
    computerPick = choices[random];
    //choices[random] will select the index of the array 'choices', so 0 1 or 2, random has been defined above.
    document.querySelector('.result').classList.remove('hide');
    document.querySelector('.cP').classList.remove('hide');


    //show scores: still causing issues for results
    /*  
    document.querySelector('.score').classList.remove('hide');
    document.querySelector('.yS').innerHTML = "Your score is " + yourScore;
    document.querySelector('.cS').innterHTML = "Computer score is " + computerScore;
    */
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

    //Use if else if statements to check what value announcement has: change class -> so background in css with every different answer
    console.log(announcement);
    document.querySelector('.result').innerHTML = announcement;
    if (announcement === "You Lost!") {
        document.querySelector('.result').classList.remove('bgtie', 'bgwin')
        document.querySelector('.result').classList.add('bgloss');
        /* add 1 to var computerScore, not working yet
         computerScore ++; 
         */
    } else if (announcement === "It's a TIE!") {
        document.querySelector('.result').classList.remove('bgloss', 'bgwin')
        document.querySelector('.result').classList.add('bgtie');

    } else {
        document.querySelector('.result').classList.remove('bgtie', 'bloss')
        document.querySelector('.result').classList.add('bgwin');
        /* add 1 to var computerScore, not working yet
        playerScore ++;
        */

    }
});

// three basic variables to select every individual button.
//identify document.querySelector('.rock) with variable so we don't have to type out this code every time we want to call the selected button.

let rockButton = document.querySelector('.rock'); 
let paperButton = document.querySelector('.paper');
let scissorsButton = document.querySelector('.scissors');

let choices = ['rock', 'paper', 'scissors']; // array for choices variables


let yourPick = ""; // empty string to fill in later with players choice (rock/paper/scissors)
//can also be written without string (let yourPick) but is for clarity
let computerPick ="";
//empty string for computerpick, will be filled in by index of choices array. -> index will be randomly generated.



//click function for every button
rockButton.addEventListener('click', function (){
    let random = Math.floor(Math.random () * 3);

    yourPick ="rock";
    computerPick = choices[random];

    console.log("Your pick is " + yourPick);
    console.log("The computer picked " + computerPick);
})

paperButton.addEventListener('click', function (){
    let random = Math.floor(Math.random () * 3);

    yourPick ="paper";
    computerPick = choices[random];

    console.log("Your pick is " + yourPick);
    console.log("The computer picked " + computerPick);
})

scissorsButton.addEventListener('click', function (){
    let random = Math.floor(Math.random () * 3);

    yourPick ="scissors";
    computerPick = choices[random];

    console.log("Your pick is " + yourPick);
    console.log("The computer picked " + computerPick);
})


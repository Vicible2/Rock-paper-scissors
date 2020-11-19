
// three basic variables to select every individual button.
//identify document.querySelector('.rock) with variable so we don't have to type out this code every time we want to call the selected button.

let rockButton = document.querySelector('.rock'); 
let paperButton = document.querySelector('.paper');
let scissorsButton = document.querySelector('.scissors');

let yourPick = ""; // empty string to fill in later with players choice (rock/paper/scissors)
//can also be written without string (let yourPick) but is for clarity



//click function for every button
rockButton.addEventListener('click', function (){
    yourPick ="rock";
    console.log(yourPick);
})

paperButton.addEventListener('click', function (){
    yourPick ="paper";
    console.log(yourPick);
})

scissorsButton.addEventListener('click', function (){
    yourPick ="scissors";
    console.log(yourPick);
})


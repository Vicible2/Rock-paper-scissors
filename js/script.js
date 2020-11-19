let choiceButtons = document.querySelectorAll('.choice'); 
// querySelectorAll = selecteren van alle elementen met gegeven class/ID
let playButton = document.querySelector('.play');
//querySelector = selecteren van specifieke class/id


let choices = ['rock', 'paper', 'scissors'];
//array for three different outcomes

let yourPick = "";
let computerPick = "";
//empty strings for clarity, also possible to just write: let computerPick, let yourPick

choiceButtons.forEach((choice, function () { 
    //forEach takes every member of choiceButtons individually, and defines each individual member as choice
    choice.addEventListener('click', function () {
        yourPick = choice.value;
        //yourPick will be defined as: the clicked(and previously defined) choice = button, its value (given in html), so rock paper or scissors
    })

}));

playButton.addEventListener('click', function () {
    let random = Math.floor(Math.random () * 3);
    // define generated number as random for future computerpick, this wil generate number between 0 and 2
    computerPick = choices[random];
    //choices[random] will select the index of the array 'choices', so 0 1 or 2, random has been defined above.

    
})
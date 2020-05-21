
// HOmework - 4
const credits = 23580;
const pricePerDroid = 3000;
let userInput = prompt ('How many Droids do you want to buy?');
const totalPrice = userInput * pricePerDroid;

 if (userInput === null){
    console.log ('Canceled by user');
    } else if (userInput >= 1 && credits >= totalPrice){
    console.log (`You have bought ${userInput} droid(s), ${credits-totalPrice} credits remain on your card.`);
    } else if (userInput >= 1 && credits <= totalPrice){
    console.log ('Not enough money on the card');
    } else{
        console.log ('Wrong input')
    }
// Homework -5


const userInput = prompt ('Please input country for delivery');
const country = userInput.toLowerCase();
let cost;


switch (country){
    case 'china':  
        cost = 100;
        break;

    case 'chile':
        cost = 250;
        break;
    case 'australia':    
        cost = 170;
        break;

    case 'india':
        cost = 80;
        break;

    case 'jamaica':
        cost = 120;
        break;

    default:
        alert('There is any delivery to your country');
}   

console.log(`Доставка в ${country} будет стоить ${cost} кредитов`)

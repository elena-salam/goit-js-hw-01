// Homework -6

// let input;
let total = 0;

do {
    let input = prompt ('Input number');

    if(input === null){
        break;
    }

    input = Number(input);
    total += input;
} while (true)

alert(`Total sum is ${total}`);
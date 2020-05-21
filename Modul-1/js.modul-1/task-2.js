// HOmework - 2

const total = '100';
const ordered = '50';
if (ordered>total){
    message = 'На складе недостаточно товаров!';
}  else {
    message = 'Заказ оформлен, с вами свяжется менеджер';
}
console.log (message);



const total = '100';
const ordered = '50';
const message = ordered > total ? 'На складе недостаточно товаров' : 'Заказ оформлен, с вами свяжется менеджер';
console.log (message);
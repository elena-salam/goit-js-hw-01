// HOmework - 3
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const inputPass = prompt ('Please enter Password');

if(inputPass === null){
    message = 'Canceled by user';
    console.log (message);
} else if (inputPass === ADMIN_PASSWORD){
    message = 'Wellcome!';
    console.log (message);
} else {
    message = 'Access denied, invalid password!'
    console.log (message);
}
alert (message)
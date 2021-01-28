'use strict';
const updateElement = document.querySelector('.js-button');
const choosenNumber = document.querySelector('.js-action');
const numberTip = document.querySelector('.js-tip');
const numberTry = document.querySelector('.js-try');


const randomNumber = Math.random();
const randomNumberHundred = randomNumber * 100;
const randomNumberSimple = Math.ceil(randomNumberHundred);
console.log('El número aleatorio es:',
    randomNumberSimple);



function guessNumber() {

    let choosenNumberValue = choosenNumber.value;
    choosenNumberValue = parseInt(choosenNumberValue);

    if (choosenNumberValue < 1 || choosenNumberValue > 100) {
        numberTip.value = 'El número debe estar entre el 1 y el 100';
    } else if (choosenNumberValue > randomNumberSimple) {
        numberTip.value = 'Demasiado alto';
    } else if (choosenNumberValue < randomNumberSimple) {
        numberTip.value = 'Demasiado bajo';
    } else if (choosenNumberValue === randomNumberSimple) {
        numberTip.value = 'Has ganado campeona!!';
    } else { numberTip.value = 'Escribe el número y dale a prueba' }

    count += 1;

    numberTry.value = 'Número de intentos: ' +
        count;

}
updateElement.addEventListener('click', guessNumber);

//Contador
let count = 0;
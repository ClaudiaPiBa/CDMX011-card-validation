import validator from './validator.js';

/*console.log(validator);*/
const message = document.getElementById("message");

const button = document.getElementById("btn");
button.addEventListener("click", cardNumber);


function cardNumber() {

  var creditCardNumber = document.getElementById("inputNumber").value;

    var validCard = validator.isValid(creditCardNumber);
    var maskDigit = validator.maskify(creditCardNumber);

     if (validCard === true){
      message.innerHTML= "¡Método de pago guardado! <br> Tu tarjeta " + maskDigit + " es valida";
    }else{
       message.innerHTML="Tu tarjeta " + maskDigit + " es invalida :(" ;
     }

    }

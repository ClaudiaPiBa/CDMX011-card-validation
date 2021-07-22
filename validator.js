const validator = {
  isValid: function(creditCardNumber){
    let cardArray = creditCardNumber.split("").reverse();
    let duplicateNum = cardArray.map(function(number,index) {
     if (index%2===0) {
       return parseInt(number)}
       else var valueNum = (number * 2);
     if (valueNum>=10) {valueNum -=9}
     return valueNum;
    })

    const sum = (number,index) => number + index;
    let total = (duplicateNum.reduce(sum));

    if (total % 10 === 0) {
      return true
    } else {return false}

  },

     maskify: function(creditCardNumber) {
      return creditCardNumber.slice(0,-4).replace (/./g, '#') + creditCardNumber.slice(-4);

    }

};


export default validator;



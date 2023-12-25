function generateNumber() {
  // generate a random integer(hint : Math.random)
  var randomNumber=Math.floor(Math.random()*100)+1
  document.getElementById('number').textContent = 'Generated Number: ' + randomNumber;

  checkOddEven(randomNumber)
}

function checkOddEven(num) {
  // logic for even / odd

  var result;

  if (num % 2 === 0) {
      result = 'Even';
  } else {
      result = 'Odd';
  }

  // Update the text content of the div with id = odd-even
  document.getElementById('odd-even').textContent = 'Result: The number is ' + result;

  // Optionally, you can return the result if needed for further use
  return result;

}

window.onload = function () {
  // add event listeners to the button here
  var generateButton = document.getElementById('generate-number');
  generateButton.addEventListener('click', generateNumber);
};

// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}

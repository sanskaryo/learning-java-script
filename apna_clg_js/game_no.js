const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const gameNum = 25;

function guessNumber() {
  rl.question('Guess the number: ', (userNum) => {
    if (parseInt(userNum) === gameNum) {
      console.log('Yeah! Your number is correct.');
      rl.close();
    } else {
      console.log('Incorrect! Try again.');
      guessNumber();
    }
  });
}

guessNumber();

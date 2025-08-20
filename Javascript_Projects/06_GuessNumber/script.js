let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const startOver = document.querySelector('.resultParas');
const lowOrHi = document.querySelector('.lowOrHi');

const p = document.createElement('p')

let prevGuess = [] // will store users gueusses

let numGuess = 1;
let playGame = true;

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
 const guess = parseInt(userInput.value);
 console.log(guess)
 validateGuess(guess);

  })
}


function validateGuess(guess){ // jo no diya hai vo valid hai number hai ya ni
  if(isNaN(guess)){
    alert("ye number ni hai dost, firse daal")

  }
  else if(guess < 1 || guess > 100){
    alert("The Entered number is not in range")
  }
  else{
    prevGuess.push();
    if(numGuess > 10){
      displayGuess(guess);
      displayMessage(`Game over. Random Number was ${numGuess}`)
      endGame();
    }else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}


function checkGuess(guess){ // user ki guesses ko check karna ki kitni sahi hai or usse assist karna

if(guess === randomNumber){
  displayMessage("YOU WON")
  endGame()
}else if(guess < randomNumber){
displayMessage("Number is too low")
}
else if(guess > randomNumber){
  displayMessage("Number is too High")
}

}
function displayGuess(guess){
userInput.value = ''
guessSlot.innerHTML += `${guess},`
numGuess++;
remaining.innerHTML= `${11 - numGuess}`
}

function displayMessage(message){ // handeling the dom or Updating the UI with everyguess
lowOrHi.innerHTML = `<h2> ${message}</h2>`

}


function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML =  `<h2 id = "newGame"> Start new game </h2>`
  startOver.appendChild(p)
  playGame = false;

  newGame();
}

function newGame(){
  
  const newGamebtn = document.querySelector('#newGame')
  newGamebtn.addEventListener('click',function(){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = ''
    remaining.innerHTML =  `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
  })
}


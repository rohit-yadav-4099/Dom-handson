//question 10


var intialValue = 100;
var randomNO = random(100);
var highscore = null;

function PlayAgain() {
    intialValue=100;
    document.body.style.backgroundColor = "#0f2d46"
    document.querySelector('.chances').textContent = intialValue
    document.querySelector('.box').textContent = '?'
    document.getElementById('select-No').value = ''
    document.querySelector(".msg").textContent = 'Start Guessing...'
    randomNO = random(100);
}


function random(n) {
    return Math.floor(Math.random() * n) + 1
}

console.log(randomNO);

function check() {
    if (intialValue != 0) {
        let inputValue = document.getElementById('select-No').value
        if (inputValue > randomNO) {
            document.querySelector(".msg").innerHTML = 'Your Guess Is High 😃😃'
            intialValue--
            document.querySelector('.chances').textContent = intialValue
        }
        else if (inputValue < randomNO) {
            document.querySelector(".msg").innerHTML = 'Your Guess Is Low 😥😥'
            intialValue--
            document.querySelector('.chances').textContent = intialValue
        }
        else {
            document.querySelector(".msg").innerHTML = '🤩🤩 Hurrey You Won 🤩🤩'
            document.querySelector('.chances').textContent = --intialValue
            document.querySelector(".highscore1").innerHTML = intialValue;

            document.querySelector('.box').textContent = inputValue
            document.body.style.backgroundColor = "blue"
        }
    }
    else {
        document.querySelector(".msg").innerHTML = 'game over'
    }
}

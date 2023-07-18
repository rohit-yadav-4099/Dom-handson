
//question 4

function clickFunction() {
    document.getElementById("hello").innerHTML = "hello world";
}

//question 5

function replacetext() {
    document.getElementById("helloworld").innerHTML = "Welcome to Elevation academy";
}

//question 6
const h1Element = document.getElementsByTagName("h1");
h1Element[7].style.color = 'red';
h1Element[7].id = 'heading';
console.log(h1Element[7]);

//question 7
function changeFlexDirection() {
    const container = document.querySelector('.container');
    const currentFlexDirection = container.style.flexDirection;

    if (currentFlexDirection === 'row') {
      container.style.flexDirection = 'column';
    } else {
      container.style.flexDirection = 'row';
    }
  }

  //question 9
  function clock(){
    document.getElementById("demo").innerHTML = new Date().toLocaleTimeString();
}

setInterval(clock,1000);

// question 10 

var initialvalue = 100;
var highscore = null;
var randomNumber = random(100);

function random(n){
    return Math.floor(Math.random()*n)+1;
}
console.log(randomNumber);

function reset(){
    initialvalue=100;
    document.querySelector("#chances100").textContent=initialvalue;
    document.body.style.backgroundColor="#222222";
    document.getElementById("input").style.backgroundColor="#222222";
    document.querySelector("#textchange").innerHTML="Start guessing...";
    document.getElementById("ques").textContent="?";
    document.getElementById("input").value="";
    document.querySelector("#button").style.visibility = "visible";
    randomNumber = random(100);
    console.log(randomNumber);   

}

function check(){
    let inputnumber = document.getElementById("input").value;

    if(initialvalue !== 0){
    if(inputnumber > randomNumber){
        document.querySelector("#textchange").innerHTML="Your Guess is High";
        document.querySelector("#chances100").textContent=--initialvalue;
    }

    else if(inputnumber < randomNumber){
        document.querySelector("#textchange").innerHTML="Your Guess is Low";
        document.querySelector("#chances100").textContent=--initialvalue;
    }

    else{
        document.body.style.backgroundColor="green";
        document.getElementById("input").style.backgroundColor="green";
        document.querySelector("#textchange").innerHTML="🤩🤩 Hurray You Won 🤩🤩";
        document.querySelector("#chances100").textContent=--initialvalue;

        if(initialvalue > highscore){
            document.querySelector("#highscore1").textContent=initialvalue;
            highscore = initialvalue;
        }
        
        document.querySelector("#highscore1").textContent=highscore;
        document.querySelector("#button").style.visibility = "hidden";
        document.getElementById("ques").textContent=randomNumber;
    
    }
}

else{
    document.querySelector("#textchange").textContent= "Game Over 🥲🥲"
}

}


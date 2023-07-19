
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

}




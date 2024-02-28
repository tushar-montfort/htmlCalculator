let operandCheck = 0; // Check for more than one operand
let clickCount = 0; //Check for more than one click
var operandCallSign;

//Non Calc Buttons
var state = null;
display = document.getElementById("displayText");
cursor = document.getElementById("cursor");

// ON Button
buttonOn = document.getElementById("buttonOn");
buttonOn.addEventListener("click", bootUp);

function bootUp() {
  if (clickCount == 0) {
    state = "ON";
    clickCount++;
    display.style.opacity = 1;
    display.style.textAlign = "right";
    let welText = "WELCOME! EVALUATES ONLY TWO VALUES AT A TIME ";
    let timer = setInterval(welcomeGreet, 150);
    i = 0;
    function welcomeGreet() {
      if (i < welText.length) {
        //booting
        display.innerHTML = welText.slice(0, i + 1);
        i++;
      } else {
        //state is On
        clearInterval(timer);
        display.innerHTML = "";
        cursor.innerHTML = "|";
        cursor.style.animation = "showCursor 500ms infinite";
      }
    }
  } else {
    //state is On, repeatedly pressing On
    cursor.innerHTML = "|";
    cursor.style.animation = "showCursor 500ms infinite";
  }
}

//OFF BUTTON
buttonOff = document.getElementById("buttonOff");
buttonOff.addEventListener("click", shutDown);

function shutDown() {
  state = "OFF";
  clickCount = 0;
  cursor.style.animationPlayState = "paused";
  cursor.innerHTML = "";
  display.innerHTML = "";
}

//CLEAR BUTTTON
buttonClear = document.getElementById("buttonC");
buttonClear.addEventListener("click", clear);

function clear() {
  if (state == "ON") {
    operandCheck = 0;
    cursor.innerHTML = "|";
    cursor.style.animation = "showCursor 500ms infinite";
    display.innerHTML = "";
  } else {
    display.innerHTML = "";
  }
}

//BACKSPACE BUTTON
buttonBs = document.getElementById("buttonBs");
buttonBs.addEventListener("click", bspace);
function bspace() {
  var last = display.innerHTML[-1];
  if (state == "ON") {
    if (last == "+" || last == "-" || last == "*" || last == "/") {
      operandCheck == 0;
    }
    display.innerHTML = display.innerHTML.slice(0, -1);
  }
}

//NUMERIC BUTTONS
button1 = document.getElementById("button1");
button1.addEventListener("click", one);
function one() {
  if (state == "ON") {
    display.innerHTML = display.innerHTML + "1";
  }
}

button2 = document.getElementById("button2");
button2.addEventListener("click", two);
function two() {
  if (state == "ON") {
    display.innerHTML = display.innerHTML + "2";
  }
}

button3 = document.getElementById("button3");
button3.addEventListener("click", three);
function three() {
  if (state == "ON") {
    display.innerHTML = display.innerHTML + "3";
  }
}

button4 = document.getElementById("button4");
button4.addEventListener("click", four);
function four() {
  if (state == "ON") {
    display.innerHTML = display.innerHTML + "4";
  }
}

button5 = document.getElementById("button5");
button5.addEventListener("click", five);
function five() {
  if (state == "ON") {
    display.innerHTML = display.innerHTML + "5";
  }
}

button6 = document.getElementById("button6");
button6.addEventListener("click", six);
function six() {
  if (state == "ON") {
    display.innerHTML = display.innerHTML + "6";
  }
}

button7 = document.getElementById("button7");
button7.addEventListener("click", seven);
function seven() {
  if (state == "ON") {
    display.innerHTML = display.innerHTML + "7";
  }
}

button8 = document.getElementById("button8");
button8.addEventListener("click", eight);
function eight() {
  if (state == "ON") {
    display.innerHTML = display.innerHTML + "8";
  }
}

button9 = document.getElementById("button9");
button9.addEventListener("click", nine);
function nine() {
  if (state == "ON") {
    display.innerHTML = display.innerHTML + "9";
  }
}

button0 = document.getElementById("button0");
button0.addEventListener("click", zero);
function zero() {
  if (state == "ON") {
    display.innerHTML = display.innerHTML + "0";
  }
}

//Decimal Button
buttonDecimal = document.getElementById("Decimal");
buttonDecimal.addEventListener("click", decimal);
function decimal() {
  if (state == "ON") {
    display.innerHTML = display.innerHTML + ".";
  }
}

//Operands

//Dont put operand more than once
//Remember to put operandCheck to zero in equals

buttonDivide = document.getElementById("buttonDivide");
buttonDivide.addEventListener("click", divide);
function divide() {
  if (state == "ON" && operandCheck == 0) {
    operandCheck = 1;
    operandCallSign = this.id;
    display.innerHTML = display.innerHTML + "/";
  } else if (state == "ON" && operandCallSign == "buttonMinus") {
    display.innerHTML = display.innerHTML + "/";
  }
}

buttonAdd = document.getElementById("buttonAdd");
buttonAdd.addEventListener("click", add);
function add() {
  if (state == "ON" && operandCheck == 0) {
    operandCheck = 1;
    operandCallSign = this.id;
    display.innerHTML = display.innerHTML + "+";
  } else if (state == "ON" && operandCallSign == "buttonMinus") {
    display.innerHTML = display.innerHTML + "+";
  }
}

buttonMinus = document.getElementById("buttonMinus");
buttonMinus.addEventListener("click", minus);
function minus() {
  if (state == "ON" && operandCheck == 0) {
    operandCheck = 1;
    operandCallSign = this.id;
    display.innerHTML = display.innerHTML + "-";
  } else if (state == "ON" && operandCheck <= 1) {
    operandCheck++;
    display.innerHTML = display.innerHTML + "-";
  }
}

buttonMultiply = document.getElementById("buttonMultiply");
buttonMultiply.addEventListener("click", multiply);
function multiply() {
  if (state == "ON" && operandCheck == 0) {
    operandCheck = 1;
    operandCallSign = this.id;
    display.innerHTML = display.innerHTML + "*";
  } else if (state == "ON" && operandCallSign == "buttonMinus") {
    display.innerHTML = display.innerHTML + "*";
  }
}

//Equals

buttonEquals = document.getElementById("Equals");
buttonEquals.addEventListener("click", equals);
function equals() {
  if (state == "ON") {
    operandCheck = 0;
    const reg = /(?<=[0-9])[^0-9|\.]/;
    var operand = display.innerHTML.match(reg)[0];
    var [exp1, exp2] = display.innerHTML.split(reg);
    console.log("operand: ", operand, "Exp1 :", exp1, "Exp2 : ", exp2);
    exp1 = Number(exp1);
    exp2 = Number(exp2);

    switch (operand) {
      case "+":
        display.innerHTML = exp1 + exp2;
        break;
      case "-":
        display.innerHTML = exp1 - exp2;
        break;
      case "*":
        display.innerHTML = exp1 * exp2;
        break;
      case "/":
        display.innerHTML = exp1 / exp2;
        break;

      default:
        display.innerHTML = "ERROR";
        break;
    }
  }
}

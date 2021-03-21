//-----SHOW CALCULATOR FUNCTION
function prikazi() {
    var x = document.getElementById("ima");
    if (x.style.display === "block") {  //check is there calc on screen
        x.style.display = "none";  //if yes, display none
    } else {
        x.style.display = "block";  //if no, show calc
    }
}


//-----MATH FUNCTIONS
function update(value) {
    document.forma.screen.value += value;  //update input
}
//-----RESULT ON SCREEN
function rezultat(VALUE) {
    var r = eval(document.forma.screen.value)
    document.forma.screen.value = (r);  //show result
   /* if (r % 2 == 0) {
        document.forma.screen.value = (r);
    } else {
        var t = r.toFixed(2)
        document.forma.screen.value = (t);
    }*/
}

//---------CLEAR
function brisi() {
    document.forma.screen.value = " ";  //clear all
}
//---------SQUARE FUNCTION
function sq() {
    var x = document.forma.screen.value  //add input value to variable x
    document.forma.screen.value = Math.pow(x, 2); //math square function
}
//---------SQUARE ROOTS FUNCTION
function sqr2() {
    var x = document.forma.screen.value  //add input value to variable x
    var f = Math.sqrt(x)  //math square root function
    document.forma.screen.value = (f);  //show result
}
//---------CUBE ROOT FUNCTION
function sqr3() {
    var x = document.forma.screen.value  //add input value to variable x
    var f = Math.cbrt(x)  //math cube root function
    document.forma.screen.value = (f);  //show result
}
//------MATH FACTORIAL FUNCTION
function fac() {
    var x = document.forma.screen.value  //add input value to variable x
    var i, f;  //add variable i, f
    f = 1;  //add 1 to variable i
    for (i = 1; i <= x; i++) {  //loop to calculate all numbers from 1 to x
        f = f * i;
    }
    i--;
    document.forma.screen.value = (f);  //show result
}
//------MATH CUBE FUNCTION
function cub() {
    var x = document.forma.screen.value  //add input value to variable x
    var f;  //add variable f
    f = x * x * x; //multiple variable x three time and put result in variable f
    document.forma.screen.value = (f);  //show result
}
//-----CELSIUS TO FAHRENHEIT FUNCTION
function ctof() {
    var x = document.forma.screen.value  //add input value to variable x
    var f, i //add variable i, f
    f = x * 1.8 + 32  //converting C to F
    i = f.toFixed(1) //rounding the number to keep only one decimal
    document.forma.screen.value = (i);  //show result
}
//-----FAHRENHEIT TO CELSIUS FUNCTION
function ftoc() {
    var x = document.forma.screen.value  //add input value to variable x
    var f, i  //add variable i, f
    f = (x - 32) / 1.8  //converting F to C
    i = f.toFixed(1)  //rounding the number to keep only one decimal
    document.forma.screen.value = (i);  //show result
}
//-----PI
function onopp() {
    var x, i
    x = (Math.PI)
    i = x.toFixed(4)  //rounding the number to keep only four decimal
    document.forma.screen.value = (i);  //show result
}
//-----BACKSPACE
function myFunction() {
    myVar = setTimeout(backspace, 550);  //time
  }
function backspace() {
    var y = document.forma.screen.value;  //add screen value to var y
    if (y.length > 0) {  //if there is some value on var y
        y = y.substring(0, y.length - 1);  //remove one digit from var y until there is no value
        document.forma.screen.value = y;  //show result
    }
}
//-----PARENTHESES
var i = 0;
function brackets() {
    
    if (i == 0) {  //check is parentheses open
        document.forma.screen.value += '('; //open parenthese if there are no opend parenthese
        i = 1; //add value to i, to show that parenthese is open, but not close
    } else if (i == 1) {  //check is parenthese open
        document.forma.screen.value += ')';  //if yes close parenthese
        i = 0; //return value i to 0
    }
}

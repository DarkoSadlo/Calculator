<h1 align="center" style="color:blue;">Calculator</h1>

## General info
This project is simple calculator. Purpose of project is learning to code

## Demo	
  ![](calc.gif)
  
## Technologies
Project is created with:
* HTML5
* CSS
* JS
	
  
## Run
open index.html

## Code
### <h4>ON/OFF code</h4>
JS code for turn ON or OFF 
```js
function prikazi() {
    var x = document.getElementById("ima");
    if (x.style.display === "block") {  //check is there calc on screen
        x.style.display = "none";  //if yes, display none
    } else {
        x.style.display = "block";  //if no, show calc
    }
}
```
### <h4>Fahrenheit to Celsius</h4>
Code for convert Fahrenheit to Celsius
 ```js
  function ctof() {
    var x = document.forma.screen.value  //add input value to variable x
    var f, i //add variable i, f
    f = x * 1.8 + 32  //converting C to F
    i = f.toFixed(1) //rounding the number to keep only one decimal
    document.forma.screen.value = (i);  //show result
}
  ```
  ### <h4>HTML buttons code</h4>
  ```html
<input type="button" value=" °c " name="fc" onclick="ftoc()" class="buttonF">
<input type="button" value=" 0 " name="0" onclick="update(0)" class="buttonB">
<input type="button" value=" °f " name="cf" onclick="ctof()" class="buttonF">
<input type="button" value=" + " name="+" onclick="update('+')" class="buttonM">
<input type="button" value="( )" name="()" onclick="zagrade()" class="buttonM">
<input type="button" value=" = " name="=" onclick="rezultat('=')" class="buttonZ">
<input type="button" value=" ← " name="(bs)" onmousedown="myFunction()" class="buttonM">
```

## Status
Project is: _in progress_

## Inspiration
Special thanks to David Ruzicic.

Project is inspirated by my first calculator from 1979. "Digitron Buje DB-812" Made in Yugoslavia.


//------------BACKGROUND------------

var defaultColor = "rgb(0, 0, 0)";

window.addEventListener("load", startup, false);

function updateFirst(event) {
    var x = document.querySelector("form");
  
    if (x) {
      x.style.background = event.target.value;
    }
  }

  function startup() {
    var colorFormBg = document.querySelector("#colorF");
    colorFormBg.value = defaultColor;
    colorFormBg.addEventListener("input", updateFirst, false);
    colorFormBg.select();
  }

var iterations = 0;
var bounces = 0;

window.onload = function(e) {
  var ball = document.getElementById("ball");  
  var stage = document.getElementById("stage");

  prefixedEventListener(ball, "AnimationIteration", increment);
  stage.addEventListener("click", displayMsg, false);
  //stage.onclick = displayMsg;
}

function increment() {
  iterations++;
  if (iterations % 2 != 0) {
    bounces++;
  }
}
function displayMsg() {
  var ball = document.getElementById("ball");

  ball.classList.toggle("pause"); //pause or play
  if (ball.className == "pause") {
    //ball.classList.toggle("pause");
    alert("Bounced " + bounces + " times");
  } 
  
}

/* Prefix helper function for animation event names.
 * Previously found as a post by Nick Salloum (page no longer
 * available).
 * 
 * NOTE: I have modified it so ONLY the VALID event listener
 * will be used. Originally, an event listener was added for
 * every single vendor-prefixed event. Some of the logic is
 * based off of David Walsh's transitionend helper function.
 */
function prefixedEventListener(element, type, callback) {
  var pfx = ["", "webkit", "moz", "MS", "o"]; //moved the "" first so that the standard version is checked first
  var a = "Animation";
  for (var p = 0; p < pfx.length; p++) {
    if (!pfx[p]) {
      //animation CSS property
      a = a.toLowerCase();
      type = type.toLowerCase();
    }
    if (element.style[a] !== undefined) {
      element.addEventListener(pfx[p]+type, callback, false);
      return; //exit function on first valid event name
    }
  }
}

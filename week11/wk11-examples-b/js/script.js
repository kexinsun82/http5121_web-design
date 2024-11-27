/* This file is only used to demo the transitionend event. */

let square = document.getElementById("sq-one");
console.log(square);
square.addEventListener("transitionend", function (){
  console.log("transition done");
});
square.addEventListener("transitionstart", function (){
  console.log("just started");
});
square.addEventListener("transitioncancel", function(){
  console.log("ABORTED!!!");
});
square.addEventListener("transitionrun", function (){
  console.log("running");
})

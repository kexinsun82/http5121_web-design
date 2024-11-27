/* NOTHING IN HERE YET */
let ball = document.getElementById("ball");

ball.addEventListener("animationstart", function(){
  console.log("animation started");
});
ball.addEventListener("animationiteration", function(){
  console.log("LOOPED!");
});
ball.addEventListener("animationend", () => {
  console.log("animation ended");
})
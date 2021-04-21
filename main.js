"use strict";
// console.log(document.querySelector(".message"));
// console.log(
//   (document.querySelector(".message").innerHTML = "i got the concept")
// );
// console.log((document.querySelector(".secretNumber").innerHTML = 13));
// console.log((document.querySelector(".score").innerHTML = 10));
// console.log((document.querySelector(".score").innerHTML = secret));
// console.log((document.querySelector(".guess").value = 23));
// console.log(document.querySelector(".guess").value);

//Handling click events
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  //when there is no input
  if (!guess) {
    document.querySelector(".message").innerHTML = "please enter a number";
  }
  //when you guess the correct number
  else if (guess === secretNumber) {
    document.querySelector(".message").innerHTML = "You guessed right";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".highscore").innerHTML = score;
    if(score > highscore){
      highscore = score;
      document.querySelector(".highscore").innerHTML = highscore;
    }
    alert("you the man!!!!");
  }
  //when you guess a higher number
  else if (guess > secretNumber) {
    document.querySelector(".message").innerHTML = "too high";
    score--;
    document.querySelector(".score").innerHTML = score;
    document.querySelector("body").style.backgroundColor = "red";
  }
  //when you guess a lower number
  else if (guess < secretNumber) {
    document.querySelector(".message").innerHTML = "too low";
    score--;
    document.querySelector(".score").innerHTML = score;
    document.querySelector("body").style.backgroundColor = "violet";
  }
  //when the highscore reaches the default minimumm
  if (score <= 0) {
    document.querySelector(".message").innerHTML = "you loose";
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white";
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").innerHTML = "Start guessing...";
  document.querySelector(".score").innerHTML = score;
  document.querySelector(".number").innerHTML = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector("body").style.color = "black";
});

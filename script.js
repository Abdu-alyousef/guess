let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const backGroundColor = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("Not number!!");
   const guess = document.querySelector(".guess") = "" ;
  } else if (guess === secretNumber) {
    displayMessage("Correct number :)");
    document.querySelector(".number").textContent = secretNumber;
    backGroundColor("#60b347");
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high :/" : "Too low :/");
      preventDefault() 
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game :(");
      document.querySelector(".score").textContent = 0;
      backGroundColor("#ff3f3f");
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".highscore").textContent = highScore;
  backGroundColor("#222");
  document.querySelector(".number").style.width = "15rem";
});

/* else if (guess > secretNumber){
        if (score > 1){
        document.querySelector('.message').textContent = 'Too high :/';
        score--;
        document.querySelector('.score').textContent = score;
        }
        else{
           document.querySelector('.message').textContent = 'You lost the game :('; 
           document.querySelector('.score').textContent = 0; 
            document.querySelector('body').style.backgroundColor = '#ff3f3f';
        }
    }
    else if (guess < secretNumber){
        if (score > 1){
        document.querySelector('.message').textContent = 'Too low :/';
        score--;
        document.querySelector('.score').textContent = score;
        }
        else{
          document.querySelector('.message').textContent = 'You lost the game :(';  
            document.querySelector('.score').textContent = 0;  
             document.querySelector('body').style.backgroundColor = '#ff3f3f';
        }
    }*/

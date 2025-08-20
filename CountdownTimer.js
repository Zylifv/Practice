//A Javascript version of a countdown timer so i can see the differences in how different languages approach the same exercises.

let time = 5;
let countdown = time * 60;
let prompt = false;

let countdownTimer = setInterval(function(){
  if (countdown === 0) {
    clearInterval();
    if (!prompt) {
    console.log("Countdown finished!");
     prompt = true;
    return;
    }
  } else {
    countdown -= 1;
    let minutes = Math.floor(countdown / 60);
    let seconds = countdown % 60;
  
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    let x = `${minutes}: ${seconds}`;
    console.log(x);
    }
  }, 1000);

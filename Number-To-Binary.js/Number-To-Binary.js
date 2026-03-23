const input = document.getElementById("input");
const btn = document.getElementById("check");
const boxes = document.getElementsByClassName("bin");

function checkBin() {
  
  let numCheck = input.value;
  if (numCheck > 255) {
     alert("Please enter a number less than 255");
  } else if (numCheck <= 255 && numCheck >= 0) {
    boxes.textContent = "0";
    if (numCheck >= 128) {
      document.getElementById("128_box").textContent = "1";
      numCheck -= 128;
    } else {
      document.getElementById("128_box").textContent = "0";
    }
    if (numCheck >= 64) {
      document.getElementById("64_box").textContent = "1";
      numCheck -= 64;
    } else {
      document.getElementById("64_box").textContent = "0";
    }
    if (numCheck >= 32) {
      document.getElementById("32_box").textContent = "1";
      numCheck -= 32;
    } else {
      document.getElementById("32_box").textContent = "0";
    }
     if (numCheck >= 16) {
      document.getElementById("16_box").textContent = "1";
      numCheck -= 16;
    } else {
      document.getElementById("16_box").textContent = "0";
    }
    if (numCheck >= 8) {
      document.getElementById("8_box").textContent = "1";
      numCheck -= 8;
    } else {
      document.getElementById("8_box").textContent = "0";
    }
    if (numCheck >= 4) {
      document.getElementById("4_box").textContent = "1";
      numCheck -= 4;
    } else {
      document.getElementById("4_box").textContent = "0";
    }
    if (numCheck >= 2) {
      document.getElementById("2_box").textContent = "1";
      numCheck -= 2;
    } else {
      document.getElementById("2_box").textContent = "0";
    }
    if (numCheck >= 1) {
      document.getElementById("1_box").textContent = "1";
      numCheck -= 1;
    } else {
      document.getElementById("1_box").textContent = "0";
    }
  }
}

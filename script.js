"use strict";

const inputPassword = document.getElementById("inputPassword");
const bgImg = document.querySelector(".bgImg");
const hasCapital = (s) => !(s === s.toLowerCase());
const hasLower = (s) => !(s === s.toUpperCase());
const hasDigit = (s) => typeof +s === "number" && !isNaN(+s);

function blurEffectValue(blurEffect) {
  if (inputPassword.value.length == 0) return 12;
  let isHasCapital,
    isHasLower,
    isHasDigit = false;
  for (let i = 0; i < inputPassword.value.length; i++) {
    if (hasCapital(inputPassword.value[i]) && !isHasCapital) {
      blurEffect -= 3;
      isHasCapital = true;
    }
    if (hasLower(inputPassword.value[i]) && !isHasLower) {
      blurEffect -= 3;
      isHasLower = true;
    }
    if (hasDigit(inputPassword.value[i]) && !isHasDigit) {
      blurEffect -= 3;
      isHasDigit = true;
    }
  }
  if (inputPassword.value.length >= 8) {
    blurEffect -= 3;
    console.log("more then 8");
  }
  return blurEffect;
}

inputPassword.addEventListener("input", () => {
  console.log(inputPassword.value);
  bgImg.style.filter = `blur(${blurEffectValue(12)}px)`;
  console.log(blurEffectValue(12));
});

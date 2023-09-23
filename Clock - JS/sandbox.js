const secHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const setDate = () => {
  let tdDate = new Date();
  let hours = tdDate.getHours();
  let mins = tdDate.getMinutes();
  let seconds = tdDate.getSeconds();

  let currHour = (360 / 12) * hours + 90;
  let currMin = (360 / 60) * mins + 90;
  let currSec = (360 / 60) * seconds + 90;
  hourHand.style.transform = `rotate(${currHour}deg)`;
  minHand.style.transform = `rotate(${currMin}deg)`;
  secHand.style.transform = `rotate(${currSec}deg)`;
};

setInterval(setDate, 1000);

setDate();

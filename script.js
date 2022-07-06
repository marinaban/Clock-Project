setInterval(setClock, 1000);

const secondHand = document.querySelector("[data-second-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const hourHand = document.querySelector("[data-hour-hand]");

function setClock() {
  const currentTime = new Date();
  const secondsRatio = currentTime.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentTime.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentTime.getHours()) / 12;
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();

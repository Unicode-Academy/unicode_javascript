// const updateTime = () => {
//   const now = new Date();
//   const hours = now.getHours().toString().padStart(2, "0");
//   const minutes = now.getMinutes().toString().padStart(2, "0");
//   const seconds = now.getSeconds().toString().padStart(2, "0");
//   const timesString = `<h1>${hours}:${minutes}:${seconds}</h1>`;
//   document.querySelector("#clock").innerHTML = timesString;
// };
// setInterval(updateTime, 1000);

//Xây dựng countdown
const targetDate = "2025-07-30 09:30:40";

const countdown = () => {
  let diff = (Date.parse(targetDate) - Date.now()) / 1000;
  if (diff < 0) {
    clearInterval(idInterval);
    return;
  }

  const days = Math.floor(diff / 86400);
  diff -= days * 86400;

  const hours = Math.floor(diff / 3600);
  diff -= hours * 3600;

  const minutes = Math.floor(diff / 60);
  diff -= minutes * 60;

  const seconds = Math.floor(diff);

  document.querySelector(".days").innerText = days.toString().padStart(2, "0");
  document.querySelector(".hours").innerText = hours
    .toString()
    .padStart(2, "0");
  document.querySelector(".minutes").innerText = minutes
    .toString()
    .padStart(2, "0");
  document.querySelector(".seconds").innerText = seconds
    .toString()
    .padStart(2, "0");
};
let idInterval = setInterval(countdown, 1000);

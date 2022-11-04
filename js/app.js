let time = 5000;
let promoTime = time * 60;

let counting = document.getElementById("countdown");

function startCountdown() {
  let promoTimer = setInterval(() => {
    if (promoTime <= 0) {
      clearInterval(promoTimer);
      counting.innerHTML = "Promotion has ended"
    } else {
      promoTime--;
      const days = Math.floor(promoTime / 3600 / 24);
      const hours = Math.floor(promoTime / 3600) % 24;
      const minutes = Math.floor(promoTime / 60) % 60;
      const seconds = Math.floor(promoTime % 60) ;
      counting.innerHTML = `Time Left:<br>${days} Days | ${hours} Hrs | ${minutes} Min | ${seconds}s`
    }
  }, 1000)
}

startCountdown();
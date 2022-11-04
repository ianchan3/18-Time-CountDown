let time = 10;
let promotime = time * 60;

let counting = document.getElementById("countdown");




const days = Math.floor(totalSeconds / 3600 / 24);
const hours = Math.floor(totalSeconds / 3600) % 24;
const minutes = Math.floor(totalSeconds / 60) % 60;
const seconds = Math.floor(totalSeconds) % 60;
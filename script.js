let startTime, updatedTime, difference, timerInterval;
let running = false;
const display = document.getElementById('display');
const laps = document.getElementById('laps');

document.getElementById('start').onclick = function() {
  if (!running) {
    running = true;
    startTime = Date.now() - (difference || 0);
    timerInterval = setInterval(updateTime, 10);
  }
};

document.getElementById('pause').onclick = function() {
  running = false;
  clearInterval(timerInterval);
};

document.getElementById('reset').onclick = function() {
  running = false;
  clearInterval(timerInterval);
  difference = 0;
  display.textContent = "00:00:00.00";
  laps.innerHTML = "";
};

document.getElementById('lap').onclick = function() {
  if (running) {
    const li = document.createElement('li');
    li.textContent = display.textContent;
    laps.appendChild(li);
  }
};

function updateTime() {
  updatedTime = Date.now() - startTime;
  difference = updatedTime;

  let centiseconds = Math.floor((difference % 1000) / 10);
  let seconds = Math.floor((difference / 1000) % 60);
  let minutes = Math.floor((difference / (1000 * 60)) % 60);
  let hours = Math.floor((difference / (1000 * 60 * 60)));

  display.textContent =
    (hours < 10 ? "0" : "") + hours + ":" +
    (minutes < 10 ? "0" : "") + minutes + ":" +
    (seconds < 10 ? "0" : "") + seconds + "." +
    (centiseconds < 10 ? "0" : "") + centiseconds;
}

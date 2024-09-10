let startTime;
let updatedTime;
let difference;
let timerId;
let running = false;
let display = document.getElementById('display');
let startStopBtn = document.getElementById('startStopBtn');

function startStop() {
    if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        timerId = setInterval(updateDisplay, 1000);
        startStopBtn.textContent = 'Stop';
        running = true;
    } else {
        clearInterval(timerId);
        difference = new Date().getTime() - startTime;
        startStopBtn.textContent = 'Start';
        running = false;
    }
}

function reset() {
    clearInterval(timerId);
    startTime = 0;
    difference = 0;
    running = false;
    display.textContent = '00:00:00';
    startStopBtn.textContent = 'Start';
}

function updateDisplay() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor(difference / 3600000);
    let minutes = Math.floor((difference % 3600000) / 60000);
    let seconds = Math.floor((difference % 60000) / 1000);

    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(unit) {
    return (unit < 10) ? '0' + unit : unit;
}

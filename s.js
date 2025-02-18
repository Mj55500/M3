let workTime = 2 * 60; // 2 минуты работы
let breakTime = 1 * 60; // 1 минута отдыха
let isWorkPhase = true;
let timer;
let timeLeft = workTime;
let cycles = 0;
let isRunning = false;

const timerDisplay = document.getElementById("timer");
const cyclesDisplay = document.getElementById("cycles");

document.getElementById("start-btn").addEventListener("click", startTimer);
document.getElementById("pause-btn").addEventListener("click", pauseTimer);
document.getElementById("reset-btn").addEventListener("click", resetTimer);

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                isRunning = false;
                switchPhase();
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    isWorkPhase = true;
    timeLeft = workTime;
    cycles = 0;
    updateDisplay();
    cyclesDisplay.textContent = cycles;
}

function switchPhase() {
    isWorkPhase = !isWorkPhase;
    timeLeft = isWorkPhase ? workTime : breakTime;

    if (isWorkPhase) {
        cycles++;
        cyclesDisplay.textContent = cycles;
    }

    startTimer();
}

// Начальное отображение
updateDisplay();












let timer;
let timeRemaining = 0;

function startTimer() {
    let input = document.getElementById("timeInput").value;
    if (input) {
        timeRemaining = parseInt(input);
        timer = setInterval(function() {
            if (timeRemaining > 0) {
                timeRemaining--;
                document.getElementById("timerDisplay").innerText = timeRemaining;
            } else {
                clearInterval(timer);
            }
        }, 1000);
    }
}

function resetTimer() {
    clearInterval(timer);
    timeRemaining = 0;
    document.getElementById("timerDisplay").innerText = "00";
}
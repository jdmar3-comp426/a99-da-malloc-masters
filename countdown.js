const startingMins = 10;
let time = startingMins * 60;
var firstCountFlag = true;

function updateCountdown() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;
    if (seconds < 10 ) {
        seconds = '0' + seconds;
    }
    document.getElementById("countdown").innerHTML = `${minutes}:${seconds}`;
    time--;
}

setInterval(function() {
    
    updateCountdown();
    if (time == 0) {
        time = 10 * 60;
        simulateMatch();
        assignOpponent();
    }

    if (firstCountFlag) {
        assignOpponent();
        firstCountFlag = false;
    }

}, 1000);

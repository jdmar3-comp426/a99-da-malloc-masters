# Countdown functionality

The countdown functionality of UNCClicker is very simple. We only have 3 main variables.

1. `startingMins` which represents how many minutes between matches.
2. `time` which is the remaining time in seconds
3. `firstCountFlag` a flag to let us know if this is the first run through of updateCountdown()

## updateCountdown()

Update countdown is as follows:
<code>function updateCountdown() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;
    if (seconds < 10 ) {
        seconds = '0' + seconds;
    }
    document.getElementById("countdown").innerHTML = `${minutes}:${seconds}`;
    time--;
}</code>
It find how many minutes are left with <code>Math.floor(time/60)</code> and then calculates the remaining seconds and replaces the tag with and id of `countdown` with the updated time.

## setInterval(function)
Set interval updates the countdown every seconds, and if the time reaches 0 it will simulate the match. If our first count flag is still true it will generate a new team.




// stop watch

var hr = 0;
var min = 0;
var sec = 0;
var msec = 0;
var displayhr = 0;
var displaymin = 0;
var displaysec = 0;
var displaymsec = 0;
var interval;

function timer() {
    msec++
    if (msec >= 100) {
        sec++;
        msec = 0;
    } else if (sec >= 60) {
        min++;
        sec = 0;
    } else if (min >= 60) {
        hr++;
        min = 0;
    }

    if (hr < 10) {
        displayhr = "0" + hr.toString();
    } else {
        displayhr = hr;
    }
    if (min < 10) {
        displaymin = "0" + min.toString();
    } else {
        displaymin = min;
    }
    if (sec < 10) {
        displaysec = "0" + sec.toString();
    } else {
        displaysec = sec;
    }
    if (msec < 10) {
        displaymsec = "0" + msec.toString();
    } else {
        displaymsec = msec;
    }
    document.getElementById("display").innerHTML = displayhr + ":" + displaymin + ":" + displaysec + ":" + displaymsec;

}


var status = "stopped"
function startStop() {

    if (status === "stopped") {

        interval = window.setInterval(timer, 10);
        document.getElementById("startStop").innerHTML ="Stop";
        status = "started";
    }
    else {
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";

    }

}

function reset() {
    hr = 0;
    min = 0;
    sec = 0;
    msec = 0;
    clearInterval(interval);
    document.getElementById("display").innerHTML = "00:00:00:00";
    document.getElementById("startStop").innerHTML = "Start";

}
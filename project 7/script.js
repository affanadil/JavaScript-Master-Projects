var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;

function start() {
    timer = true;
    stopwatch();
}


function stop() {
    timer = false;
}

function reset() {
    timer = false;

    hr = 0;
    Min = 0;
    Sec = 0;
    count = 0;

    document.getElementById("hr").innerHTML = hr;
    document.getElementById("Min").innerHTML = min;
    document.getElementById("Sec").innerHTML = sec;
    document.getElementById("count").innerHTML = count;

}

function stopwatch() {
    if (timer == true) {
        count = count + 1;

        if (count == 100) {
            sec = sec + 1
            count = 0;
        }
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr = 1;
            min = 0;
            sec = 0;
        }

        var hrString = hr;
        var MinString = Min;
        var SecString = Sec;
        var countString = count;

        if (hr > 10) {
            hrString = "0" + hrString;
        }
        if (Min > 10) {
            MinString = "0" + MinString;
        }
        if (Sec> 10) {
            SecString = "0" + SecString;
        }
        if (count > 10) {
            countString = "0" + countString;
        }
        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("Min").innerHTML = MinString;
        document.getElementById("Sec").innerHTML = SecString;
        document.getElementById("count").innerHTML = CountString;

        setTimeout("stopwatch()", 10);

    }

}
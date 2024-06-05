let date = new Date();

let hour = 12;
let min = 59;
let sec = 55;
let half = 1;

console.log(typeof hour);
console.log(min);
console.log(sec);

if(hour > 12) {
    half = -half;
    hour = hour - 12;
}


function formatText(t) {
    if(t < 10) {
        return "0" + t;
    } else {
        return "" + t;
    }
}

function formatHalf(half) {
    if(half < 1) {
        return "PM";
    }
    return "AM";
}

function showClock() {
    if(sec >= 59) {
        sec = 0;
        if(min >= 59) {
            min = 0;
            if(hour >= 12) {
                hour = 1;
            } else if (hour >= 11) {
                hour++;
                half = -half;
            } else {
                hour++;
            }
        } else {
            min++;
        }
    } else {
        sec++;
    }
    console.log(formatText(hour), ":", formatText(min), ":", formatText(sec), " ", formatHalf(half));
}


showClock();

setInterval(showClock, 1000);
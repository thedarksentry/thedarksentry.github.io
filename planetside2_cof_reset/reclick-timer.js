var unclick_time;

function start() {
    unclick_time = new Date();
}

function end() {
    var reclick_time = new Date()
    if (unclick_time == undefined) {
        return null;
    } else {
        var reclick_diff = reclick_time - unclick_time
        document.getElementById("reclick-value").textContent = reclick_diff;
        console.log(reclick_diff);
    }
}

document.querySelector("#screenshot").addEventListener("mouseup", start, false);
document.querySelector("#screenshot").addEventListener("mousedown", end, false);

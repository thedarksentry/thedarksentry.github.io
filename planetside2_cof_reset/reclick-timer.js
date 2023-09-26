var start_time;

function start() {
    start_time = new Date();
}

function end() {
    if (start_time == undefined) {
        return null;
    } else {
        document.getElementById("reclick-value").textContent = new Date() - start_time;
    }
}

document.querySelector("#screenshot").addEventListener("mouseup", start, false);
document.querySelector("#screenshot").addEventListener("mousedown", end, false);

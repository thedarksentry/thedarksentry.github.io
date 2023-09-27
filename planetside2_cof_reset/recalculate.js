var rpm, bloom, bullets

function recalculate() {
    rpm = document.querySelector("#rpm").value;
    bloom = document.querySelector("#bloom").value;
    bullets = document.querySelector("#bullets").value;

    document.getElementById("start-reset-time").textContent = Math.round(60/rpm*1000);
    document.getElementById("full-reset-time").textContent = Math.round(((60/rpm)+(bloom*bullets/20))*1000);
}

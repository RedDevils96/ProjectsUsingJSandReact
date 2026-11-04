let counterVal = parseInt(document.getElementById("countValue").textContent);


function decrement() {
    let step = parseInt(document.getElementById("steps").value);
    counterVal = counterVal - step;
    document.getElementById("countValue").textContent = counterVal;
}

function reset() {
    let step = parseInt(document.getElementById("steps").value);
    counterVal = 0;
    document.getElementById("countValue").textContent = counterVal;
}

function increment() {
    let step = parseInt(document.getElementById("steps").value);
    counterVal = counterVal + step;
    document.getElementById("countValue").textContent = counterVal;
}
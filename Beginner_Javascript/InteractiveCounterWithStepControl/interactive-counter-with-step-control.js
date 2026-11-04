let counterVal = parseInt(document.getElementById("countValue").textContent);

function decrement(){
    counterVal = counterVal - 1;
    document.getElementById("countValue").textContent = counterVal;
}

function reset(){
    counterVal = 0;
    document.getElementById("countValue").textContent = counterVal;
}

function increment(){
    counterVal = counterVal + 1;
    document.getElementById("countValue").textContent = counterVal;
}
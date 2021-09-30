const principal = document.getElementById("principal").value;
const rate = document.getElementById("rate").value;
const years = document.getElementById("years").value;

let interest = principal * years * rate /100;

let year = new Date().getFullYear()+parseInt(years);

function updateRate() {
    let rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function compute() {
    p = document.getElementById("principal").value;
}

        
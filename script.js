function compute() {
    p = document.getElementById("principal").value;
}

const principal = document.getElementById("principal").value;

const rate = document.getElementById("rate").value;

let years = document.getElementById("years").value;

let interest = principal * years * rate /100;

let year = new Date().getFullYear()+parseInt(years);

function updateRate() {
    let rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}


document.getElementById("result").innerHTML = `If you deposit ${principal}, at an interest rate of ${rate}. You will receive an amount of ${interest} in the year ${year}.`;
        
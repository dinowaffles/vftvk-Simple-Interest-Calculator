function compute() {
    p = document.getElementById("principal").value;
    const principal = document.getElementById("principal").value;
    const rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let interest = principal * years * rate /100;
    let year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML = 
    `If you deposit <mark>${principal}</mark>,<br/> 
    at an interest rate of <mark>${rate}</mark>.<br/> 
    You will receive an amount of <mark>${interest}</mark><br/> 
    in the year <mark>${year}</mark>.`;
}

function updateRate() {
    let rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}


        
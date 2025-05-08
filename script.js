function showConverter() {
    document.getElementById("welcomeScreen").classList.remove("active");
    document.getElementById("converterScreen").classList.add("active");
}

function convertTemp() {
    const input = parseFloat(document.getElementById("inputTemp").value);
    const from = document.getElementById("fromUnit").value;
    const to = document.getElementById("toUnit").value;
    let result = input;

    if (from === to) result = input;
    else if (from === "C") result = to === "F" ? (input * 9/5 + 32) : (input + 273.15);
    else if (from === "F") result = to === "C" ? ((input - 32) * 5/9) : ((input - 32) * 5/9 + 273.15);
    else if (from === "K") result = to === "C" ? (input - 273.15) : ((input - 273.15) * 9/5 + 32);

    document.getElementById("result").innerText = `Result: ${result.toFixed(2)} ${to}`;
}

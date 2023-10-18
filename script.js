function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;

    if (fromUnit === toUnit) {
        document.getElementById("result").textContent = "Result: " + inputTemp + " " + toUnit;
    } else if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        const result = (inputTemp * 9/5) + 32;
        document.getElementById("result").textContent = "Result: " + result + " " + toUnit;
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
        const result = inputTemp + 273.15;
        document.getElementById("result").textContent = "Result: " + result + " " + toUnit;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        const result = (inputTemp - 32) * 5/9;
        document.getElementById("result").textContent = "Result: " + result + " " + toUnit;
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        const result = (inputTemp - 32) * 5/9 + 273.15;
        document.getElementById("result").textContent = "Result: " + result + " " + toUnit;
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
        const result = inputTemp - 273.15;
        document.getElementById("result").textContent = "Result: " + result + " " + toUnit;
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        const result = (inputTemp - 273.15) * 9/5 + 32;
        document.getElementById("result").textContent = "Result: " + result + " " + toUnit;
    }
}

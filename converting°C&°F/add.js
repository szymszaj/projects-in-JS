const converter = document.querySelector("#converter");
const result = document.querySelector(".result");
const convBtn = document.querySelector(".conv");
const resetBtn = document.querySelector(".reset");
const changeBtn = document.querySelector(".change");
const one = document.querySelector(".one");
const two = document.querySelector(".two");

let fahrenheit;
let celsius;

const swap = () => {
  if (one.textContent === "°C") {
    one.textContent = "°F";
    two.textContent = "°C";
    result.textContent = "";
  } else {
    one.textContent = "°C";
    two.textContent = "°F";
    result.textContent = "";
  }
};

const fahrToCel = () => {
  fahrenheit = parseFloat(converter.value);
  celsius = ((fahrenheit - 32) * 5) / 9;
  result.textContent = `${fahrenheit.toFixed(1)}°F is ${celsius.toFixed(1)}°C`;
  converter.value = "";
};

const celToFar = () => {
  celsius = parseFloat(converter.value);
  fahrenheit = (celsius * 9) / 5 + 32;
  result.textContent = `${celsius.toFixed(1)}°C is ${fahrenheit.toFixed(1)}°F`;
  converter.value = "";
};

const conversion = () => {
  if (converter.value !== "") {
    if (one.textContent === "°C") {
      fahrToCel();
    } else {
      celToFar();
    }
  } else {
    result.textContent = "You must enter a value";
  }
};

const reset = () => {
  converter.value = "";
  result.textContent = "";
};

changeBtn.addEventListener("click", swap);
convBtn.addEventListener("click", conversion);
resetBtn.addEventListener("click", reset);

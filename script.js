const convertBtn = document.getElementById("convert-btn");

let lengthEl = document.getElementById("length-result-card");
let volumeEl = document.getElementById("volume-result-card");
let massEl = document.getElementById("mass-result-card");

// FUNCTION TO GET INPUT
function getInput() {
  let inputValue = document.getElementById("input-el").value;
  return inputValue
}
// FUNCTION TO CONVERT LENGTH  (FEET - METER)
function convertLength() {
  let value = Number(getInput());
  let metersResult = value * 0.3048;
  let feetResult = value / 0.3048;
  lengthEl.textContent = `
  ${value} Feet = ${metersResult.toFixed(3)} Meters | 
  ${value} Meters = ${feetResult.toFixed(3)} Feet`;
}

// FUNCTION TO CONVERT VOLUME (LITERS-GALLONE)
function convertVolume() {
  let value = Number(getInput());
  let gallonsResult = value * 0.264172; // Liters → Gallons
  let litresResult = value / 0.264172; // Gallons → Liters

  volumeEl.textContent = `
  ${value} Litres = ${gallonsResult.toFixed(3)} Gallons | 
  ${value} Gallons = ${litresResult.toFixed(3)} Litres`;
}

// FUNCTION TO CONVERT MASS (KILOGRAMS - POUNDS)

function convertMass() {
  let value = Number(getInput());
  let kilogramsResult = value / 2.20462;
  let poundsResult = value * 2.20462;
  massEl.textContent = `
  ${value} Kilograms = ${poundsResult.toFixed(3)} Pounds | 
  ${value} Pounds = ${kilogramsResult.toFixed(3)} Kilograms`;
}

// Add Even Listener
convertBtn.addEventListener("click", function () {
  convertLength();
  convertVolume();
  convertMass();
});

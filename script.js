const convertBtn = document.getElementById("convert-btn");

let lengthEl = document.getElementById("length-result-card");
let volumeEl = document.getElementById("volume-result-card");
let massEl = document.getElementById("mass-result-card");


// FUNCTION TO GET INPUT
function getInput() {
  let inputValue = document.getElementById("input-el").value;
  return inputValue;
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
  let selectedValue = select.value; 
  hideAllCards();
  if(selectedValue === "volume"){
    document.getElementById("volume-result").style.display = "block";
    convertVolume();
  } else if(selectedValue === "length"){
    document.getElementById("length-result").style.display = "block";
    convertLength();
  } else if(selectedValue === "mass"){
    document.getElementById("mass-result").style.display = "block";
    convertMass();

  }
});

function hideAllCards(){
  document.getElementById("length-result").style.display = "none";
  document.getElementById("volume-result").style.display = "none";
  document.getElementById("mass-result").style.display = "none";

}



// Dark Mode
let btn = document.getElementById("theme-btn");

if(localStorage.getItem("theme") === "dark"){
  document.body.classList.add("dark-mode");
  btn.textContent = "Light Mode";
}

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  if(document.body.classList.contains("dark-mode")){
    btn.textContent = "Light Mode"; 
    localStorage.setItem("theme", "dark"); 
  } else {
    btn.textContent = "Dark Mode"; 
    localStorage.setItem("theme", "light")
  }
});


// DROP DOWN MENU
let select = document.createElement("select");
select.id = "select-unit-el";
select.name = "unit-select";


document.getElementById("unit-container").appendChild(select);
let units = ["Length", "Volume", "Mass"];
let defaultUnit = "Length";

units.forEach((unit) => {
  let option = document.createElement("option");
  option.value = unit.toLowerCase();
  option.text = unit;
  if (unit === defaultUnit) {
    option.selected = true;
  }
  select.appendChild(option);
});
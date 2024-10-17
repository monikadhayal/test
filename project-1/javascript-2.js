const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results, (innerHTML = `please give a valid height ${height}`);
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results, (innerHTML = `please give a valid height ${weight}`);
  } else {
   const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //    show the result
    results.innerHTML = `<span>${bmi} </span>`;
  }
});

// function calculateBMI() {
//   const weight = parseFloat(document.getElementById("weight").value);
//   const height = parseFloat(document.getElementById("height").value) / 100; // Convert height from cm to meters

//   if (!weight || !height || weight <= 0 || height <= 0) {
//     document.getElementById("bmi-value").innerText = "--";
//     document.getElementById("bmi-category").innerText =
//       "Please enter valid values.";
//     return;
//   }

//   const bmi = (weight / (height * height)).toFixed(2); // Calculate BMI
//   document.getElementById("bmi-value").innerText = bmi;

//   let category = "";

//   if (bmi < 18.5) {
//     category = "Underweight";
//   } else if (bmi >= 18.5 && bmi < 24.9) {
//     category = "Normal weight";
//   } else if (bmi >= 25 && bmi < 29.9) {
//     category = "Overweight";
//   } else {
//     category = "Obesity";
//   }

//   document.getElementById(
//     "bmi-category"
//   ).innerText = `You are in the ${category} category.`;
// }
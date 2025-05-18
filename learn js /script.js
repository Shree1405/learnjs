function calculatebmi() {
    // Prompt user for weight and height
    let weightInput = prompt("Enter your weight in kg:");
    let heightInput = prompt("Enter your height in cm:");

    // Convert inputs to float
    let weight = parseFloat(weightInput);
    let heightInCm = parseFloat(heightInput);

    // Convert height from cm to meters
    let height = heightInCm / 100;

    // Calculate BMI
    let bmi = weight / (height * height);

    // Display result with 2 decimal places
    document.getElementById("result").innerText = "Your BMI is: " + bmi.toFixed(2);
}
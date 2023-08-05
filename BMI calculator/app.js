function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    const bmi = weight / (height * height);

    if (isNaN(bmi) || bmi <= 0) {
      document.getElementById('result').innerHTML = 'Invalid input. Please enter valid weight and height.';
    } else {
      let interpretation = '';
      if (bmi < 18.5) {
        interpretation = 'Underweight';
      } else if (bmi >= 18.5 && bmi < 24.9) {
        interpretation = 'Normal weight';
      } else if (bmi >= 25 && bmi < 29.9) {
        interpretation = 'Overweight';
      } else {
        interpretation = 'Obesity';
      }

      document.getElementById('result').innerHTML = `Your BMI is: ${bmi.toFixed(2)}. Interpretation: ${interpretation}`;
    }
  }
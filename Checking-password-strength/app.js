let passwordInput = document.getElementById("password");
let passwordStrength = document.querySelectorAll("password-strength");
let text = document.getElementById("text");

passwordInput.addEventListener("input", function (event) {
  let password = event.target.value;
  let strength = Math.min(password.length, 12);
  let degree = strength * 30;
  let gradientColor =
    strength <= 4 ? "#ff2c1c" : strength <= 8 ? "#ff9800" : "#12ff12";

  passwordStrength.forEach((passwordStrength) => {
    passwordStrength.style.background = `conic-gradient(${gradientColor} ${degree}
      deg, #1115 ${degree}deg)`;
  });
});

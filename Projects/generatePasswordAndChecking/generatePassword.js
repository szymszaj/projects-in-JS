function generatePassword(length, customCharset) {
  let charset =
    customCharset ||
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

const newPassword = generatePassword(12); // Password length, e.g. 12 characters
console.log("Generated password:", newPassword);

// Example with custom character set
const customCharset = "abcdefghijklmnopqrstuvwxyz";
const newPasswordWithCustomCharset = generatePassword(8, customCharset); // Using custom character set
console.log(
  "Generated password with custom charset:",
  newPasswordWithCustomCharset
);
// node generatePassword.js

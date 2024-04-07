function generatePassword(length) {
  const charset =
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

// command to invoke 
// node generatePassword.js = Generated password: Z$xkJXy&gA@+

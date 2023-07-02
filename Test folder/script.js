// function generateRandomPassword(length) {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let password = '';
  
//     for (let i = 0; i < length; i++) {
//       const randomIndex = Math.floor(Math.random() * characters.length);
//       password += characters[randomIndex];
//     }
  
//     return password;
//   }
  
//   const passwordLength = 14;
//   const randomPassword = generateRandomPassword(passwordLength);
//   console.log(randomPassword);
function generateRandomPassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }

    return password;
  }

  function generatePassword() {
    const passwordLength = 12;
    const randomPassword = generateRandomPassword(passwordLength);
    document.getElementById('password').textContent = randomPassword;
  }
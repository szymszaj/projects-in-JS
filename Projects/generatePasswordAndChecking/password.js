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

function generateCombinations(characters, maxLength, numberOfPasswords) {
  const results = [];
  const stack = [];
  const maxIndex = characters.length - 1;

  for (let i = 0; i < maxLength; i++) {
    stack.push({ combination: "", index: 0, specialCount: 0, digitCount: 0 });
  }

  while (stack.length > 0 && results.length < numberOfPasswords) {
    const current = stack.pop();

    if (current.combination.length === maxLength) {
      results.push(current.combination);
    } else {
      for (let i = current.index; i <= maxIndex; i++) {
        const char = characters[i];
        const isSpecial = /[!@#$%^&*()_+[\]{}|;:,.<>?]/.test(char);
        const isDigit = /[0-9]/.test(char);

        if (isSpecial && current.specialCount >= 2) {
          continue;
        }

        if (isDigit && current.digitCount >= 5) {
          continue;
        }

        const newSpecialCount = isSpecial
          ? current.specialCount + 1
          : current.specialCount;
        const newDigitCount = isDigit
          ? current.digitCount + 1
          : current.digitCount;

        const newCombination = current.combination + char;
        stack.push({
          combination: newCombination,
          index: i,
          specialCount: newSpecialCount,
          digitCount: newDigitCount,
        });
      }
    }
  }

  return results;
}

function bruteForcePassword(targetPassword, maxLength, numberOfPasswords) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
  const combinations = generateCombinations(
    characters,
    maxLength,
    numberOfPasswords
  );

  for (let guess of combinations) {
    console.log(`Trying: ${guess}`);
    if (guess === targetPassword) {
      return `Password found: ${guess}`;
    }
  }
  return "Password not found within maxLength limit";
}

const targetPassword = "pa$$w0rd!";
const maxLength = 8;
const numberOfPasswords = 3000;
const generatedPassword = generatePassword(maxLength);
console.log(`Generated Password: ${generatedPassword}`);

function bruteForcePasswordWithEarlyExit(
  targetPassword,
  maxLength,
  numberOfPasswords
) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
  const combinations = generateCombinations(
    characters,
    maxLength,
    numberOfPasswords
  );

  for (let guess of combinations) {
    console.log(`Trying: ${guess}`);
    if (guess === targetPassword) {
      console.log(`Password found: ${guess}`);
      return;
    }
  }
  console.log("Password not found within maxLength limit");
}

const result = bruteForcePasswordWithEarlyExit(
  targetPassword,
  maxLength,
  numberOfPasswords
);
console.log(result);

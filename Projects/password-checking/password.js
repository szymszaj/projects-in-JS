function generateCombinations(characters, maxLength) {
  let results = [];
  for (let i = 1; i <= maxLength; i++) {
    results = results.concat(combine(characters, i));
  }
  return results;
}

function combine(characters, length) {
  let results = [];
  let current = Array(length).fill(0);

  while (true) {
    let combination = current.map((index) => characters[index]).join("");
    results.push(combination);

    let position = length - 1;
    while (position >= 0) {
      current[position]++;
      if (current[position] < characters.length) {
        break;
      }
      current[position] = 0;
      position--;
    }
    if (position < 0) {
      break;
    }
  }

  return results;
}

function bruteForcePassword(targetPassword, maxLength) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
  const combinations = generateCombinations(characters, maxLength);

  for (let guess of combinations) {
    console.log(`Trying: ${guess}`);
    if (guess === targetPassword) {
      return `Password found: ${guess}`;
    }
  }
  return "Password not found within maxLength limit";
}

const targetPassword = "pa$$w0rd!";
const maxLength = 10;
const result = bruteForcePassword(targetPassword, maxLength);
console.log(result);

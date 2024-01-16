let myObject = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
      street: "123 Main Street",
      city: "Cityville",
      postalCode: "12345"
  },
  interests: ["programming", "sports", "music"],
  // Constant property
  gender: "Male"
};

// Object invocation
console.log("First Name:", myObject.firstName);
console.log("Last Name:", myObject.lastName);
console.log("Age:", myObject.age);
console.log("Address:", myObject.address.street, ",", myObject.address.city, ",", myObject.address.postalCode);

console.log("Interests:");
// Iterating through the interests array
myObject.interests.forEach(function(interest) {
  console.log("- " + interest);
});

// Accessing the constant property
console.log("Gender:", myObject.gender);


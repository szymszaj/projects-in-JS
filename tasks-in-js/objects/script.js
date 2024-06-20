let myObject = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    street: "123 Main Street",
    city: "Cityville",
    postalCode: "12345",
  },
  interests: ["programming", "sports", "music"],
  gender: "Male",
};

console.log("First Name:", myObject.firstName);
console.log("Last Name:", myObject.lastName);
console.log("Age:", myObject.age);
console.log(
  "Address:",
  myObject.address.street,
  ",",
  myObject.address.city,
  ",",
  myObject.address.postalCode
);

console.log("Interests:");
// Iterating through the interests array
myObject.interests.forEach(function (interest) {
  console.log("- " + interest);
});

// Accessing the constant property
console.log("Gender:", myObject.gender);

// NEW OBJECT 2

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  contact: {
    email: "john.doe@example.com",
    phone: "555-1234",
  },
  address: {
    street: "123 Main Street",
    city: "Cityville",
    postalCode: "12345",
    country: "USA",
  },
  interests: ["programming", "sports", "music"],
  education: {
    degree: "Bachelor of Science in Computer Science",
    university: "Tech University",
  },
  employment: {
    position: "Software Developer",
    company: "Tech Solutions Inc.",
  },
  // Constant property
  gender: "Male",
};
// Object invocation
console.log("First Name:", person.firstName);
console.log("Last Name:", person.lastName);
console.log("Age:", person.age);
console.log(
  "Contact:",
  "Email:",
  person.contact.email,
  ", Phone:",
  person.contact.phone
);
console.log(
  "Address:",
  person.address.street,
  ",",
  person.address.city,
  ",",
  person.address.postalCode,
  ",",
  person.address.country
);
console.log("Interests:", person.interests.join(", "));
console.log(
  "Education:",
  person.education.degree,
  "at",
  person.education.university
);
console.log(
  "Employment:",
  person.employment.position,
  "at",
  person.employment.company
);
console.log("Gender:", person.gender);

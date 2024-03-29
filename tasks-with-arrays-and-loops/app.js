let vehicles = [
  {
    name: "Toyota Camry",
    type: "Sedan",
    color: "Blue",
    fuelType: "Gasoline",
  },
  {
    name: "Tesla Model S",
    type: "Electric Car",
    color: "Red",
    fuelType: "Electricity",
  },
  {
    name: "Jeep Wrangler",
    type: "SUV",
    color: "Green",
    fuelType: "Gasoline",
  },
  {
    name: "Ford Mustang",
    type: "Sports Car",
    color: "Yellow",
    fuelType: "Gasoline",
  },
  {
    name: "Honda CR-V",
    type: "Crossover",
    color: "Silver",
    fuelType: "Gasoline",
  },
  {
    name: "BMW i3",
    type: "Electric Car",
    color: "White",
    fuelType: "Electricity",
  },
  {
    name: "Mercedes-Benz GLE",
    type: "SUV",
    color: "Black",
    fuelType: "Diesel",
  },
  {
    name: "Chevrolet Volt",
    type: "Plug-in Hybrid",
    color: "Purple",
    fuelType: "Electricity/Gasoline",
  },
  {
    name: "Audi Q5",
    type: "SUV",
    color: "Gray",
    fuelType: "Gasoline",
  },
  {
    name: "Nissan Leaf",
    type: "Electric Car",
    color: "Green",
    fuelType: "Electricity",
  },
];

let planets = [
  {
    name: "Mercury",
    type: "Terrestrial planet",
    distanceFromSun: "57.91 million km",
  },
  {
    name: "Venus",
    type: "Terrestrial planet",
    distanceFromSun: "108.2 million km",
  },
  {
    name: "Earth",
    type: "Terrestrial planet",
    distanceFromSun: "149.6 million km",
  },
  {
    name: "Mars",
    type: "Terrestrial planet",
    distanceFromSun: "227.9 million km",
  },
  {
    name: "Jupiter",
    type: "Gas giant",
    distanceFromSun: "778.3 million km",
  },
  {
    name: "Saturn",
    type: "Gas giant",
    distanceFromSun: "1.42 billion km",
  },
  {
    name: "Uranus",
    type: "Ice giant",
    distanceFromSun: "2.87 billion km",
  },
  {
    name: "Neptune",
    type: "Ice giant",
    distanceFromSun: "4.5 billion km",
  },
  {
    name: "Pluto",
    type: "Dwarf planet",
    distanceFromSun: "5.91 billion km",
  },
];

for (let i = 0; i < vehicles.length + planets.length; i++) {
  if (i < vehicles.length) {
    let vehicle = vehicles[i];
    console.log(
      `Vehicle: ${vehicle.name}, Type: ${vehicle.type}, Color: ${vehicle.color}, Fuel Type: ${vehicle.fuelType}`
    );
  } else {
    let planet = planets[i - vehicles.length];
    console.log(
      `Planet: ${planet.name}, Type: ${planet.type}, Distance from Sun: ${planet.distanceFromSun}`
    );
  }
}

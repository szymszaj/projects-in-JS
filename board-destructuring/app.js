// Destrukturyzacja tablic
const array = ["React", "Angular", "Vue"];

const [firstElement, secondElementWithOurCustomName] = array;
console.log(firstElement); // React
console.log(secondElementWithOurCustomName);

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);
// Destrukturyzacja obiektów
const product = {
	title: "Fiszki z JavaScript",
	price: "149",
	shippingCost: "14",
	available: true,
};

const { title, shippingCost } = product;

console.log(title);
console.log(shippingCost);

// Destrukturyzacja obiektu przekazywanego do funkcji jako argument
const printProduct = ({ title, price }) => console.log(`${title}|${price}PLN`);
printProduct(product);


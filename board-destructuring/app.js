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
<<<<<<< HEAD

=======
// Destrukturyzacja obiektów
>>>>>>> 87845eeb35087d785843156e9a52eda8818b7164
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

<<<<<<< HEAD
const { price, ...rest } = product;
console.log(rest);
=======
>>>>>>> 87845eeb35087d785843156e9a52eda8818b7164

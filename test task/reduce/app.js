const products = [{ price: 1 }, { price: 2 }, { price: 3 }];
const startValue = 0;

const sum = products.reduce(
  (sum, currentProduct) => sum + currentProduct.price,
  startValue
);
console.log(sum);

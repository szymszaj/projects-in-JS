const products = [{ price: 1 }, { price: 2 }, { price: 3 }];
// const startValue = 0;

const sum = products.reduce(
  (sum, currentProduct) => sum + currentProduct.price,
  startValue
);
console.log(sum);

const elements = [1, 2, 3, 4, 5, 6];
const startValue = [[], []];
const groupedValues = elements
  .reduce((sum, element) => element < 3 ?
  [[...sum[0], element], sum[1]]
  :
  [sum[0], [...sum[1], element]],
  );
  console.log(groupedValues);

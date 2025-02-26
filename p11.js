const products = [
  { id: 1, name: "laptop", price: 42 },
  { id: 2, name: "mobile", price: 29 },
  { id: 3, name: "ps5", price: 33 },
];

let p={}
p[products[0].name]="HP"
console.log(p);

let res = products.reduce((acc, curr) => {
  console.log('acc',acc);
  console.log('curr',curr);
  acc[curr.id] = curr;
  return acc;
}, {});

console.log(res);

let arr = ["apple", "mango", "apple", "orange", "kiwi", "orange"];

let result = arr.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log(result);

let unique = arr.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(unique);

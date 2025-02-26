console.time("performance");

const a = Array(100000).fill("croco");

// for (let i = 0; i < a.length; i++) {
//   a[i] = a[i].toUpperCase();
// }

a.forEach((i, index) => (a[index] = i.toUpperCase()));

console.timeEnd("performance");

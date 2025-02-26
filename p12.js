// promiseAll vs promiseSettled

// function promiseDelay(delay) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (delay === 3000) {
//         rej("Rejected");
//       }
//       res(delay);
//     }, delay);
//   });
// }

// Promise.all([promiseDelay(1000), promiseDelay(3000), promiseDelay(5000)])
//   .then((val) => console.log(val))
//   .catch((err) => console.log(err));

// Promise.allSettled([promiseDelay(1000), promiseDelay(3000), promiseDelay(5000)])
//   .then((val) => console.log(val))
//   .catch((err) => console.log(err));

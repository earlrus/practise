const co = require("co");
const axios = require("axios");
const https = require("https");

//axios instance

const axiosInstance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

// const { Agent, setGlobalDispatcher } = require("undici");

// const agent = new Agent({
//   connect: {
//     rejectUnauthorized: false,
//   },
// });

// setGlobalDispatcher(agent);

// let obj = { name: "John", age: 25 };
// let newObj = { ...obj, age: 30 };

// console.log(obj.age);
// console.log(newObj.age);

// fetch("https://api.foursquare.com/v3/places/search?query=coffee store", {
//   method: "GET",
//   mode: "cors",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: "fsq3WP8zWj4FjsSc4dPiBuB1DKG5UbuIM/pS/TvJEiBzXFI=",
//     "Access-Control-Allow-Origin": "*",
//   },
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// fetch("https://freetestapi.com/api/v1/movies")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// async function test() {
//   fetch("https://randomuser.me/api/")
//     .then((res) => res.json())
//     .then((data) => console.log(data.results));
// }
// test();

// let data = { name: "Aman" };
// let json1 = JSON.stringify(data);
// console.log(json1);

// function test(data) {
//   console.log(data.per());
// }

// test({
//   per() {
//     let arr = [];
//     arr.push("aman");
//     arr.push("croco");
//     arr.push(null);
//     console.log(arr);
//   },
// });

// function* run() {
//   for (let i = 0; i < 50; i++) {
//     let data = {
//       id: i,
//       name: i % 2 === 0 ? "aman" : "croco",
//     };
//     yield data;
//   }
// }

// for (let data of run()) {
//   console.log(data);
// }

// async function delayfun(res) {
//   let result = await res.json();
//   return new Promise((res, rej) => {
//     setTimeout(() => res(result), 3000);
//   });
// }

// co(function* () {
//   let res = yield fetch("https://jsonplaceholder.typicode.com/todos");
//   if (res.status === 404) {
//     return console.error("404 error");
//   }

//   let data = yield delayfun(res);

//   console.log(data);
// });

// async function* gen() {
//   let res = yield fetch("https://jsonplaceholder.typicode.com/todos");

//   if (res.status === 404) {
//     return console.error("404 error");
//   }

//   let result = yield res.json();
//   console.log(result);
// }

// async function test() {
//   let res;
//   let startGen = gen();
//   let gg = (await startGen.next()).value; // console.log(gg);
//   setTimeout(async () => {
//     res = await startGen.next(gg);
//     startGen.next(res.value);
//   }, 2000);
// }
// test();

async function fetchApi() {
  const res = await axiosInstance.post(
    "https://mart-node-49hw.vercel.app/login",
    {
      email: "genny@test.com",
      password: "genny123!",
    }
  );

  console.log(res.data);
}

fetchApi();

// const EventEmitter = require("events");

// const emitEvent = new EventEmitter();

// emitEvent.on("hello", (name) => {
//   test2(name);
// });

// function test2(name) {
//   console.log(`Hey ${name}`);
// }

// function test() {
//   emitEvent.emit("hello", "aman");
//   console.log("My test");
// }

// test();

// let emails = [];

// async function test() {
//   emails.push("hello aman");
//   return emails;
// }

// async function Res() {
//   let res = await test();
//   console.log(res);
// }
// Res();

async function test1() {
  return new Promise((res, rej) => setTimeout(() => res("hello aman"), [2000]));
}

function test3() {
  return "Hi- Croco";
}

async function test2() {
  let obj = {};
  obj.msg1 = await test1();
  obj.msg2 = test3();
  return obj;
}

(async function () {
  let res = await test2();
  console.log(res);
})();

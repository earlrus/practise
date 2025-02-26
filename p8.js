//Recursion

function factorial(num) {
  if (num === 0) {
    console.log("if");
    return 1;
  } else {
    console.log("else");
    return num * factorial(num - 1);
  }
}

let Myres = factorial(12);
console.log(Myres);

let nestedObj = {
  a: {
    a1: "aman",
    a2: {
      a3: "croco",
    },
  },
  b: {
    b1: "Hi",
    b2: {
      b3: {
        b4: "Hello",
        b5: {
          b6: "Greet",
        },
      },
    },
  },
  c: {
    c1: "Boat",
    c2: "Jammu",
  },
};

const isObject = (x) => typeof x === "object" && x !== null;

let myArr = [];

function Recurse(data) {
  let res;
  if (!isObject(data)) {
    myArr = [...myArr, data];
    return myArr;
  }

  const pairs = Object.entries(data);

  let Res = pairs.map(([key, value]) => {
    console.log(key);
    res = Recurse(value);
    return res;
  });
  return Res;
}

let Res = Recurse(nestedObj);
console.log(Res);

// function Recurse(data) {
//   if (data !== undefined && typeof data === "string") {
//     return data;
//   }

//   let val = data.map((d) => {
//     let res = Recurse(d);
//     return res;
//   });
//   return val;
// }

// let result = Recurse(["aman", "jammu"]);
// console.log(result);

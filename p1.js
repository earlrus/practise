//some common javascript methods

// let msg = "How are you";
// let m = msg.split(" ", 2);
// console.log(m);

//splice(start,optional delete count,optional items to add);
//splice method alter the original array

// let arr1 = ["apple,mango", "orange", "Banana", "Kiwi", "Pineapple"];
// arr1.splice(2, 2, "lemon");
// console.log(arr1);

//slice(optional start parameter,optional end parameter);
//slice method does not alter the original array but return the shallow copy of the array

// let arr2 = ["apple,mango", "orange", "Banana", "Kiwi"];
// let arr3 = arr2.slice(2, 4);
// console.log(arr3);

// arr1 = ["apple", "mango", "orange"];
// arr2 = arr1.concat("Kiwi");
// console.log(arr2);

// arr3 = ["Grapes", "Pineapples"];

// let arr4 = arr1.concat(arr2, arr3);
// console.log(arr4);

// arr4.pop();
// console.log("pop", arr4);

// arr4.shift();
// console.log("shift", arr4);

// arr4.push("Aman");
// console.log("push", arr4);

// arr4.unshift("Croco");
// console.log("unshift", arr4);

// //Find the element and the position

// let str = "Hi aman how are you";
// let newArr = str.split(" ");

// function checkAndFindThevalue(val) {
//   let ele = newArr.find((value) => value === val);
//   let pos = newArr.findIndex((value) => value === val);
//   if (ele === "undefined" || pos === -1) {
//     return "element not found";
//   }
//   return `Element ${ele} is found at position ${pos + 1}`;
// }

// let res = checkAndFindThevalue("you");
// console.log(res);

// let num = [10, 20, 30];
// let sum = num.reduce((acc, n) => {
//   return acc + n;
// }, 10);

// console.log(sum);

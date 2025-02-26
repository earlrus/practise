//before sending the data if u want to completly remove the object property or change the value

// let person = {
//   name: "aman",
//   age: 20,
//   hobby: ["travelling", "observing"],
// };
// person.toJSON = function () {
//   delete this.hobby;
//   this.age = 18;
//   return this;
// };

// console.log(JSON.stringify(person));

//example of class
// class s3 {
//   constructor(person) {
//     this.person = person;
//   }
//   getDetails() {
//     console.log(this.person);
//   }
// }

// let a1 = new s3({ name: "aman", age: 18 });
// a1.getDetails();

// let test = (x) => (y) => console.log(`${x} ${y}`);

// let greet = test("Hello");
// greet("Aman");

// const props = ["name", "age"];
// const value = ["aman", 18];

// let res = props.map((p, i) => {
//   return {
//     [p]: value[i],
//   };
// });

// console.log(res);

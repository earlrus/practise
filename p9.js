//constructor function

function Person(firstname, lastname, age) {
  this.name = { first: firstname };
  this.name = { ...this.name, last: lastname };
  this.age = age;
}

const p1 = new Person("pyara", "croco", 20);

//defining and setting  the new property
Object.defineProperty(p1, "fullName", {
  get: function () {
    console.log(this);
    return this.name.first + " " + this.name.last;
  },
  set: function (value) {
    let [first, last] = value.split(" ");
    this.name.first = first;
    this.name.last = last;
  },
});

console.log(p1.fullName);
p1.fullName = "Ayan Rizvi";
console.log(p1.fullName);

//Array is also an object so we can define the property also;
Object.defineProperty(Array.prototype, "last", {
  get: function () {
    return this[this.length - 1];
  },
});

let arr = ["apple", "mango", "orange"];
let num = [0, 1, 2, 3, 4, 5];

console.log(arr.last);
console.log(num.last);

//bind and call

let person = {
  name: "nanny",
};

function hello(age = 20) {
  console.log("name", this.name);
}

// console.log(hello.call(person, 19));
hello.bind(person)();

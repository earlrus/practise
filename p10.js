//filter the multiple props in an arary

let persons = [
  { name: "aman", age: 20 },
  { name: "croco", age: 2 },
  { name: "ben", age: 20 },
  { name: "john", age: 30 },
];

function searchResult(myObj) {
  let res = persons.filter((p) => {
    if (myObj["name"] === undefined || myObj["name"] === "") {
      return false;
    }
    if (myObj["name"] === p["name"]) {
      return true;
    }
    return false;
  });
  console.log(res);
}

searchResult({ name: "" });

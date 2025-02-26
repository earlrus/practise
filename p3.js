let arr1 = ["3 eggs", "200 grams of flour", "1 l of milk"];

function ingredients(nbPerson, arr1) {
  let arr2 = [];
  let m = 0;
  for (let i = 0; i < arr1.length; i++) {
    let val = arr1[i].split(" ");
    let n = val.splice(0, 1) * nbPerson;
    val.unshift(n);
    let newVal = val.toString().replaceAll(",", " ");
    arr2.push(newVal);
  }
}

ingredients(5, arr1);

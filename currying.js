//Currying in javascript
//  normal function
const add = (a, b) => {
  return a + b;
}

console.log(add(1,2)); // 3

// using currying
const add1 = (a) => {
  return (b) => {
    return a + b;
  }
}

console.log(add1(1)(2)); 
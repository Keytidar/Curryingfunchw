const name = (a) => (b) => {
  if (!isNaN(Number(a)) && !isNaN(Number(b))) {
    a = Number(a);
    b = Number(b);
    return a * b;
  } else {
    return 'wrong input';
  }
};

console.log(name(5)(2));
console.log(name(5)); // returns incompelete function as it should

console.log(name('5')(2));
console.log(name('chicken')(2));

const multiplyBy5 = name(5);

console.log(multiplyBy5(10));

var foo = {
  a: 1,
  b: 2,
  c: {
    bar: 'foo'
  }
};

var { a, b, c } = foo;
var { c: { bar } } = foo;

console.log(a);
console.log(b);
console.log(c);
console.log(bar);

var {
  a: x,
  b: y,
  c: { bar: z }
} = foo;

console.log('--------------------------')

console.log(x);
console.log(y);
console.log(z);

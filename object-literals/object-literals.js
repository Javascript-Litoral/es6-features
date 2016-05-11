var bar = 'bar';

var foo = {
  bar,
  [ 'foo_' + bar ]: 'foo bar'
};

console.log('foo.bar: ' + foo.bar);
console.log('foo.foo_bar: ' + foo.foo_bar);

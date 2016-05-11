function rest(x, ...y) {
  return x * y.length;
}

console.log(rest(3, "hello", true));


function spread(x, y, z) {
  return x + y + z;
}

console.log(spread(...[10,20,30]));

/////////////////////////////////////////////////////////

console.log([1,2, ...[3, 4, 5]]);

console.log(`
multiline
strings
\\0/
`);

var name = 'JavaScript Litoral';

var now = () => new Date().getHours();

console.log(`
Buen${now() < 12 ? 'os dias' : 'as tardes' } ${name}!
Son las ${ now() } hs.
`);

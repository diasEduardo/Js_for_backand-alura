
const a = 3.14312313231323123;
const b = 3.14;

const c = a.toFixed();
const d = Math.round(100*(b/a))/100;


console.log(a);
console.log(d);
console.log(b === c );


console.log(typeof(a.toFixed(2)));

// template string or template literal


// concat 
/*
    + looks better for es5-
     templates for es6
*/

const sa = "a";
const sb = 'b';
const sc = 
`c
c`; // template with this format

console.log(sc);

console.log(` test ${sa}`);
console.log(` test ${sb}`);
console.log(` test \${sb}`);
console.log("test #{sb}");
console.log(sa.toUpperCase());
console.log(sa.toUpperCase().toLowerCase());
console.log(sa.toUpperCase().toLowerCase().length);

let init = null;
let notInit; // não pode ser const pois const precisa ser inicializado

console.log(notInit);
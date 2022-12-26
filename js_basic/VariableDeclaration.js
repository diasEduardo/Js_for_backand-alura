

let a;
let b = null;
let c = undefined;

console.log(typeof(a));
console.log(typeof(b)); // bixo null é object
console.log(typeof(c));
console.log(1 == true);


let d = '31';
let e = 19;
let f = d+e;
let g = e+d;
// int+string vira string por prioridade
console.log(f);
console.log(typeof(f));

console.log(g);
console.log(typeof(g));

let h = Number(e) +Number(d);

console.log(h);
console.log(typeof(h));

let i = isNaN(Number('dsa'))? undefined:0;

console.log(i);
console.log(typeof(i));



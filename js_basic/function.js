function getNanoSecTime() {
    var hrTime = process.hrtime();
    return hrTime[0] * 1000000000 + hrTime[1];
  }

let timeInit = getNanoSecTime();
Math.floor(5.2);
let timeFinish = getNanoSecTime();
console.log((timeFinish-timeInit))

timeInit = getNanoSecTime();
Math.trunc();
timeFinish = getNanoSecTime();
console.log((timeFinish-timeInit))


function test(arg,arg2){
    return arg2;
}

console.log(test('1'));

const arrowTest = name =>`Meu nome é ${name}`;
const arrowSum = (num1,num2) => {console.log(num1,num2); return num1+num2}
arrowSum(1,2);


const num = 15;

if (num < 0 ) {
    console.log('outro número');
} else if (num < 11) {
  console.log('número entre zero e dez');
} else if (num < 21) {
  console.log('número entre dez e vinte');
} else if (num < 31) {
  console.log('número entre vinte e trinta');
} else {
  console.log('outro número');
}


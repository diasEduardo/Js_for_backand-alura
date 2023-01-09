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

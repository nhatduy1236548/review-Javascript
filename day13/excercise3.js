//Check the speed difference among the following loops: while, for, for of, forEach
const million = 1000000;
const arr = Array(million);

console.time('⏳');

for (let i = arr.length; i > 0; i--) {} // 8.625 ms
console.timeEnd('⏳');
console.time('⏳');

for (let i = 0; i < arr.length; i++) {} // 5.073 ms

console.timeEnd('⏳');
console.time('⏳');

arr.forEach(v => v)                     // 12.592 ms

console.timeEnd('⏳');
console.time('⏳');

for (const v of arr) {}                 // 71.265 ms

console.timeEnd('⏳');
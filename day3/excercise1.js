// Declare variables and assign values
let firstName = "John";
let lastName = "Doe";
let country = "USA";
let city = "New York";
let age = 30;
let isMarried = true;
let year = 2023;

console.log(typeof firstName); // 'string'
console.log(typeof lastName);  // 'string'
console.log(typeof country);   // 'string'
console.log(typeof city);      // 'string'
console.log(typeof age);       // 'number'
console.log(typeof isMarried); // 'boolean'
console.log(typeof year);      // 'number'

// Check if type of '10' is equal to 10
console.log(typeof '10' === typeof 10); // false

// Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') === 10); // true

// Three JavaScript statements which provide truthy value
console.log(!!"non-empty string"); // true
console.log(!!1); // true
console.log(!!{}); // true

// Three JavaScript statements which provide falsy value
console.log(!!""); // false
console.log(!!0); // false
console.log(!!null); // false

// Comparison expression results
console.log(4 > 3);  // true
console.log(4 >= 3); // true
console.log(4 < 3);  // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != '4'); // false
console.log(4 == '4'); // true
console.log(4 === '4'); // false

// Length of python and jargon
console.log('python'.length !== 'jargon'.length); // false, they have the same length

// More comparison expression results
console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!(false)); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // false
console.log(!(4 === '4')); // true

// There is no 'on' in both dragon and python
console.log(!('dragon'.includes('on') && 'python'.includes('on'))); // false, 'on' exists in both

// Date object activities
let now = new Date();
console.log(now.getFullYear()); // the current year
console.log(now.getMonth() + 1); // the current month as a number
console.log(now.getDate()); // the current date
console.log(now.getDay()); // the current day as a number
console.log(now.getHours()); // the current hours
console.log(now.getMinutes()); // the current minutes
console.log(Math.floor(now.getTime() / 1000)); //

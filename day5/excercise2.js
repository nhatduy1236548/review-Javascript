//First remove all the punctuations and change the string to array and count the number of words in the array.
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const arr = text.split(" ");
console.log(arr.length);

//Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
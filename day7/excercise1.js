//Declare a function fullName and it print out your full name.
function fullName() {
    console.log('');
}
//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

//Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(a,b) {
    return a+b;
}

//An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle(length, width) {
    return length * width;
}

//A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(length, width) {
    return  2*(length + width);
}

//Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

function areaOfCircle(r) {
    return 3.14*r*r;
}

//Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle.

function circumOfCircle(r) {
    return 2*3.14*r;
}

//Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

function density( mass,volume) {
    return  mass/volume;
}

//Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

function density( mass,volume) {
    return  mass/volume;
}

//Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

function speed( length ,time) {
    return  length/time;
}

//Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

function findMax(arr) {
    return arr.reduce((min,item) => {return min > item? item:min},arr[0]);
}
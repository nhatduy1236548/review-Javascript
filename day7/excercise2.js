//Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

function showDateTime() {
    var d = new Date();

    return d.getDate()  + "/" + (d.getMonth()+1) + "/" + d.getFullYear() + " " +
d.getHours() + ":" + d.getMinutes();
}

//Declare a function name swapValues. This function swaps value of x to y.
function swap (x, y)
{
  return [y, x];
}

//Write a function which takes any number of arguments and return the sum of the arguments

function sum(...args){
    return args.reduce((a, b) => a + b);
}

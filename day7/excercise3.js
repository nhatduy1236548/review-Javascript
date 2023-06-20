//Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

var hello = function(name,ids) 
{
 var name = prompt('kcsy2'+ '\n'+
 'SMFYb' + '\n' +
 'bWmeq' + '\n' +
 'ZXOYh' + '\n' +
 '2Rgxf' + '\n'
 );
 return ids + name;
};

// Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
 function average(arr) {
    return arr.reduce((a, b) => a + b)/(arr.length);
 }

 //Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
 function average(arr) {
    return arr.reduce((a, b) => a + b)/(arr.length);
 }

 //Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
 function sevenRandomNumbers() {
    const arr = new Set();
    while(arr.lenth !== 7){
        const num = Math.floor(Math.random()*10);
        arr.add(num);
    }
    return arr;
 }

 //Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
 function average(arr, item) {
    const arr1 = new Map(arr);
    return arr1.delete(arr.findIndexOf(item));
}

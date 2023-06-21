//Write a loop that makes the following pattern using console.log()
for(let i=0; i<7;i++){
    let str = '';
    for(letj=0; j<7;j++) {
        str +='*';
    }
    console.log(str+'\n');
}
//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
function makeid() {
    const length = 6;
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

//Develop a small script which generate array of 5 random numbers and the numbers must be unique
function makeNumber() {
    const arr = new Set();
    while (arr.size !== 5) {
        arr.add(Math.floor(Math.random()));
    }
}
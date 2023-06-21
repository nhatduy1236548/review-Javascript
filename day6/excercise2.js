//Develop a small script which generate any number of characters random id
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
//Write a script which generates a random rgb color number.

function randomRGB(){
    const o= Math.round, r= Math.random, s=255;
    return 'rgb('+o(r()*s)+','+o(r()*s)+','+o(r()*s)+')'
}

//Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"].forEach((item) => console.log(item));
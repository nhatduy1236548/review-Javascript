//1.Write a function called tenMostFrequentWords which get the ten most frequent word from a string?
const txt = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
const text = txt.split('.').join("");
const pattern = /[ ,]+/;
const matches = txt.split(pattern);

const obj= matches
    .map((item) => ({[item]: matches.filter((v) => v === item).length}))
    .filter((value,index,arrs) => arrs.findIndex((element) => element.hasOwnProperty(Object.keys(value)[0])) === index);

const keys = obj
    .map((arr) => Object.values(arr)[0])
    .sort((a,b) => b-a)
    .slice(0,10)

const filteredLang = obj
    .filter((item) => keys.includes(Object.values(item)[0]))
    .slice(0,10);
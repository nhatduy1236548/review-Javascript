//Copy countries array(Avoid mutation)
const numbers = [1, 2, 3, 4, 5]

const copy = numbers.slice();

//Extract all the countries contain the word 'land' from the countries array and print it as array
countries.filter((country) => !country.includes('land'));

//Extract all the countries containing only four characters from the countries array and print it as array
countries.filter((country) => !(country.length === 4));

//Extract all the countries containing two or more words from the countries array and print it as array.
countries.filter((country) => !(country.length >= 2));

//Reverse the countries array and capitalize each country and stored it as an array
countries.reverse().map(country => country.toUpperCase());
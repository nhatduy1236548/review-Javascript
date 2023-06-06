const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

countries.forEach((country) => {
    console.log(country);
})

names.forEach((name) => {
    console.log(name)
})

numbers.forEach((number) => {
    console.log(number)
})

const arr = countries.map((country) => country.toUpperCase());

const arr1 = countries.map((country) => country.length());

const arr2 = numbers.map((number) => number*number);

const arr3 = names.map((name) => name.toUpperCase);

const  arr4 =  countries.filter((country) => country.includes('land'));

const  arr5 =  countries.filter((country) => country.length == 6);

const  arr6 =  countries.filter((country) => country.length >= 6);

const  arr7 =  countries.filter((country) => (country.split(''))[0] == 'E');

const  arr8 =  products.map((product) => {
    delete product['product'];
    return product;
});

const fun = (arr) => {
    return arr.map((item) => item.toString());
}

const num = numbers.reduce((sum,number)=> sum+number, 0);

const str = countries.reduce((str, country, index) => {
    if (index === countries.length -1) {
        return str + ', and '+ country + ' are north European countries';
    } else {
        return str + ', '+ country;
    }
},'Estonia');

// Some: chỉ cần một hoặc một vài element phù hợp với một khía cạnh, every: tất cả các element đều phải phù hợp với một khía cạnh.

const bool = names.some((name) => name >= 7);

const bool2 = countries.every((country) => country.includes('land'));

// find khác findIndex ở chỗ find hoàn trả lại value của element còn findIndex hoàn trả lại index của element thỏa mãn điều kiện.









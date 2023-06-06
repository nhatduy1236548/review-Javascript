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
//1
products
.filter((product) => (typeof product.price) === 'number')
.reduce((sum, product) => sum + Number(product.price) ,0)
//2
products
.reduce((sum, product) =>(typeof product.price) === 'number'? sum + Number(product.price):sum ,0)
//3
const categorizeCountries = (arr) => {
    return arr.filter((country) => country.includes('land') || country.includes('ia') || country.includes('stan'));
}
//4
const arr = (arr) => {
    return arr
        .map((country) => country.split('')[0])
        .map((item) => ({[item]: arr.filter((v) => v === item).length}))
        .filter((value,index,arrs) => arrs.findIndex((element) => element.hasOwnProperty(Object.keys(value)[0])) === index);
}
//6

const getLastTenCountries = (arr) => {
    return arr.map((country,index) => {if(index>= arr.length-10) { return country}})
}




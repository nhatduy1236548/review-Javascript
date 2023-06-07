//1.Display the countries array as a table
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
console.table(countries);

//2.Display the countries object as a table
const arrs = { English: 91 };
console.table(arrs);
   
//3.Use console.group() to group logs

console.group(countries,arrs);
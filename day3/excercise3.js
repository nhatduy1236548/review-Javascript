// Continuation of exercise 12
let years_left = 18 - age;
console.log("You are " + age + ". You will be allowed to drive after " + years_left + " years.");

// 13. Calculate the number of seconds a person can live.
let num_years = prompt("Enter number of years you live:");
let num_seconds = num_years * 365 * 24 * 60 * 60;
console.log("You lived " + num_seconds + " seconds.");

// 14. Create a human readable time format using the Date time object
let date_now = new Date();
let formatted_date1 = date_now.getFullYear() + '-' + (date_now.getMonth() + 1) + '-' + date_now.getDate() + ' ' + date_now.getHours() + ':' + date_now.getMinutes();
let formatted_date2 = date_now.getDate() + '-' + (date_now.getMonth() + 1) + '-' + date_now.getFullYear() + ' ' + date_now.getHours() + ':' + date_now.getMinutes();
let formatted_date3 = date_now.getDate() + '/' + (date_now.getMonth() + 1) + '/' + date_now.getFullYear() + ' ' + date_now.getHours() + ':' + date_now.getMinutes();
console.log(formatted_date1);
console.log(formatted_date2);
console.log(formatted_date3);

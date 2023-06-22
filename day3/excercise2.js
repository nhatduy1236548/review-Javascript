// 1. Calculate area of a triangle
let base = prompt("Enter base:");
let height = prompt("Enter height:");
let area = 0.5 * base * height;
console.log("The area of the triangle is " + area);

// 2. Calculate perimeter of a triangle
let side_a = prompt("Enter side a:");
let side_b = prompt("Enter side b:");
let side_c = prompt("Enter side c:");
let perimeter = side_a + side_b + side_c;
console.log("The perimeter of the triangle is " + perimeter);

// 3. Calculate area and perimeter of a rectangle
let length = prompt("Enter length:");
let width = prompt("Enter width:");
let rectangle_area = length * width;
let rectangle_perimeter = 2 * (length + width);
console.log("The area of the rectangle is " + rectangle_area);
console.log("The perimeter of the rectangle is " + rectangle_perimeter);

// 4. Calculate area and circumference of a circle
let radius = prompt("Enter radius:");
let circle_area = 3.14 * radius * radius;
let circle_circumference = 2 * 3.14 * radius;
console.log("The area of the circle is " + circle_area);
console.log("The circumference of the circle is " + circle_circumference);

// 5. Calculate slope, x-intercept, y-intercept of y = 2x -2
// The slope is 2
// The y-intercept is -2
// The x-intercept is x = y/2 + 1 = 0 (when y = 0)

// 6. Find the slope between point (2, 2) and point(6,10)
// slope m = (y2-y1)/(x2-x1) = (10 - 2) / (6 - 2) = 2
// The slopes in question 5 and 6 are the same.

// 7. Calculate the value of y = x^2 + 6x + 9
// y will be 0 when x = -3

// 8. Calculate weekly earning
let hours = prompt("Enter hours:");
let rate_per_hour = prompt("Enter rate per hour:");
let weekly_earning = hours * rate_per_hour;
console.log("Your weekly earning is " + weekly_earning);

// 9. Check the length of your name
let myName = "John";
if(myName.length > 7){
  console.log("Your name is long.");
} else {
  console.log("Your name is short.");
}

// 10. Compare the length of first name and last name
let firstName = 'Asabeneh';
let lastName = 'Yetayeh';
if(firstName.length > lastName.length){
  console.log("Your first name, " + firstName + " is longer than your family name, " + lastName);
} else {
  console.log("Your first name, " + firstName + " is shorter than your family name, " + lastName);
}

// 11. Compare age
let myAge = 250;
let yourAge = 25;
console.log("I am " + (myAge - yourAge) + " years older than you.");

// 12. Driving age prompt
let birth_year = prompt("Enter birth year:");
let current_year = new Date().getFullYear();
let age = current_year - birth_year;
if(age >= 18){
  console.log("You are " + age + ". You are old enough to drive.");
} else {
  console.log("You are " );
}

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

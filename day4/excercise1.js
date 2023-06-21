//Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let age = prompt('Enter your age:');
if(age>18) {
    alert('You are old enough to drive');
} else {
    alert('not 18 give another feedback stating to wait for the number of years he needs to turn 18');
}
//Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let user1 = prompt('Enter your age:');
let user2 = prompt('Enter your age:');
if(user1 > user2) {
    alert('user1 is older than user2');
}else if(user1 < user2) {
    alert('user2 is older than user1');
}

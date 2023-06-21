//Write a code which can give grades to students according to theirs scores
let scores = prompt('Enter your scores:');
let level;
if(scores >=80 && scores<=100) level='A';
if(scores >=70 && scores<=89) level='B';
if(scores >=60 && scores<=69) level='C';
if(scores >=50 && scores<=59) level='D';
if(scores >=0 && scores<=49) level='F';
alert("level: "+level);
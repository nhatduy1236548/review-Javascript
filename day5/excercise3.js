/**
 * The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
Sort the array and find the min and max age
Find the median age(one middle item or two middle items divided by two)
Find the average age(all items divided by number of items)
Find the range of the ages(max minus min)
Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
 */
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const min = ages.sort((a,b) => a-b)[0];
const max = ages.sort((a,b) => b-a)[0];
const arr= ages.sort((a,b) => a-b);
if(ages.length & 1==0){
    (arr[ages.length/2-1]+ arr[ages.length/2-1])/2;
}else {
    arr[Math.around(ages.length/2)];
}
ages.reduce((sum,a)=>sum+a)/ages.length;

//Find the middle country(ies) in the countries array.
if(ages.length & 1==0){
    return [arr[ages.length/2-1],arr[ages.length/2-1]];
}else {
    return arr[Math.around(ages.length/2)];
}
//Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half
if(ages.length & 1==0){
    return [ages.slice().splice(0,ages.length/2-1), ages.slice().splice(ages.length/2-1)];
}else {
    return [ages.slice().splice(0,Math.floor(ages.length/2)), ages.slice().splice(Math.around(ages.length/2))];
}
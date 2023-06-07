//1.Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
    const txt = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
    const pattern = /\d{1,5}/g ;
    const matches = txt.match(pattern);
    const income = matches.reduce((sum,income)=> sum+Number(income),0);
//2.The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.

const points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']

const max = points.reduce((max,point) => {return point >= max ? point : max},points[0]);
const min = points.reduce((min,point) => {return point <= min ? point : min},points[0]);
const distance = max - min;
let love_sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log((love_sentence.match(/love/gi) || []).length);

console.log((sentence.match(/because/gi) || []).length);

let cleaned_text = sentence.replace(/[^a-zA-Z ]/g, "").toLowerCase();
let words = cleaned_text.split(" ");
let counts = words.reduce((obj, word) => {
    obj[word] = (obj[word] || 0) + 1;
    return obj;
}, {});
let most_frequent_word = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
console.log(most_frequent_word);

let income_text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let matches = income_text.match(/(\d+)/g);
let annual_income = matches[0] * 12 + parseInt(matches[1]) + matches[2] * 12;
console.log(annual_income);

// Sort countries by name, capital, population
let sortCountriesByName = (countries) => countries.sort((a, b) => a.name.localeCompare(b.name));
let sortCountriesByCapital = (countries) => countries.sort((a, b) => a.capital.localeCompare(b.capital));
let sortCountriesByPopulation = (countries) => countries.sort((a, b) => b.population - a.population);

// Find the most spoken languages
let mostSpokenLanguages = (countries, topN) => {
  let languageCounts = {};
  countries.forEach(country => {
    country.languages.forEach(language => {
      if(language in languageCounts) {
        languageCounts[language]++;
      } else {
        languageCounts[language] = 1;
      }
    });
  });
  let sortedLanguages = Object.entries(languageCounts).sort((a, b) => b[1] - a[1]);
  return sortedLanguages.slice(0, topN).map(([language, count]) => ({ language, count }));
};

// Most populated countries
let mostPopulatedCountries = (countries, topN) => {
  return countries.sort((a, b) => b.population - a.population).slice(0, topN).map(({name, population}) => ({ country: name, population }));
};

// Measures of central tendency and variability
let statistics = {
  data: [],
  count: function() {
    return this.data.length;
  },
  sum: function() {
    return this.data.reduce((a, b) => a + b, 0);
  },
  min: function() {
    return Math.min(...this.data);
  },
  max: function() {
    return Math.max(...this.data);
  },
  range: function() {
    return this.max() - this.min();
  },
  mean: function() {
    return this.sum() / this.count();
  },
  median: function() {
    let sorted = [...this.data].sort((a, b) => a - b);
    return (sorted[(sorted.length - 1) >> 1] + sorted[sorted.length >> 1]) / 2;
  },
  mode: function() {
    let counts = this.data.reduce((a, b) => ((a[b] = (a[b] || 0) + 1), a), {});
    let maxCount = Math.max(...Object.values(counts));
    let mode = Object.keys(counts).reduce((a, b) => (counts[a] < counts[b] ? b : a));
    return { mode: Number(mode), count: maxCount };
  },
  var: function() {
    let mean = this.mean();
    return this.data.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / (this.count() - 1);
  },
  std: function() {
    return Math.sqrt(this.var());
  },
  freqDist: function() {
    let counts = this.data.reduce((a, b) => ((a[b] = (a[b] || 0) + 1), a), {});
    return Object.entries(counts).map(([
            // Continue from previous code
    value, count]) => {
        return {value: Number(value), count, frequency: (count / this.count()) * 100};
    }).sort((a, b) => b.count - a.count);
  },
  describe: function() {
    console.log('Count:', this.count());
    console.log('Sum: ', this.sum());
    console.log('Min: ', this.min());
    console.log('Max: ', this.max());
    console.log('Range: ', this.range());
    console.log('Mean: ', this.mean());
    console.log('Median:', this.median());
    console.log('Mode: ', this.mode());
    console.log('Variance: ',this.var());
    console.log('Standard Deviation: ', this.std());
    console.log('Frequency Distribution: ',this.freqDist());
  }
};

// Usage
let countries = [
  // Insert country data here
];
let topN = 10;
console.log(sortCountriesByName(countries));
console.log(sortCountriesByCapital(countries));
console.log(sortCountriesByPopulation(countries));
console.log(mostSpokenLanguages(countries, topN));
console.log(mostPopulatedCountries(countries, topN));

let ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
statistics.data = ages;
statistics.describe();


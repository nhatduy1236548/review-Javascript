class Statistics {
    constructor(data) {
      this.data = data;
    }
  
    count() {
      return this.data.length;
    }
  
    sum() {
      return this.data.reduce((a, b) => a + b, 0);
    }
  
    min() {
      return Math.min(...this.data);
    }
  
    max() {
      return Math.max(...this.data);
    }
  
    range() {
      return this.max() - this.min();
    }
  
    mean() {
      return this.sum() / this.count();
    }
  
    median() {
      const sorted = [...this.data].sort((a, b) => a - b);
      const middle = Math.floor(sorted.length / 2);
  
      if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
      }
  
      return sorted[middle];
    }
  
    mode() {
      const counts = this.data.reduce((acc, value) => {
        if (!acc[value]) {
          acc[value] = 0;
        }
  
        acc[value]++;
  
        return acc;
      }, {});
  
      let maxCount = 0;
      let modeValue = null;
  
      for (const [value, count] of Object.entries(counts)) {
        if (count > maxCount) {
          maxCount = count;
          modeValue = Number(value);
        }
      }
  
      return { mode: modeValue, count: maxCount };
    }
  
    // More advanced statistics operations like variance, standard deviation, frequency distribution are omitted here
  }
  
  const statistics = new Statistics([31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]);
  console.log('Count:', statistics.count());
  console.log('Sum:', statistics.sum());
  console.log('Min:', statistics.min());
  console.log('Max:', statistics.max());
  console.log('Range:', statistics.range());
  console.log('Mean:', statistics.mean());
  console.log('Median:', statistics.median());
  console.log('Mode:', statistics.mode());
  
const arrs = [
    { English: 91 },
    { French: 45 },
    { Arabic: 25 },
    { Spanish: 24 },
    { Russian: 9 },
    { Portuguese: 9 },
    { Dutch: 8 },
    { German: 7 },
    { Chinese: 5 },
    { Swahili: 4 },
    { Serbian: 4 }
  ];

  //1.How many languages are there in the countries object file.
  const set = new Set(Object.keys(arrs));
  console.log(set.size);

  //2.*** Use the countries data to find the 10 most spoken languages.
  const keys=arrs
              .map((arr) => Object.values(arr)[0])
              .sort((a,b) => b-a)
              .slice(0,10)
  const counts = [];
  const filteredLang = arrs.filter((item) => keys.includes(Object.values(item)[0]));
  counts.push(filteredLang);
  

  
  
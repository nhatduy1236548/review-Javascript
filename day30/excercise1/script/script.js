  const languages = [
    { name: "Mandarin Chinese", speakers: 918000000 },
    { name: "Spanish", speakers: 460000000 },
    { name: "English", speakers: 379000000 },
    { name: "Hindi", speakers: 341000000 },
    { name: "Bengali", speakers: 228000000 },
    { name: "Portuguese", speakers: 221000000 },
    { name: "Russian", speakers: 154000000 },
    { name: "Japanese", speakers: 128000000 },
    { name: "Western Punjabi", speakers: 109000000 },
    { name: "Marathi", speakers: 105000000 },
  ];

  const data = [
    { name: "Afghanistan", capital: "Luanda", population: 31825295},
    { name: "Albania", capital: "Suva", population: 889953},
    { name: "Andorra", capital: "Helsinki", population: 5517827},
    { name: "Angola", capital: "Luanda", population: 31825295},
    { name: "Bangladesh", capital: "Suva", population: 889953},
    { name: "Belarus", capital: "Helsinki", population: 5517827},
    { name: "Colombia", capital: "Luanda", population: 31825295},
    { name: "Estonia", capital: "Suva", population: 889953},
    { name: "Fiji", capital: "Helsinki", population: 5517827},
    { name: "Hungary", capital: "Luanda", population: 31825295},
    { name: "Guyana", capital: "Suva", population: 889953},
    { name: "Irag", capital: "Helsinki", population: 5517827},
  ];
  
  function scrollToChart() {
    let chart = document.getElementById("chart");
    chart.scrollIntoView();
  }
  
  function scrollToSearch() {
    let search = document.getElementById("title");
    search.scrollIntoView();
  }

  function search() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const valueInput =document.getElementById('valueInput');
    const inform =document.getElementById('inform');
    if (!input) {     
      inform.style.display ="none";
      return data
    }
    const results = data.filter((item) => {
      for (let char of input) {
        if (item.name.toLowerCase().includes(char)) return true;
      }
      return false;
    });
    inform.style.display ="flex";
    inform.style.color ="orange";
    valueInput.textContent = results.length;
    return results;
  }
  
  function sortByName() {
    data.sort((a, b) => a.name.localeCompare(b.name));
  }
  
  function sortByCapital() {
    data.sort((a, b) => a.capital.localeCompare(b.capital));
  }
  
  function sortByPopulation() {
    data.sort((a, b) => a.population - b.population);
  }
  
  function render(results) {
    const container = document.getElementById("container");
  
    while (container.hasChildNodes()) {
      container.removeChild(container.firstChild);
    }
  
    for (let i = 0; i < results.length; i++) {
      let img = document.createElement("img");
      img.src = 'images/'+results[i].name + '.png';
      img.style.width = '15%';
      img.style.height = '140px';
      document.getElementById("container").appendChild(img);
    }
  }
  
  setInterval(function () {
    const results = search();
    render(results);
  }, 400);
  
  function createBarChart(data, containerId) {
    const container = document.getElementById(containerId);

    while (container.hasChildNodes()) {
      container.removeChild(container.firstChild);
    }

    data.sort((a, b) => b.value - a.value);

    data.forEach((item) => {
      const box = document.createElement("div");
      const box1 = document.createElement("div");
      const box2 = document.createElement("div");
      const title = document.createElement("div");
      const bar = document.createElement("div");
      const count = document.createElement("div");
      title.textContent = item.name;
      title.style.width = "20%";
      bar.style.width = (item.value / data[0].value) * 100 + "%";
      bar.innerHTML = "&nbsp;";
      bar.style.background = "yellow";
      count.textContent = item.value;

      box.style.display = "flex";
      box.style.justifyContent = "space-between";
      box.style.marginBottom = "5px";
      box1.style.display = "flex";
      box1.style.justifyContent = "space-between";
      box1.style.width = "75%";
      box2.style.width = "80%";
      box.appendChild(title);
      box2.appendChild(bar);
      box1.appendChild(box2);
      box1.appendChild(count);
      box.appendChild(box1);
      container.appendChild(box);
    });
  }

  function showChart(chartId) {
    const populationBtn = document.getElementById("populationBtn");
    const languageBtn = document.getElementById("languageBtn");
    const populationChart = document.getElementById("populationChart");
    const languageChart = document.getElementById("languageChart");

    populationBtn.classList.remove("active");
    languageBtn.classList.remove("active");

    populationChart.classList.add("hidden");
    languageChart.classList.add("hidden");

    if (chartId === "populationChart") {
      populationBtn.classList.add("active");
      populationChart.classList.remove("hidden");
      createBarChart(
        data.map((country) => ({
          name: country.name,
          value: country.population,
        })),
        "populationChart"
      );
    } else if (chartId === "languageChart") {
      languageBtn.classList.add("active");
      languageChart.classList.remove("hidden");
      createBarChart(
        languages.map((language) => ({
          name: language.name,
          value: language.speakers,
        })),
        "languageChart"
      );
    }
  }

  showChart("populationChart");
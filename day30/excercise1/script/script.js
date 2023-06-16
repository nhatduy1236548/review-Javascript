const countries = [
    { name: "China", population: 1444216107 },
    { name: "India", population: 1393409038 },
    { name: "United States", population: 332915073 },
    { name: "Indonesia", population: 276361783 },
    { name: "Pakistan", population: 225199937 },
    { name: "Brazil", population: 213993437 },
    { name: "Nigeria", population: 211400708 },
    { name: "Bangladesh", population: 166303498 },
    { name: "Russia", population: 145912025 },
    { name: "Mexico", population: 130262216 },
  ];

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
    "ANGOLA",
    "FIJI",
    "FINLAND",
    "ECUADOR",
    "YEMEN",
    "BUNGARI",
    "CHICAGO",
    "HONEY",
    "SAN MARIO",
    "VENEZUELA",
  ];
  
function scrollToChart() {
    let chart = document.getElementById("chart");
    chart.scrollIntoView({behavior: "smooth"});
  }
  
  function scrollToSearch() {
    let search = document.getElementById("search");
    search.scrollIntoView({behavior: "smooth"});
  }

  function searchByStar() {
    const input = document
      .getElementById("searchInput")
      .value.toLowerCase();
    if (!input) return [];
    const results = data.filter((item) =>
      item.toLowerCase().startsWith(input)
    );
    return results;
  }

  function searchByLetter() {
    const input = document
      .getElementById("searchInput")
      .value.toLowerCase();
    if (!input) return [];
    const results = data.filter((item) =>
      item.toLowerCase().includes(input)
    );
    return results;
  }

  var action = searchByStar;

  function startingWord() {
    action = searchByStar;
  }

  function searchWithAnyWord() {
    action = searchByLetter;
  }

  function render(results) {
    const container = document.getElementById("container");
    const searchInput = document.getElementById("searchInput");
    searchInput;
    if (results.length) {
      const inform = document.getElementById("inform");
      const valueInput = document.getElementById("valueInput");
      const number = document.getElementById("number");
      inform.style.display = "flex";
      inform.style.justifyContent = "center";
      valueInput.textContent = searchInput.value;
      number.textContent = results.length;
    } else {
      const inform = document.getElementById("inform");
      inform.style.display = "none";
    }

    while (container.hasChildNodes()) {
      container.removeChild(container.firstChild);
    }

    for (let i = 0; i < results.length; i++) {
      let title = document.createElement("div");
      title.textContent = results[i];
      title.style.width = "15%";
      title.style.fontSize = "10px";
      title.style.height = "50px";
      title.style.alignItems = "center";
      title.style.textAlign = "center";
      title.style.margin = "2px";
      title.style.paddingTop = "7px";
      title.style.display = "flex";
      title.style.justifyContent = "center";
      title.style.background = "gray";

      document.getElementById("container").appendChild(title);
    }
  }

  setInterval(function () {
    const results = action();
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
        countries.map((country) => ({
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
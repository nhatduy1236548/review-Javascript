let players = [];

function addPlayer() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const country = document.getElementById("country").value;
    const score = document.getElementById("score").value;
    const notice = document.getElementById("notice");

    if (firstName == '' || lastName == '' || country == '' || score == '') {
        notice.textContent = "All field are required";
        notice.style.color = "red";
        return;
    }
    notice.textContent = '';
    const player = {
        name: `${firstName} ${lastName}`,
        country: country,
        score: parseInt(score),
    };

    players.push(player);
    updateTable();
}

function deletePlayer(index) {
    players.splice(index, 1);
    updateTable();
}

function incrementScore(index) {
    players[index].score += 5;
    updateTable();
}

function decrementScore(index) {
    players[index].score -= 5;
    updateTable();
}

function updateTable() {
    players.sort((a, b) => b.score - a.score);
    const table = document.getElementById("playerTable");
    table.innerHTML = '';

    for (let i = 0; i < players.length; i++) {
        const row = `<tr>
            <td>${players[i].name}</td>
            <td>${players[i].country}</td>
            <td>${players[i].score}</td>
            <td>
                <button onclick="deletePlayer(${i})">Delete</button>
                <button onclick="incrementScore(${i})">+5</button>
                <button onclick="decrementScore(${i})">-5</button>
            </td>
        </tr>`;
        table.innerHTML += row;
    }
}

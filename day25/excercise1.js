const constant = {
    "EARTH": {
        gravity: 9.8,
        imageName: "earth.jpg"
    },
    "MOON": {
        gravity: 1.6,
        imageName: "moon.jpg"
    },
    "MARS": {
        gravity: 3.7,
        imageName: "mars.jpg"
    }
}

function calculateWeight() {
    var mass = document.getElementById("massInput").value;
    var planet = document.getElementById("objectSelector").value;
    var weight = mass >= 0 ? mass * constant[planet].gravity : 0;
    var image = document.getElementById("objectImage");
    var text = document.getElementById("text");

    if (planet !== '') {
        image.src = constant[planet].imageName;
        image.style.width = '40%';
        document.getElementById("imageContainer").style.height = '300px';
        image.style.display = "block";
        text.style.background = "darkgray";
        text.innerText = `The weight of the object on ${planet} : ${weight}`;
        text.style.display = "block";
    } else {
        image.style.display = "none";
        text.innerText = "";
        text.style.background = "";
        text.style.display = "none";
    }
}

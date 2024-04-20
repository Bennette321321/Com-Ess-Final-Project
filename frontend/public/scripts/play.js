import { getPlayers, updatePlayer} from "./api.js";

var canAddCnt = true;

var name = sessionStorage.getItem("currentName");

document.addEventListener("DOMContentLoaded", () => {
    loadName(name)
    loadScore(name);
    document.addEventListener("click", addCnt)
    const disableZone = document.getElementsByClassName("disableAdd");
    for (let element of disableZone) {
        element.addEventListener("click", disableAdd);
    }
    const changeAnimal = document.getElementById("confirm-select-animal-btn");
    changeAnimal.addEventListener("click", change_animal);
    const leaderboardButton = document.getElementById("leaderboard-btn");
    leaderboardButton.addEventListener("click", showLeaderboard);
});

function loadName(name) {
    const nameZone = document.getElementById("name-used");
    nameZone.innerText = `User: ${name}`;
    nameZone.addEventListener("click", disableAdd);
}

async function loadScore(name) {
    let score = 0;
    const players = await getPlayers();
    for (let player of players) {
        if (player.name == name) {
            score = player.score
            break;
        }
    }
    document.getElementById("cnt").innerText = score;
}

function addCnt() {
    if (canAddCnt) {
        var cnt = Number(document.getElementById("cnt").innerText);
        var current_animal = document.getElementById("select-animal-btn").value;
        var audio;
        cnt += 1
        saveScore(name, cnt)
        document.getElementById("cnt").innerText = cnt;
        switch(current_animal) {
            case "cat" :
                audio = new Audio('../src/meow.mp3')
                document.body.style.backgroundImage = "url('../src/popcat2.png')";
                setTimeout(()=> document.body.style.backgroundImage = "url('../src/popcat1.png')", 200);
                break;
            case "dog" :
                audio = new Audio('../src/barking.mp3')
                document.body.style.backgroundImage = "url('../src/popdog2.png')";
                setTimeout(()=> document.body.style.backgroundImage = "url('../src/popdog1.png')", 200);
                break;
            case "pig" :
                audio = new Audio('../src/oink.mp3')
                document.body.style.backgroundImage = "url('../src/poppig2.png')";
                setTimeout(()=> document.body.style.backgroundImage = "url('../src/poppig1.png')", 200);
                break;
            case "whale" :
                audio = new Audio('../src/whale.mp3')
                document.body.style.backgroundImage = "url('../src/popwhale2.png')";
                setTimeout(()=> document.body.style.backgroundImage = "url('../src/popwhale1.png')", 200);
                break;
            case "sheep" :
                audio = new Audio('../src/baa.mp3')
                document.body.style.backgroundImage = "url('../src/popsheep2.png')";
                setTimeout(()=> document.body.style.backgroundImage = "url('../src/popsheep1.png')", 200);
                break;
            case "elephant" :
                audio = new Audio('../src/elephant.mp3')
                document.body.style.backgroundImage = "url('../src/popelephant2.png')";
                setTimeout(()=> document.body.style.backgroundImage = "url('../src/popelephant1.png')", 200);
                break;
            case "wolf" :
                audio = new Audio('../src/howl.mp3')
                document.body.style.backgroundImage = "url('../src/popwolf2.png')";
                setTimeout(()=> document.body.style.backgroundImage = "url('../src/popwolf1.png')", 200);
                break;
        }
        audio.play()
        }
    else {
        canAddCnt = true;
    }
}

function disableAdd() {
    canAddCnt = false
}

function change_animal() {
    disableAdd()
    var current_animal = document.getElementById("select-animal-btn").value;
    switch(current_animal) {
        case "cat" :
            document.body.style.backgroundImage = "url('../src/popcat1.png')";
            break;
        case "dog" :
            document.body.style.backgroundImage = "url('../src/popdog1.png')";
            break;
        case "pig" :
            document.body.style.backgroundImage = "url('../src/poppig1.png')";
            break;
        case "whale" :
            document.body.style.backgroundImage = "url('../src/popwhale1.png')";
            break;
        case "sheep" :
            document.body.style.backgroundImage = "url('../src/popsheep1.png')";
            break;
        case "elephant" :
            document.body.style.backgroundImage = "url('../src/popelephant1.png')";
            break;
        case "wolf" :
            document.body.style.backgroundImage = "url('../src/popwolf1.png')";
            break;
    }
}

async function saveScore(name, score) {
    disableAdd()
    await updatePlayer(name, score);
}

function showLeaderboard() {
    disableAdd()
    window.open("leaderboard.html", "_self");
}
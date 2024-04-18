document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const playBtn = document.getElementById('play-btn');
    const saveBtn = document.getElementById('save-btn');
    const leaderboardDiv = document.getElementById('leaderboard');

    function change_page(){
        window.location.href = "play.html";
      } 

    // Function to handle form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const code = document.getElementById('code').value;
        const username = document.getElementById('username').value;
        // Perform validation and submit the form
        // Redirect to game page with user id
        change_page()
    });

    // Function to handle save button click
    saveBtn.addEventListener('click', function() {
        // Get user id and score
        // Perform validation
        // Send data to server to save
    });

    // Function to fetch leaderboard data
    function fetchLeaderboard() {
        // Fetch leaderboard data from server
        // Update leaderboardDiv with fetched data
    }

    // Initial fetch of leaderboard data
    fetchLeaderboard();
});

// ===========================================================

var cnt = 0
var current_animal = "cat"
var bg_cat = ["url('src/popcat1.png')","url('src/popcat2.png')"]
var bg_dog = ["url('src/popdog1.png')","url('src/popdog2.png')"]
var bg_pig = ["url('src/poppig1.png')","url('src/poppig2.png')"]
var i = 0;
var meow = new Audio('src/meow.mp3');
var barking = new Audio('src/barking.mp3')
var oink = new Audio('src/oink.mp3')

function addCnt() {
    cnt += 1
    document.getElementById("cnt").innerText = `${cnt}`
    switch(current_animal) {
        case "cat" :
            meow.play();
            document.body.style.backgroundImage = bg_cat[1];
            setTimeout(()=> document.body.style.backgroundImage = bg_cat[0],200);
            break;
        case "dog" :
            barking.play();
            document.body.style.backgroundImage = bg_dog[1];
            setTimeout(()=> document.body.style.backgroundImage = bg_dog[0],200);
            break;
        case "pig" :
            oink.play();
            document.body.style.backgroundImage = bg_pig[1];
            setTimeout(()=> document.body.style.backgroundImage = bg_pig[0],200);
            break;
    }
    
}

function change_animal() {
    current_animal = document.getElementById("select-animal").value;
    switch(current_animal) {
        case "cat" :
            document.body.style.backgroundImage = bg_cat[0];
            break;
        case "dog" :
            document.body.style.backgroundImage = bg_dog[0];
            break;
        case "pig" :
            document.body.style.backgroundImage = bg_pig[0];
            break;
    }
}
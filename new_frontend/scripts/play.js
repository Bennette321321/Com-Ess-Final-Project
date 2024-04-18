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
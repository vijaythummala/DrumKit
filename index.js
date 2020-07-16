var buttons = document.querySelectorAll("button");
var audio = new Audio();
var playlist = new Array('sounds/crash.mp3', 'sounds/kick-bass.mp3', 'sounds/snare.mp3', 'sounds/tom-1.mp3', 'sounds/tom-2.mp3', 'sounds/tom-3.mp3', 'sounds/tom-4.mp3');


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (event) {
        audio.src = (playlist[i]);
        audio.play();
        buttonAnime(event.srcElement.classList[0]);
    });
}


document.addEventListener("keypress",
    function (event) {
        buttonAnime(event.key);
        switch (event.key) {
            case 'w':
                audio.src = (playlist[0]);
                audio.play();
                break;
            case 'a':
                audio.src = (playlist[1]);
                audio.play();
                break;
            case 's':
                audio.src = (playlist[2]);
                audio.play();
                break;
            case 'd':
                audio.src = (playlist[3]);
                audio.play();
                break;
            case 'j':
                audio.src = (playlist[4]);
                audio.play();
                break;
            case 'k':
                audio.src = (playlist[5]);
                audio.play();
                break;
            case 'l':
                audio.src = (playlist[6]);
                audio.play();
                break;
            default:




        }
    }
);

function buttonAnime(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}



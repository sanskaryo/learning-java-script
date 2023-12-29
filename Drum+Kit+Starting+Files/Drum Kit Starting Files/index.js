var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

var mAudio = new Audio('sounds/tunak.mp3');

function makeSound(key) {
    switch (key) {
                case "w":
                    new Audio("sounds/tom-1.mp3").play();
                    break;
                case "a":
                    new Audio("sounds/tom-2.mp3").play();
                    break;
                case "s":
                    new Audio('sounds/tom-3.mp3').play();
                    break;
                case "d":
                    new Audio('sounds/tom-4.mp3').play();
                    break;
                case "j":
                    new Audio('sounds/snare.mp3').play();
                    break;
                case "k":
                    new Audio('sounds/crash.mp3').play();
                    break;
                case "l":
                    new Audio('sounds/kick-bass.mp3').play();
                    break;
                case "m":
                    // Toggle play/pause for 'm' audio
                    if (mAudio.paused) {
                        mAudio.play();
                    } else {
                        mAudio.pause();
                        mAudio.currentTime = 0; // Reset to the beginning for next play
                    }
                    break;
                default:
                    console.log(key);
                    break;
        
                }
                function buttonAnimation(currentKey) {
                    playSoundWithDelay(new Audio("path/to/sound.mp3"), 50);
                    var activeButton = document.querySelector("." + currentKey);
                    activeButton.classList.add("pressed");
                    setTimeout(function() {
                        activeButton.classList.remove("pressed");
                    }, 100);
                } ; }
     

                function playSoundWithDelay(sound, delay) {
                    setTimeout(function() {
                        sound.play();
                    }, delay);
                }

                
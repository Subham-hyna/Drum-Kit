// For One Button

// document.querySelector("button").addEventListener("click",function(){
//     alert("I got Clicked");
// });

// For All Buttons

var numberofDrum = document.querySelectorAll(".drum").length;

for(var i=0;i<numberofDrum;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var activebutton = this.innerHTML;
       makesound(activebutton); 
       buttonAnimation(activebutton);
     });
    
}

document.addEventListener("keydown",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
});

function makesound(key){

    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "W":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "A":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "S":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "D":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "J":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "K":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "L":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
       
        default:
            break;
       }
}

function buttonAnimation(key){
    var activebutton = document.querySelector("." + key);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },100);
}

//audio.play();
// alert("I got Clicked");

// KLIJENTSKA JS
console.log('helouuu');
//dodavanje muzike
var btn = document.getElementById("play");
btn.addEventListener('click',function()
{
    var audio = new Audio('audio.mp3');
    audio.play();
    console.log("music played")
});

background
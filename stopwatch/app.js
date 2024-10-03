var hour = 0
var min = 0
var sec = 0
var mlisec = 0

var milisecheading = document.getElementById('mlisec')
var sechead = document.getElementById('sec')
var minheading = document.getElementById('min')
var hourheading = document.getElementById('hour')

var start=document.getElementById('start')
var pause=document.getElementById('pause')
var reset=document.getElementById('reset')

pause.disabled=true;
reset.disabled=true;


var interval;

function starttimer(){
    mlisec++;
    milisecheading.innerHTML = mlisec;
    if (mlisec >= 1000 ){
        sec++
        sechead.innerHTML = sec;
        mlisec = 0;
    }
    else if (sec >= 100 ){
        min++
        minheading.innerHTML = min;
        sec = 0;
    }
   else  if (min >= 60){
        hour++
        hourheading.innerHTML = hour;
        min = 0;
    }
}

 function starting(){
    interval=setInterval(starttimer,10)
    start.disabled=true;
    pause.disabled=false;
    reset.disabled=false;
 }
 function stop(){
    clearInterval(interval)
    pause.disabled=true;
    start.disabled=false;
    reset.disabled=false;
 }
 function ending(){
    hour=0;
    min=0;
    mlisec=0;
    sec=0;
    hourheading.innerHTML=hour;
    minheading.innerHTML=min;
    sechead.innerHTML=sec;
    milisecheading.innerHTML=mlisec;
    reset.disabled=true;
    pause.disabled=false;
    pause()



 }
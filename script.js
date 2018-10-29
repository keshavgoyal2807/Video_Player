var play=document.querySelector('.control1');
var back=document.querySelector('.back');
var forward=document.querySelector('.forward');
var video=document.querySelector('video');
var volume2=document.querySelector('.volume1');
var playback=document.querySelector('.speed');
var progress=document.querySelector('.filled');
var progress1=document.querySelector('.progress_bar');
function playorpause(){
    if(video.paused)
    {
        video.play();
    }
    else
    {
        video.pause();
    }
    //console.log(video);
}
function back1(){
    video.currentTime-=10;
}
function forward1(){
    video.currentTime+=25;
}
function volume1(){
    video.volume=this.value;
    console.log(video);
}
function speed1(){
    video.playbackRate=this.value;
}
function update(){
var progress1=(video.currentTime/ video.duration)*100;
progress.style.flexBasis=`${progress1}%`;
}
function update1(e){
    //console.log(e.offsetX);
    video.currentTime=((e.offsetX/progress1.offsetWidth)*video.duration);
}
function updatebutton(){
    if(video.paused)
    {
        play.textContent='►';
    }
    else
    {
        play.textContent='❚ ❚'
    }
}
play.addEventListener('click',playorpause);
back.addEventListener('click',back1);
forward.addEventListener('click',forward1);
volume2.addEventListener('change',volume1);
playback.addEventListener('change',speed1);
video.addEventListener('timeupdate',update);
video.addEventListener('click',playorpause);
video.addEventListener('play',updatebutton);
video.addEventListener('pause',updatebutton);
progress1.addEventListener('click',update1);
var isdown=false;
progress1.addEventListener('mousedown',() => isdown=true);
progress1.addEventListener('mouseup',() => isdown=false);
progress1.addEventListener('mousemove',(e) => {
    if(isdown)
    {
        console.log(e);
        update1(e);
    }
});
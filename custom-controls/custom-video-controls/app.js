const video=document.querySelector("video");
const videoContainer=document.querySelector(".videocontainer")
const timeFrame=document.querySelector("input[name=timeFrame]")
const playBtn=document.querySelector("input[name=play]");
const stopBtn=document.querySelector("input[name=stop]");
const prevBtn=document.querySelector("input[name=prev]");
const nextBtn=document.querySelector("input[name=next]");
const moveBackBtn=document.querySelector("input[name=moveback]");
const moveforwardBtn=document.querySelector("input[name=moveforward]");
const volume=document.querySelector("input[name=volume]");
const muteBtn=document.querySelector("input[name=mute]");
const speed=document.querySelector("input[name=speed]");
const fullScreenBtn=document.querySelector(".full-screen");
const currentTiming=document.querySelector(".timeelip");
const totalDurationholder=document.querySelector(".duration");
const seconds=10;
let  currentVolum=.5;
let currentVideo=1;

playBtn.addEventListener("click",()=>{
    timeFrame.setAttribute("max",video.duration)
    video.play()
})
stopBtn.addEventListener("click",()=>{
    video.pause()
})
prevBtn.addEventListener("click",()=>{
   currentVideo--;
   if(currentVideo <=0){
    return;
   }
   else{
    video.src=`video/${currentVideo}.mp4`
   }
})
nextBtn.addEventListener("click",()=>{
   currentVideo++;
   if(currentVideo >2){
    return;
   }
   else{
  
    video.src=`video/${currentVideo}.mp4`
   }
})

moveBackBtn.addEventListener("click",()=>{
    if(video.currentTime !=0){
        video.currentTime -=seconds;
    }
})
moveforwardBtn.addEventListener("click",()=>{
    if(video.currentTime !=video.duration){
        video.currentTime +=seconds;
    } 
    
})
muteBtn.addEventListener("click",()=>{
    video.volume= video.volume !=0 ?0 : currentVolum;
    muteBtn.value= muteBtn.value=="mute" ?"unmute":"mute";
})

volume.addEventListener("input",(e)=>{
  currentVolum= e.currentTarget.value;
  video.volume=currentVolum;
})

speed.addEventListener("input",(e)=>{
   let currentSpeed= e.currentTarget.value;
   video.playbackRate=currentSpeed;
})

timeFrame.addEventListener("input",(e)=>{
    let frame= e.currentTarget.value;
    if(frame>=0 && frame <=video.duration){
        video.currentTime=frame;
    }
})

function updateTimeDisplay (){
    const currentTime = formatTime(video.currentTime);
    const totalDuration = formatTime(video.duration);
    currentTiming.textContent = currentTime;
    totalDurationholder.textContent = totalDuration;
};
function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}
video.addEventListener("timeupdate", function () {
    timeFrame.value =video.currentTime;
    updateTimeDisplay();
});
fullScreenBtn.addEventListener("click",()=>{
    videoContainer.classList.toggle("full")
})
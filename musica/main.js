console.log("Welcome to Spotify");
//INITIALISE THE VARIABLES
let songIndex=0;
let audio=new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myProgressBarr=document.getElementById('myProgressBar')
;
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},

]

songItems.forEach((element,i)=>{
    // console.log('doing');
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
    // console.log('doing');
})


//Handle play.pause click
masterplay.addEventListener('click',()=>{
    if(audio.paused || audio.currentTime<=0)
    {
        audio.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.remove('fa-beat');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audio.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        masterplay.classList.add('fa-beat');

        gif.style.opacity=0;
    }
})

//LISTEN TO EVENTS
audio.addEventListener('timeupdate',()=>{
    //update seekbar
    progress = parseInt((audio.currentTime/audio.duration)* 100); 
    myProgressBar.value = progress;
})


myProgressBar.addEventListener('change', ()=>{
    audio.currentTime = myProgressBar.value * audio.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>
{
    element.addEventListener('click',(e)=>
    {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audio.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audio.currentTime = 0;
        audio.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=7){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audio.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audio.currentTime = 0;
    audio.play();
    
    masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
  
})
document.getElementById('prev').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audio.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audio.currentTime = 0;
    audio.play();
    masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
  
})

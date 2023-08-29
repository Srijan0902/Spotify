console.log("Welcome to Spotify");
let songIndex =0;
let audioElement = new Audio('3.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');


let songs = [ 
    {songName: "closer", filepath: "song/3.mp3", coverPath:"cover/1.jpg"},
    {songName: "closer", filepath: "song/3.mp3", coverPath:"cover/1.jpg"},
    {songName: "closer", filepath: "song/3.mp3", coverPath:"cover/1.jpg"},
    {songName: "closer", filepath: "song/3.mp3", coverPath:"cover/1.jpg"},
    {songName: "closer", filepath: "song/3.mp3", coverPath:"cover/1.jpg"},
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementByClassName("songName")[0].innerText = songs[i].songName;
})


masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-solid fa-circle-play fa-2xl');
        masterPlay.classList.add('fa-solid fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-solid fa-circle-pause');
        masterPlay.classList.add('fa-solid fa-circle-play fa-2xl');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


l

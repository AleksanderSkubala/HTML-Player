var video = document.querySelector('.video');
var btn = document.querySelector('.pauseBtn button');
var bar = document.querySelector('.barFill');

function togleVideo() {
    if(video.paused) {
        btn.className="pause";
        video.play();
    } else {
        btn.className="play";
        video.pause();
    }
    if(video.currentTime === video.duration){
        btn.className="play";
        video.pause();
    }
}

btn.onclick = () => {
    togleVideo();
}

video.onclick = () => {
    togleVideo();
}

video.addEventListener('timeupdate', ()=>{
    var percent = (video.currentTime / video.duration)*100;
    bar.style.width = percent+"%";
})
var video = document.querySelector('.video');
var btn = document.querySelector('.pauseBtn button');
var progress = document.querySelector('.bar');
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
    console.log(percent);
    progress.value = percent;
})

progress.addEventListener('click', function(e) {
    var pos = (e.clientX - this.offsetLeft) / this.offsetWidth;
    console.log(pos);
    video.currentTime = pos * video.duration;
 });
var video = document.querySelector('.video');
var videoMain = document.querySelector('.videoMain');

var control = document.querySelector('.control');
var btn = document.querySelector('.pauseBtn button');

var bar = document.querySelector('.barFill');
var barAll = document.querySelector('.bar');

var current = document.querySelector('.currentTime');
var dur = document.querySelector('.duration');

window.onload = ()=>{
    var min, sec = 0;

    if(video.duration<60){
        min = 0;
        sec = video.duration;
    } else {
        min = video.duration/60 - (video.duration%60)/60;
        sec = Math.round(video.duration%60);
    }

    dur.innerHTML = `${min}:${sec}`;
};

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

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
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

    var min, sec = 0;

    if(video.currentTime<60){
        min = 0;
        sec = Math.round(video.currentTime);
    } else {
        min = video.currentTime/60 - (video.currentTime%60)/60;
        min = Math.round(min);
        sec = Math.round(video.currentTime%60);
    }

    current.innerHTML = `${min}:${sec}`;
})

video.addEventListener('mousemove', _.debounce(()=>{
    control.classList.add('hidden');
}, 5000))

video.addEventListener('mousemove', ()=>{
    control.classList.remove('hidden');
})

barAll.addEventListener('click', function(e) {
    x = this.offsetLeft - this.scrollLeft;
    var pos = (e.clientX - getOffset(barAll).left) / this.offsetWidth;
    video.currentTime = pos * video.duration;
 });
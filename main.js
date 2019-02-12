var video = document.querySelector('.video');
var videoMain = document.querySelector('.videoMain');

var control = document.querySelector('.control');
var btn = document.querySelector('.pauseBtn button');

var bar = document.querySelector('.barFill');
var barAll = document.querySelector('.bar');

var name = document.querySelector('name').innerHTML;

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
})

video.addEventListener('mousemove', _.debounce(()=>{
    control.classList.add('hidden');
}, 3000))

video.addEventListener('mouseout', ()=>{
    control.classList.remove('hidden');
})

barAll.addEventListener('click', function(e) {
    x = this.offsetLeft - this.scrollLeft;
    var pos = (e.clientX - getOffset(barAll).left) / this.offsetWidth;
    video.currentTime = pos * video.duration;
 });
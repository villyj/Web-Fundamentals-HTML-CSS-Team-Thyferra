function videoControl() {
    var myVideo = document.getElementById('myVideo');
    if (myVideo.paused) {
        myVideo.play();
    } else {
        myVideo.pause();
    }
}
 
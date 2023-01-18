const player = document.querySelector(".player");
const video = document.querySelector(".video");
const progressRange = document.querySelector(".progress-range");
const progressBar = document.querySelector(".progress-bar");
const playBtn = document.getElementById("play-btn");
const volumeIcon = document.getElementById("volume-icon");
const volumeRange = document.querySelector(".volume-range");
const volumeBar = document.querySelector(".volume-bar");
const speed = document.querySelector(".player-speed");
const currentTime = document.querySelector(".time-elapsed");
const duration = document.querySelector(".time-duration");
const fullscreenBtn = document.querySelector(".fullscreen");

// Play & Pause ----------------------------------- //
function showPlayIcon() {
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");
}

function togglePlay() {
  if (video.paused) {
    video.play();
    playBtn.classList.replace("fa-play", "fa-pause");
    playBtn.setAttribute("title", "Pause");
  } else {
    video.pause();
    showPlayIcon();
  }
}

// On video End, show play button icon
video.addEventListener('ended', showPlayIcon)

// Calculate display time format
function displayTime(time){ 
  const minutes = Math.floor(time / 60)
  let seconds = Math.floor(time % 60)
  seconds = seconds > 9 ? seconds : `0${seconds}`
  return `${minutes}:${seconds}`
}

// Progress Bar ----------------------------------- //
function updateProgress() {
  progressBar.style.width = `${(video.currentTime / video.duration)* 100}%`
  displayTime(64)
}
// Volume Controls -------------------------------- //
// Change Playback Speed -------------------------- //
// Full screen ------------------------------------ //
// Event listener
playBtn.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener('timeupdate', updateProgress)
video.addEventListener('canplay', updateProgress)
const musicContanier = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('.progress')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

// song titles
const songs = ['Lofi', 'Senses', 'Ambientalist']

// keep track

let songIndex = 2

// load song info DOM
loadsong(songs[songIndex])

// song details
function loadsong(song){
    title.innerText = song
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpg`
}

function playSong() {
    musicContanier.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

function pauseSong() {
    musicContanier.classList.add('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause()
}

function prevSong() {
    songIndex--;
  
    if (songIndex < 0) {
      songIndex = songs.length - 1;
    }
  
    loadSong(songs[songIndex]);
  
    playSong();
  }
  
  // Next song
  function nextSong() {
    songIndex++;
  
    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }
  
    loadSong(songs[songIndex]);
  
    playSong();
  }


  function updateProgress(e){
    const {duration,currentTime} = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progressPercent.style.width = `${progressPercent}%`
  }


  function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
  }

// event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContanier.classList.classList.contains('play')
     
    if(isPlaying) {
        pauseSong()
         } else {
            playSong()
         }

})

// change song events

prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)


audio.addEventListener('timeupdate', updateProgress)


progressContainer.addEventListener('click',setProgress)

audio.addEventListener('ended',nextSong)
const playButton = document.getElementById('playbutton');
const prevButton = document.getElementById('playprev');
const nextButton = document.getElementById('playnext');
const progressBar = document.getElementById('progressbar');
const currentTime = document.querySelector('.curr-time');
const totalTime = document.querySelector('.tot-time');
const albumArt = document.getElementById('album-art');
const songTitle = document.getElementById('song-title');
const artist = document.getElementsByClassName('artist-name');
const greenPlayButton = document.getElementById('greenplay');
const songItems = document.querySelectorAll('.songslist');
const heart = document.getElementById('heart');


let index = 0;
let audio = new Audio(songItems[index].dataset.src);
let isFirstPlay = true;

function preloadSongs() {
    songItems.forEach(item => {
        let audioElement = new Audio();
        audioElement.src = item.dataset.src;
        audioElement.preload = 'auto';
    });
}

preloadSongs();
function loadSong(songItem) {
    audio.src = songItem.dataset.src;
    audio.load();
    albumArt.src = songItem.dataset.albumArt;
    songTitle.textContent = songItem.dataset.title;
    artist.textContent = songItem.dataset.artist;
    audio.play();
    playButton.src = "pause6.png";
    greenPlayButton.src = "greenpause.png"; 
    songItems.forEach(item => item.classList.remove('playing'));
    songItem.classList.add('playing');
}

greenPlayButton.addEventListener("click", () => {
    if (isFirstPlay) {
        loadSong(songItems[1]);
        isFirstPlay = false;
    } else {
        if (audio.paused || audio.currentTime <= 0) {
            audio.play();
            playButton.src = "pause6.png";
            greenPlayButton.src = "greenpause.png";
        } else {
            audio.pause();
            playButton.src = "player_icon3.png";
            greenPlayButton.src = "play_musicbar.jpg";
        }
    }
});

playButton.addEventListener("click", () => {
    if (audio.paused || audio.currentTime <= 0) {
        audio.play();
        playButton.src = "pause6.png";
        greenPlayButton.src = "greenpause.png";
    } else {
        audio.pause();
        playButton.src = "player_icon3.png";
        greenPlayButton.src = "play_musicbar.jpg";
    }
});

prevButton.addEventListener("click", () => {
    if (index > 0) {
        index--;
        loadSong(songItems[index]);
    } else {
        index = songItems.length - 1;
        loadSong(songItems[index]);
    }
    isFirstPlay = false;
});

nextButton.addEventListener("click", () => {
    if (index < songItems.length - 1) {
        index++;
        loadSong(songItems[index]);
    } else {
        index = 0;
        loadSong(songItems[index]);
    }
    isFirstPlay = false;
});

audio.addEventListener("timeupdate", () => {
    let progress = parseInt((audio.currentTime / audio.duration) * 100);
    progressBar.value = progress;
    currentTime.textContent = formatTime(audio.currentTime);
    totalTime.textContent = formatTime(audio.duration);
});

progressBar.addEventListener("change", () => {
    audio.currentTime = progressBar.value * audio.duration / 100;
});

songItems.forEach((element, i) => {
    element.addEventListener("click", () => {
        index = i;
        loadSong(element);
        isFirstPlay = false; 
    });
});

function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

heart.addEventListener("click", () => {
    if (heart.classList.contains('fa-regular')) {
        heart.classList.remove("fa-regular");
        heart.classList.add('fa-solid');
        heart.classList.add('playing');
    } else {
        heart.classList.remove('fa-solid');
        heart.classList.add('fa-regular');
        heart.classList.remove('playing');
    }
});

const playButton = document.getElementById('playbutton');
const prevButton = document.getElementById('playprev');
const nextButton = document.getElementById('playnext');
const progressBar = document.getElementById('progressbar');
const currentTime = document.querySelector('.curr-time');
const totalTime = document.querySelector('.tot-time');
const albumArt = document.getElementById('album-art');
const songTitle = document.getElementById('song-title');
const artist = document.getElementsByClassName('artist-name');
const greenPlayButton = document.getElementById('greenplay');
const songItems = document.querySelectorAll('.songslist');
const heart = document.getElementById('heart');


let index = 0;
let audio = new Audio(songItems[index].dataset.src);
let isFirstPlay = true;

function loadSong(songItem) {
    audio.src = songItem.dataset.src;
    audio.load();
    albumArt.src = songItem.dataset.albumArt;
    songTitle.textContent = songItem.dataset.title;
    artist.textContent = songItem.dataset.artist;
    audio.play();
    playButton.src = "pause6.png";
    greenPlayButton.src = "greenpause.png"; 
    songItems.forEach(item => item.classList.remove('playing'));
    songItem.classList.add('playing');
}

greenPlayButton.addEventListener("click", () => {
    if (isFirstPlay) {
        loadSong(songItems[1]);
        isFirstPlay = false;
    } else {
        if (audio.paused || audio.currentTime <= 0) {
            audio.play();
            playButton.src = "pause6.png";
            greenPlayButton.src = "greenpause.png";
        } else {
            audio.pause();
            playButton.src = "player_icon3.png";
            greenPlayButton.src = "play_musicbar.jpg";
        }
    }
});

playButton.addEventListener("click", () => {
    if (audio.paused || audio.currentTime <= 0) {
        audio.play();
        playButton.src = "pause6.png";
        greenPlayButton.src = "greenpause.png";
    } else {
        audio.pause();
        playButton.src = "player_icon3.png";
        greenPlayButton.src = "play_musicbar.jpg";
    }
});

prevButton.addEventListener("click", () => {
    if (index > 0) {
        index--;
        loadSong(songItems[index]);
    } else {
        index = songItems.length - 1;
        loadSong(songItems[index]);
    }
    isFirstPlay = false;
});

nextButton.addEventListener("click", () => {
    if (index < songItems.length - 1) {
        index++;
        loadSong(songItems[index]);
    } else {
        index = 0;
        loadSong(songItems[index]);
    }
    isFirstPlay = false;
});

audio.addEventListener("timeupdate", () => {
    let progress = parseInt((audio.currentTime / audio.duration) * 100);
    progressBar.value = progress;
    currentTime.textContent = formatTime(audio.currentTime);
    totalTime.textContent = formatTime(audio.duration);
});

progressBar.addEventListener("change", () => {
    audio.currentTime = progressBar.value * audio.duration / 100;
});

songItems.forEach((element, i) => {
    element.addEventListener("click", () => {
        index = i;
        loadSong(element);
        isFirstPlay = false; 
    });
});

function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

heart.addEventListener("click", () => {
    if (heart.classList.contains('fa-regular')) {
        heart.classList.remove("fa-regular");
        heart.classList.add('fa-solid');
        heart.classList.add('playing');
    } else {
        heart.classList.remove('fa-solid');
        heart.classList.add('fa-regular');
        heart.classList.remove('playing');
    }
});



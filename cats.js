// Mike Jenkins
// 05 OCT 20XX
// Project

const images = ["cat1.jpg", "cat2.jpg", "cat3.jpg"];
const captions = ["Small fluffy stripped cat", "Small cat laying down", "2 cats hugging"];
let currentIndex = 0;
let slideInterval;
let isPlaying = false;

function updateGallery(index) {
    currentIndex = index;
    document.getElementById("gallery-img").src = images[index];
    document.getElementById("gallery-caption").textContent = captions[index];
}

function runSlideshow() {
    let nextIdx = (currentIndex + 1) % images.length;
    updateGallery(nextIdx);
}

function startTimer() {
    isPlaying = true;
    document.getElementById("pause-btn").textContent = "Pause";
    slideInterval = setInterval(runSlideshow, 2000);
}

function stopTimer() {
    isPlaying = false;
    document.getElementById("pause-btn").textContent = "Play";
    clearInterval(slideInterval)
}

function toggleSlideshow() {
    if (isPlaying) {
        stopTimer();
    } else {
        startTimer();
    }
}

function nextImage() {
    stopTimer();
    runSlideshow();
}

function prevImage() {
    stopTimer();
    let prevIdx = (currentIndex - 1 + images.length) % images.length;
    updateGallery(prevIdx);
}

document.getElementById("pause-btn").addEventListener("click", toggleSlideshow);
document.getElementById("next-btn").addEventListener("click", nextImage);
document.getElementById("prev-btn").addEventListener("click", prevImage);

window.addEventListener("load", startTimer);







































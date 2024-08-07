/*document.addEventListener('DOMContentLoaded', function() {
    showSection('about');

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent.`);
            document.getElementById('contact-form').reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    document.getElementById('clickable-text').addEventListener('click', function() {
        alert('+38098*******');
    });
});*/


document.getElementById('phoneNumber').addEventListener('click', function() {
    alert('+3809800220**');
});

document.getElementById('adress').addEventListener('click', function() {
    alert('Zhytomyr, 58 Ivana Slyoty Street');
});

document.getElementById('welcome').style.display = 'block';

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    document.getElementById(sectionId).style.display = 'block';
}

function playMedia(fileName, type, buttonElement) {
    const listItem = buttonElement.closest('li');
    let mediaPlayer = listItem.querySelector('.media-player');

    if (!mediaPlayer) {
        mediaPlayer = document.createElement('div');
        mediaPlayer.classList.add('media-player');
        mediaPlayer.id = 'videoPlayer';
        listItem.appendChild(mediaPlayer);
    }

    if (type === 'video') {
        mediaPlayer.innerHTML = `
            <video controls>
                <source src="video/${fileName}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
        const videoElement = mediaPlayer.querySelector('video');
        videoElement.addEventListener('keydown', function(event) {
            if (event.key === 'f' || event.key === 'F' || event.key === 'а' || event.key === 'А') {
                if (videoElement.requestFullscreen) {
                    videoElement.requestFullscreen();
                } else if (videoElement.mozRequestFullScreen) { // Firefox
                    videoElement.mozRequestFullScreen();
                } else if (videoElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
                    videoElement.webkitRequestFullscreen();
                } else if (videoElement.msRequestFullscreen) { // IE/Edge
                    videoElement.msRequestFullscreen();
                }
            }
        });
    } else if (type === 'audio') {
        mediaPlayer.innerHTML = `
            <audio controls>
                <source src="audio/${fileName}" type="audio/mp3">
                Your browser does not support the audio tag.
            </audio>
        `;
    }

    // Сховати плеєри
    document.querySelectorAll('.media-player').forEach(mp => {
        if (mp !== mediaPlayer) {
            mp.classList.add('hidden');
        }
    });

    mediaPlayer.classList.remove('hidden');
}

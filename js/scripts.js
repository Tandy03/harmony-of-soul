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
                } else if (videoElement.mozRequestFullScreen) {
                    videoElement.mozRequestFullScreen();
                } else if (videoElement.webkitRequestFullscreen) {
                    videoElement.webkitRequestFullscreen();
                } else if (videoElement.msRequestFullscreen) {
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

    document.querySelectorAll('.media-player').forEach(mp => {
        if (mp !== mediaPlayer) {
            mp.classList.add('hidden');
        }
    });

    mediaPlayer.classList.remove('hidden');
}

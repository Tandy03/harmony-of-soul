document.getElementById('phoneNumber').addEventListener('click', function() {
    alert('+3809800220**');
});

document.getElementById('adress').addEventListener('click', function() {
    alert('Zhytomyr, 58 Ivana Slyoty Street');
});

document.getElementById('welcome').style.display = 'block';

window.addEventListener('load', function () {

    const rawData = [
        [new Date(2023, 3, 16), 115],
        [new Date(2023, 3, 23), 92],
        [new Date(2023, 3, 30), 107],
        [new Date(2023, 4, 7), 85],
        [new Date(2023, 4, 14), 93],
        [new Date(2023, 4, 21), 115],
        [new Date(2023, 5, 4), 122],
        [new Date(2023, 5, 11), 107],
        [new Date(2023, 5, 18), 115],
        [new Date(2023, 5, 25), 93],
        [new Date(2023, 6, 2), 99],
        [new Date(2023, 6, 9), 113],
        [new Date(2023, 6, 16), 104],
        [new Date(2023, 6, 23), 113],
        [new Date(2023, 6, 30), 103],
        [new Date(2023, 7, 13), 105],
        [new Date(2023, 7, 20), 107],
        [new Date(2023, 8, 3), 123],
        [new Date(2023, 8, 10), 110],
        [new Date(2023, 8, 17), 113],
        [new Date(2023, 8, 24), 91],
        [new Date(2023, 9, 1), 103],
        [new Date(2023, 9, 8), 113],
        [new Date(2023, 9, 15), 116],
        [new Date(2023, 9, 22), 100],
        [new Date(2023, 10, 5), 98],
        [new Date(2023, 10, 19), 110],
        [new Date(2023, 10, 26), 109],
        [new Date(2023, 11, 10), 100],
        [new Date(2023, 11, 17), 111],
        [new Date(2023, 11, 24), 100],
        [new Date(2023, 11, 25), 93],
        [new Date(2023, 11, 31), 126],
        [new Date(2024, 0, 7), 101],
        [new Date(2024, 0, 14), 103],
        [new Date(2024, 0, 21), 90],
        [new Date(2024, 0, 28), 91],
        [new Date(2024, 1, 4), 94],
        [new Date(2024, 1, 11), 93],
        [new Date(2024, 1, 18), 106],
        [new Date(2024, 1, 25), 103],
        [new Date(2024, 2, 3), 111],
        [new Date(2024, 2, 10), 114],
        [new Date(2024, 2, 17), 127],
        [new Date(2024, 2, 24), 118],
        [new Date(2024, 2, 31), 125],
        [new Date(2024, 3, 7), 99],
        [new Date(2024, 3, 14), 96],
        [new Date(2024, 3, 21), 87],
        [new Date(2024, 3, 28), 105],
        [new Date(2024, 4, 5), 110],
        [new Date(2024, 4, 12), 98],
        [new Date(2024, 4, 19), 105],
        [new Date(2024, 4, 26), 106],
        [new Date(2024, 5, 2), 101],
        [new Date(2024, 5, 9), 103],
        [new Date(2024, 5, 16), 110],
        [new Date(2024, 5, 23), 102],
        [new Date(2024, 5, 30), 110],
        [new Date(2024, 6, 14), 100],
        [new Date(2024, 6, 21), 99],
        [new Date(2024, 6, 28), 99],
        [new Date(2024, 7, 4), 107],
        [new Date(2024, 7, 11), 83],
        [new Date(2024, 7, 25), 108],
        [new Date(2024, 8, 1), 107],
        [new Date(2024, 8, 8), 96],
        [new Date(2024, 8, 15), 89],
        [new Date(2024, 8, 22), 92],
        [new Date(2024, 8, 29), 106],
        [new Date(2024, 9, 13), 109],
        [new Date(2024, 9, 20), 103],
        [new Date(2024, 9, 27), 127],
        [new Date(2024, 10, 3), 104],
        [new Date(2024, 10, 10), 106],
        [new Date(2024, 10, 17), 117],
        [new Date(2024, 11, 8), 103],
        [new Date(2024, 11, 15), 99],
        [new Date(2024, 11, 22), 105],
        [new Date(2024, 11, 29), 109],
        [new Date(2025, 0, 5), 89],
        [new Date(2025, 0, 12), 102],
        [new Date(2025, 0, 19), 117],
        [new Date(2025, 1, 2), 97],
        [new Date(2025, 1, 23), 105],
        [new Date(2025, 2, 2), 102],
        [new Date(2025, 2, 16), 104],
        [new Date(2025, 2, 23), 108],
        [new Date(2025, 2, 30), 117],
        [new Date(2025, 3, 6), 94],
        [new Date(2025, 3, 13), 126]
    ];

    const chartData = rawData.map(([date, value]) => ({
        x: date,
        y: value
    }));

    const average = rawData.reduce((sum, [, val]) => sum + val, 0) / rawData.length;
    document.getElementById("average").innerText = `Середнє арифметичне: ${average.toFixed(0)} людей на ранковому в неділю.`;

    const config = {
        type: 'line',
        data: {
            datasets: [{
                label: 'Кількість людей',
                data: chartData,
                fill: false,
                borderColor: '#aa8606',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'month',
                        tooltipFormat: 'dd.MM.yyyy',
                        displayFormats: {
                            month: 'MMM yyyy',
                            day: 'dd.MM'
                        }
                    },
                    title: {
                        display: true,
                        text: 'Дата'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Кількість людей'
                    },
                    suggestedMin: 80,
                    suggestedMax: 130,
                    ticks: {
                        stepSize: 10
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    };

    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, config);
});


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

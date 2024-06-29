async function startScreenShare(screenNumber) {
    try {
        const stream = await navigator.mediaDevices.getDisplayMedia({
            video: {
                cursor: "always",
                width: { max: 1920 },
                height: { max: 1080 },
                frameRate: { max: 30 }
            },
            audio: false
        });
        const videoElement = document.getElementById('screen' + screenNumber);
        videoElement.srcObject = stream;
        stream.getVideoTracks()[0].addEventListener('ended', () => {
            videoElement.srcObject = null;
        });
    } catch (err) {
        console.error("Fehler beim Teilen des Bildschirms: ", err);
    }
}

function setMainScreen(screenNumber) {
    hideAllScreens();
    const screen = document.getElementById('screen' + screenNumber);
    screen.style.width = '100%';
    screen.style.height = '100%';
    screen.style.gridRow = '1 / span 2';
    screen.style.gridColumn = '1 / span 2';
    screen.style.display = 'block';
}

function showAllScreens() {
    const screens = document.getElementsByClassName('screen');
    for (let screen of screens) {
        screen.style.width = '100%';
        screen.style.height = '100%';
        screen.style.gridRow = '';
        screen.style.gridColumn = '';
        screen.style.display = 'block';
    }
}

function hideAllScreens() {
    const screens = document.getElementsByClassName('screen');
    for (let screen of screens) {
        screen.style.display = 'none';
    }
}

function showSingleScreen(screenNumber) {
    hideAllScreens();
    const screen = document.getElementById('screen' + screenNumber);
    screen.style.width = '100%';
    screen.style.height = '100%';
    screen.style.gridRow = '1 / span 2';
    screen.style.gridColumn = '1 / span 2';
    screen.style.display = 'block';
}

// Initial setup to display all screens
document.addEventListener('DOMContentLoaded', showAllScreens);


console.log('System: script.js is active.');

const audio = document.getElementById('bgMusic');
const button = document.getElementById('audioToggle');
const statusText = document.getElementById('statusText');
const visualizer = document.getElementById('visualizer');
const vinyls = document.querySelectorAll('.vinyl');

// Initial state: visualizer and vinyls are paused
visualizer.style.display = 'none';
vinyls.forEach(v => v.style.animationPlayState = 'paused');

button.addEventListener('click', () => {
    console.log('User Action: Vibe button clicked.');
    
    if (audio.paused) {
        statusText.innerText = 'Syncing the groove...';
        
        audio.play().then(() => {
            console.log('Success: Audio playing.');
            button.innerText = 'Pause';
            statusText.innerText = 'Now Playing: Yummy Gummy';
            visualizer.style.display = 'flex';
            vinyls.forEach(v => v.style.animationPlayState = 'running');
            
            // Randomly change the background color on play
            const colors = ['#ff00ff', '#00ffff', '#39ff14', '#ffff00'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.querySelector('.psychedelic-bg').style.background = conic-gradient(from 0deg, , #000, );
        }).catch(error => {
            console.error('Error: Playback failed.', error);
            statusText.innerText = 'Error: Check the console.';
            // Fallback for some browsers: try to load the audio first
            audio.load();
            audio.play();
        });
    } else {
        console.log('User Action: Pausing audio.');
        audio.pause();
        button.innerText = 'Vibe!';
        statusText.innerText = 'Music Paused';
        visualizer.style.display = 'none';
        vinyls.forEach(v => v.style.animationPlayState = 'paused');
    }
});

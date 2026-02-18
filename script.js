const audio = document.getElementById('bgMusic');
const button = document.getElementById('audioToggle');
const statusText = document.getElementById('statusText');
const visualizer = document.getElementById('visualizer');
const vinyls = document.querySelectorAll('.vinyl');

// Initial state: visualizer and vinyls are paused
visualizer.style.display = 'none';
vinyls.forEach(v => v.style.animationPlayState = 'paused');

button.addEventListener('click', () => {
    if (audio.paused) {
        statusText.innerText = 'Loading Yummy Gummy...';
        audio.play().then(() => {
            button.innerText = '? STOP THE RHYTHM';
            statusText.innerText = 'Now Playing: Yummy Gummy';
            visualizer.style.display = 'flex';
            vinyls.forEach(v => v.style.animationPlayState = 'running');
            
            // Randomly change the background color on play
            const colors = ['#ff00ff', '#00ffff', '#39ff14', '#ffff00'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.querySelector('.psychedelic-bg').style.background = conic-gradient(from 0deg, , #000, );
        }).catch(error => {
            console.error("Audio playback failed:", error);
            alert("Error: File 'Yummy Gummy.mp3' not found in your project folder!");
            statusText.innerText = 'Error loading file.';
        });
    } else {
        audio.pause();
        button.innerText = '? FEEL THE VIBE';
        statusText.innerText = 'Music Paused';
        visualizer.style.display = 'none';
        vinyls.forEach(v => v.style.animationPlayState = 'paused');
    }
});

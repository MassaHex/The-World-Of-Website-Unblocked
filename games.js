const gameImages = document.querySelectorAll('.game-image');

gameImages.forEach(image => {
    image.addEventListener('click', () => {
        const gameUrl = image.dataset.url;

        // Check if the browser supports the Fullscreen API
        if (document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled) {
            const iframe = document.createElement('iframe');
            iframe.src = gameUrl;
            iframe.style.width = '100vw';
            iframe.style.height = '100vh';
            iframe.style.border = 'none';

            // Request fullscreen for the iframe
            iframe.requestFullscreen().then(() => {
                document.body.appendChild(iframe);
            }).catch(error => {
                console.error('Fullscreen failed:', error);
                // Handle fullscreen failure gracefully, e.g., display an error message or fallback to a non-fullscreen launch
            });
        } else {
            // Handle browsers that don't support the Fullscreen API
            console.warn('Fullscreen API not supported by your browser.');
            // Open the game in a regular window (e.g., `window.open(gameUrl)` or implement a custom modal)
        }
    });
});

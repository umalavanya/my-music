function showFrame(frameId) {
    const iframes = document.querySelectorAll('.display-body iframe');
    iframes.forEach(iframe => {
        if (iframe.id === frameId) {
            iframe.classList.add('active');
        } else {
            iframe.classList.remove('active');
        }
    });
}
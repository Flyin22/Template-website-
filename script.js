document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const scrollAmount = gallery.offsetWidth / 5; // Width of one set of images

    let scrollPosition = 0;

    nextButton.addEventListener('click', () => {
        scrollPosition += scrollAmount;
        if (scrollPosition > gallery.scrollWidth - gallery.clientWidth) {
            scrollPosition = gallery.scrollWidth - gallery.clientWidth;
        }
        gallery.style.transform = `translateX(-${scrollPosition}px)`;
    });

    prevButton.addEventListener('click', () => {
        scrollPosition -= scrollAmount;
        if (scrollPosition < 0) {
            scrollPosition = 0;
        }
        gallery.style.transform = `translateX(-${scrollPosition}px)`;
    });
});



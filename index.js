const galleryImages = document.querySelectorAll('.imageGallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');
const prevBtn = document.querySelector('.prev-lightbox');
const nextBtn = document.querySelector('.next-lightbox');

let currentIndex = 0;

// Open lightbox on image click
galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});

// Close lightbox
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Next button
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    lightboxImg.src = galleryImages[currentIndex].src;
});

// Prev button
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    lightboxImg.src = galleryImages[currentIndex].src;
});

const thumbnails = document.querySelectorAll('.thumbnail');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

let currentImageIndex = 0;
let zoomLevel = 1;

const imageSources = Array.from(thumbnails).map(img => img.src);

// Open lightbox with selected image
thumbnails.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentImageIndex = index;
    showImage();
    lightbox.classList.remove('hidden');
  });
});

function showImage() {
  lightboxImg.src = imageSources[currentImageIndex];
  zoomLevel = 1;
  updateZoom();
}

function closeLightbox() {
  lightbox.classList.add('hidden');
}

// Navigation
function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % imageSources.length;
  showImage();
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + imageSources.length) % imageSources.length;
  showImage();
}

// Zoom
function zoomIn() {
  zoomLevel += 0.1;
  updateZoom();
}

function zoomOut() {
  zoomLevel = Math.max(0.1, zoomLevel - 0.1);
  updateZoom();
}

function updateZoom() {
  lightboxImg.style.transform = `scale(${zoomLevel})`;
}

// Download
function downloadImage() {
  const link = document.createElement('a');
  link.href = imageSources[currentImageIndex];
  link.download = `image-${currentImageIndex + 1}.jpg`;
  link.click();
}

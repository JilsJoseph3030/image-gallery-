// Array of reliable stock image URLs (Pexels)
const images = [
  "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg", // Mountain
  "https://images.pexels.com/photos/34950/pexels-photo.jpg",          // Forest
  "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg", // Beach
  "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg", // City skyline
  "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg", // Desert
  "https://images.pexels.com/photos/355241/pexels-photo-355241.jpeg", // Lake
  "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg", // Autumn forest
  "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg", // Snow mountain
  "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg"  // Path in woods
];

const gallery = document.getElementById("gallery");
const shuffleBtn = document.getElementById("shuffleBtn");

// Lightbox elements
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("closeBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentIndex = 0;

// Function to display images in gallery (with click events)
function displayImages(imgArray) {
  gallery.innerHTML = "";
  imgArray.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.loading = "lazy";
    img.addEventListener("click", () => openLightbox(index));
    gallery.appendChild(img);
  });
}

// Shuffle function
function shuffleImages() {
  const shuffled = [...images].sort(() => Math.random() - 0.5);
  displayImages(shuffled);
}

// Lightbox functions
function openLightbox(index) {
  currentIndex = index;
  lightboxImg.src = images[currentIndex];
  lightbox.classList.remove("hidden");
}

function closeLightbox() {
  lightbox.classList.add("hidden");
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex];
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex];
}

// Event listeners
shuffleBtn.addEventListener("click", shuffleImages);
closeBtn.addEventListener("click", closeLightbox);
nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrev);

// ✅ Initial load with click events
displayImages(images);

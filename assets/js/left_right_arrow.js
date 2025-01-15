// Initialize automatic scroll interval
let autoScrollInterval;
const autoScrollDelay = 3000; // 3 seconds

// Function to scroll right
function scrollRight() {
  const container = document.querySelector('.scroll-container');
  if (container) {
    const itemWidth = container.querySelector('.service-item').offsetWidth + 10; // Include margin
    container.scrollBy({ left: itemWidth, behavior: 'smooth' });
  }
}

// Function to scroll left
function scrollLeftCustom() {
  const container = document.querySelector('.scroll-container');
  if (container) {
    const itemWidth = container.querySelector('.service-item').offsetWidth + 10; // Include margin
    console.log('Left scroll triggered', itemWidth);
    container.scrollBy({ left: -itemWidth, behavior: 'smooth' });
  } 
}

// Function to handle keyboard events
function handleArrowKeys(event) {
  if (event.key === 'ArrowRight') {
    scrollRight();
  } else if (event.key === 'ArrowLeft') {
    scrollLeftCustom();
  }
}

// Function to start automatic scrolling
function startAutoScroll() {
  autoScrollInterval = setInterval(scrollRight, autoScrollDelay);
}

// Function to stop automatic scrolling
function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

// Attach event listeners
document.addEventListener('keydown', handleArrowKeys);
document.querySelector('.scroll-container').addEventListener('mouseover', stopAutoScroll);
document.querySelector('.scroll-container').addEventListener('mouseout', startAutoScroll);

// Start auto-scroll on page load
startAutoScroll();

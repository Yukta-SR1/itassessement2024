// banner-slider.js
document.addEventListener('DOMContentLoaded', function() {
    // Get slider elements
    const slider = document.getElementById('bannerSlider');
    const slides = document.querySelectorAll('.banner-slide');
    const prevBtn = document.getElementById('bannerPrevBtn');
    const nextBtn = document.getElementById('bannerNextBtn');
    const indicatorsContainer = document.getElementById('bannerIndicators');
    
    // Set up initial state
    let currentIndex = 0;
    const totalSlides = slides.length;
    
    // Create indicators
    function createIndicators() {
      for (let i = 0; i < totalSlides; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('banner-indicator');
        if (i === 0) {
          indicator.classList.add('active');
        }
        indicator.dataset.index = i;
        indicator.addEventListener('click', function() {
          goToSlide(parseInt(this.dataset.index));
        });
        indicatorsContainer.appendChild(indicator);
      }
    }
    
    // slider position
    function updateSlider() {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // indicators
      const indicators = document.querySelectorAll('.banner-indicator');
      indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
          indicator.classList.add('active');
        } else {
          indicator.classList.remove('active');
        }
      });
    }
    
    // Go to a specific slide
    function goToSlide(index) {
      currentIndex = index;
      updateSlider();
    }
    
    // Next slide
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
    }
    
    // Previous slide
    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlider();
    }
    
    // Event listeners for buttons
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Initialize indicators
    createIndicators();
    
  });
  document.getElementById("bookAppointmentBtn").addEventListener("click", function() {
    // Prompt user for patient details
    alert("You will be directed to sevices page to book an appointment.");
});

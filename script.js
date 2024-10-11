let slideIndex = 0;
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");

// Automatic Slideshow
function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, 4000); // Change image every 4 seconds
}

// Manual Slide Navigation
function currentSlide(n) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[n - 1].style.display = "block";
    dots[n - 1].className += " active";

    slideIndex = n;
}

// Initialize slideshow and dot navigation
document.addEventListener("DOMContentLoaded", () => {
    showSlides(); // Start the automatic slideshow

    // Add event listeners to dots for manual navigation
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", () => {
            const slideNumber = parseInt(dots[i].getAttribute("data-slide"));
            currentSlide(slideNumber);
        });
    }
});

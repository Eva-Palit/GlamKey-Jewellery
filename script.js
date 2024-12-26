
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');


function changeSlide(direction) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}


// Auto-slide every 5 seconds
setInterval(() => changeSlide(1), 5000);



function openChat() {
    document.getElementById("chatbox").style.display = "flex";
}

function closeChat() {
    document.getElementById("chatbox").style.display = "none";
}

// Optional: Handle form submission
document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    document.getElementById("messageForm").reset();
    closeChat();
});
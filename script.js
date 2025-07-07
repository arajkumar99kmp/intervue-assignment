// Add interactivity for FAQ items
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const icon = this.querySelector('span');
        icon.textContent = icon.textContent === '+' ? '-' : '+';
    });
});


  function playVideoWithSound() {
    const video = document.getElementById("myVideo");
    video.muted = false;       // Enable sound
    video.play();              // Play the video
  }

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('.nav');

mobileMenuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
    
    // Toggle aria-expanded attribute for accessibility
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
});

// Close menu when clicking on a link (optional)
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            nav.classList.remove('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
        }
    });
});

// FAQ interactivity (existing code)
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const icon = this.querySelector('span');
        icon.textContent = icon.textContent === '+' ? '-' : '+';
    });
});

function playVideoWithSound() {
    const video = document.getElementById("myVideo");
    video.muted = false;
    video.play();
}
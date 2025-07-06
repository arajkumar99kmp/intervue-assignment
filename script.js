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



// contact form fillup

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Message sent successfully! We'll contact you soon.");
      contactForm.reset();
    });
  }
});



// dark mode toggle

const toggleBtn = document.getElementById('darkModeToggle');
toggleBtn.addEventListener('click' , () => {
    document.body.classList.toggle('dark-mode');
});
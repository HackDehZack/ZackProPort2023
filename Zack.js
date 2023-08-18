// Get all the navigation links with the class 'nav-link'
const navLinks = document.querySelectorAll('nav a');

// Add event listeners to each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    document.body.style.backgroundColor = getRandomColor();
  });

// Get all the navigation links with the class 'nav-link'
const navLinks = document.querySelectorAll('nav a');

// Add event listeners to each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const targetSection = document.querySelector(link.getAttribute('href'));
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

  link.addEventListener('mouseout', (event) => {
    const flashWarning = link.querySelector('.flash-warning');
    if (flashWarning) {
      flashWarning.remove();
    }
  });
});

// Helper function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
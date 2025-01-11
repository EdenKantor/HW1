// Form validation function
function validateAndProceed() {
  // Get input values
  const age = document.getElementById('age').value;
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;

  // Get error elements
  const ageError = document.getElementById('age-error');
  const heightError = document.getElementById('height-error');
  const weightError = document.getElementById('weight-error');


  
  // Validate inputs
  let valid = true;

  // Age validation
  if (!age || age < 1 || age > 200  ||  isNaN(age)) {
    ageError.style.display = 'block';
    valid = false;
  } else {
    ageError.style.display = 'none';
  }

  // Height validation
  if (!height || height < 80 || height > 300 || isNaN(height)) {
    heightError.style.display = 'block';
    valid = false;
  } else {
    heightError.style.display = 'none';
  }

  // Weight validation
  if (!weight || weight < 5 || weight > 200 || isNaN(weight)) {
    weightError.style.display = 'block';
    valid = false;
  } else {
    weightError.style.display = 'none';
  }

  // If all inputs are valid, navigate to the next page
  if (valid) {
    window.location.href = 'RegInfo.html';
  }
}

const html = document.documentElement;
const themeToggleButton = document.getElementById('toggle-theme');

tailwind.config = {
  darkMode: 'class',
};

if (localStorage.getItem('theme') === 'dark') {
  html.classList.add('dark');
}

// Toggle dark mode and save preference in localStorage
themeToggleButton.addEventListener('click', () => {
  html.classList.toggle('dark');
  // Save the theme preference to localStorage
  if (html.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

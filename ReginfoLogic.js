// Form validation logic
const nextBtn = document.getElementById('next-btn');
const username = document.getElementById('username');
const confirmUsername = document.getElementById('confirm-username');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const errorMessage = document.getElementById('error-message');
const html = document.documentElement;
const themeToggleButton = document.getElementById('toggle-theme');

// Tailwind's CDN configuration to enable dark mode
tailwind.config = {
  darkMode: 'class',
};

// Set the initial theme based on localStorage if it exists
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

// Add event listener for form input change
[username, confirmUsername, password, confirmPassword].forEach(input => {
  input.addEventListener('input', validateForm);
});

function validateForm() {
  let errorText = "";

  // Check if fields are empty
  if (username.value === '' || confirmUsername.value === '' || password.value === '' || confirmPassword.value === '') {
    errorText = "All fields are required.";
  }

  // Check if username and confirm username match
  else if (username.value !== confirmUsername.value) {
    errorText = "Usernames do not match.";
  }

  // Check if password and confirm password match
  else if (password.value !== confirmPassword.value) {
    errorText = "Passwords do not match.";
  }

  // Display error message if there is an error
  if (errorText) {
    nextBtn.disabled = true;
    nextBtn.classList.remove('bg-green-400', 'hover:bg-green-500');
    nextBtn.classList.add('bg-gray-400', 'cursor-not-allowed');
    errorMessage.textContent = errorText;
    errorMessage.classList.remove('hidden');
  } else {
    // If all conditions are met, enable the Next button
    nextBtn.disabled = false;
    nextBtn.classList.remove('bg-gray-400', 'cursor-not-allowed');
    nextBtn.classList.add('bg-green-400', 'hover:bg-green-500');
    errorMessage.classList.add('hidden');
  }
}

// Redirect to AlmostThere.html when Next button is clicked
nextBtn.addEventListener('click', function() {
  if (!nextBtn.disabled) {
    window.location.href = 'AlmostThere.html';
  }
});

// Toggle visibility for password fields
const togglePassword = document.getElementById('toggle-password');
const toggleConfirmPassword = document.getElementById('toggle-confirm-password');
const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirm-password');

togglePassword.addEventListener('click', () => {
  const type = passwordField.type === 'password' ? 'text' : 'password';
  passwordField.type = type;
  togglePassword.querySelector('i').classList.toggle('fa-eye');
  togglePassword.querySelector('i').classList.toggle('fa-eye-slash');
});

toggleConfirmPassword.addEventListener('click', () => {
  const type = confirmPasswordField.type === 'password' ? 'text' : 'password';
  confirmPasswordField.type = type;
  toggleConfirmPassword.querySelector('i').classList.toggle('fa-eye');
  toggleConfirmPassword.querySelector('i').classList.toggle('fa-eye-slash');
});

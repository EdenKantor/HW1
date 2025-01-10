// Form validation and toggle password visibility logic
const html = document.documentElement;
const themeToggleButton = document.getElementById('toggle-theme');
const togglePassword = document.getElementById('toggle-password');
const passwordField = document.getElementById('password');
const errorMessage = document.getElementById('message');

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

// Toggle password visibility
togglePassword.addEventListener('click', () => {
  const type = passwordField.type === 'password' ? 'text' : 'password';
  passwordField.type = type;
  togglePassword.querySelector('i').classList.toggle('fa-eye');
  togglePassword.querySelector('i').classList.toggle('fa-eye-slash');
});

// Fake login validation logic
const handleLogin = (event) => {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const message = document.getElementById('message');
  const FAKE_USERNAME = 'user';
  const FAKE_PASSWORD = 'user';
  const ADMIN_USERNAME = 'admin';
  const ADMIN_PASSWORD = 'admin';

  if (username === FAKE_USERNAME && password === FAKE_PASSWORD) {
    message.textContent = 'Login successful!';
    message.classList.remove('text-red-500');
    message.classList.add('text-green-500');
    
    // Redirect to HomePage.html after successful login
    window.location.href = 'HomePage.html'; // Direct redirection instead of setTimeout
  }
  else if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    message.textContent = 'Login successful!';
    message.classList.remove('text-red-500');
    message.classList.add('text-green-500'); 
    window.location.href = 'AdminNevigation.html'; 
  } else {
    message.textContent = 'Invalid username or password.';
    message.classList.remove('text-green-500');
    message.classList.add('text-red-500');
  }
};

// Initialize the login logic
const initLoginPage = () => {
  document.querySelector('#login-button').addEventListener('click', handleLogin); // Attach login handler to the login button
};

// Call initLoginPage on script load
window.onload = initLoginPage;
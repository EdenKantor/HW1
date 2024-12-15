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
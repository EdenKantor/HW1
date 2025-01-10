const genderDropdownMenu = document.getElementById('gender-dropdown-menu');
const toggleDropdownGender = document.getElementById('toggle-dropdown-gender');
const selectedGender = document.getElementById("selected-gender");
const nextBtn = document.getElementById('next-btn');
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

// Toggle gender dropdown visibility
toggleDropdownGender.addEventListener('click', () => {
  genderDropdownMenu.classList.toggle('hidden');
});

// Select gender and enable the next button
function selectGender(gender) {
  selectedGender.textContent = gender;
  genderDropdownMenu.classList.add('hidden');
  enableNextButton();
}

function enableNextButton() {
  nextBtn.disabled = false;
  nextBtn.classList.remove("bg-gray-400", "cursor-not-allowed");
  nextBtn.classList.add("bg-green-400", "hover:bg-green-500", "cursor-pointer");
  nextBtn.addEventListener("click", () => {
    window.location.href = "AgeWeightHeight.html";
  });
}

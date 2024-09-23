// navbar.js

// Function to load and inject the navbar HTML
function loadNavbar() {
  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-container").innerHTML = data;
      attachMenuListeners(); // Attach the menu functionality after loading
    });
}

// Function to handle menu toggle functionality
function attachMenuListeners() {
  const navBtn = document.getElementById("nav-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");
  const tilesArrow = document.getElementById("tiles-arrow");
  const tilesSubmenu = document.getElementById("tiles-submenu");

  // Toggle mobile menu
  navBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("-translate-x-full");
    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  });

  // Submenu toggle
  tilesArrow.addEventListener("click", () => {
    tilesSubmenu.classList.toggle("hidden");
  });

  // Close mobile menu
  const mobileClose = document.getElementById("mobile-close");
  mobileClose.addEventListener("click", () => {
    mobileMenu.classList.add("-translate-x-full");
    menuIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  });
}

// Call the loadNavbar function to inject the navbar
document.addEventListener("DOMContentLoaded", loadNavbar);

// navbar.js

// Function to load and inject the navbar HTML
function loadNavbar() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            console.log(document.getElementById('navbar-container'));
            document.getElementById('navbar-container').innerHTML = data;
            attachMenuListeners(); // Attach the menu functionality after loading
        });
}

// Function to handle menu toggle functionality
function attachMenuListeners() {
    const navBtn = document.getElementById('nav-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const tilesDiv = document.querySelector("#tiles-arrow").parentElement;
    const tilesArrow = document.getElementById('tiles-arrow');
    const tilesSubmenu = document.getElementById('tiles-submenu');
    const subCatDiv = document.querySelector("#subcat-arrow").parentElement;
    const tilesSubSubmenu = document.getElementById('tiles-sub-submenu');
    const subCatArrow = document.getElementById('subcat-arrow');
    // Toggle mobile menu
    navBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('-translate-x-full');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });

    tilesDiv.addEventListener('click', () => {
        tilesSubmenu.classList.toggle('hidden'); // Show/hide the Tiles submenu
        tilesArrow.classList.toggle('rotate-90'); // Rotate the arrow when toggled
    });

    // Toggle for Nano submenu (click anywhere on the div)
    subCatDiv.addEventListener('click', () => {
        tilesSubSubmenu.classList.toggle('hidden'); // Show/hide the Nano submenu
        subCatArrow.classList.toggle('rotate-90'); // Rotate the Nano arrow
    });

    // // Submenu toggle
    // tilesArrow.addEventListener('click', () => {
    //     tilesSubmenu.classList.toggle('hidden');
    // });
    //
    // subCatArrow.addEventListener('click', () => {
    //     tilesSubSubmenu.classList.toggle('hidden');
    // });



    // Close mobile menu
    const mobileClose = document.getElementById('mobile-close');
    mobileClose.addEventListener('click', () => {
        mobileMenu.classList.add('-translate-x-full');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');

        // Hide all submenus when closing
        tilesSubmenu.classList.add('hidden');
        tilesSubSubmenu.classList.add('hidden');
    });
}

// Call the loadNavbar function to inject the navbar
document.addEventListener('DOMContentLoaded', loadNavbar);

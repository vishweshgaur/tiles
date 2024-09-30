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
    // const subCatDiv = document.querySelector("#subcat-arrow").parentElement;
    const tilesSubSubmenu = document.getElementById('tiles-sub-submenu');
    // const subCatArrow = document.getElementById('subcat-arrow');
    // Toggle mobile menu
    navBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('-translate-x-full');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });

    document.getElementById('mobile-close').addEventListener('click', function() {
        document.getElementById('mobile-menu').classList.add('-translate-x-full');  // Close mobile menu
    });

// Function to handle 'Tiles' submenu toggle
    document.getElementById('tiles-div').addEventListener('click', function() {
        const submenu = document.getElementById('tiles-submenu');
        const arrow = document.getElementById('tiles-arrow');

        // Toggle submenu visibility
        submenu.classList.toggle('hidden');

        // Rotate the arrow
        arrow.classList.toggle('rotate-90');
    });

// Function to handle individual tile item (e.g., 'Nano') submenu toggle
    document.querySelectorAll('.tile-item').forEach(item => {
        item.addEventListener('click', function(event) {
            const tileType = this.getAttribute('data-tile');
            const submenu = document.getElementById(`${tileType}-submenu`);
            const arrow = document.getElementById(`${tileType}-subcat-arrow`);

            // Toggle submenu visibility
            submenu.classList.toggle('hidden');

            // Rotate the arrow
            arrow.classList.toggle('rotate-90');

            // Prevent click from closing parent menus
            event.stopPropagation();
        });
    });

    // // Toggle for Nano submenu (click anywhere on the div)
    // subCatDiv.addEventListener('click', () => {
    //     tilesSubSubmenu.classList.toggle('hidden'); // Show/hide the Nano submenu
    //     subCatArrow.classList.toggle('rotate-90'); // Rotate the Nano arrow
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
const style = document.createElement('style');
style.textContent = `
  .dropdown-content, .sub-dropdown-content {
            display: none;
        }
        .group:hover > .dropdown-content,
        .submenu:hover > .sub-dropdown-content {
            display: block;
        }
`;
document.head.appendChild(style);

// Call the loadNavbar function to inject the navbar
document.addEventListener('DOMContentLoaded', loadNavbar);

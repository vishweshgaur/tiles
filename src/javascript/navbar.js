// Fetches and loads the navbar into the #navbar-container element
function loadNavbar() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
            // Add event listener for the hamburger menu after loading the navbar
            // document.querySelector('.hamburger').addEventListener('click', toggleMenu);
        })
        .catch(error => console.error('Error loading navbar:', error));
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    if(!navLinks.classList.contains("active")){
    navLinks.classList.add('active');
    }
    else{
        navLinks.classList.remove('active');
    }
}


// Call the function to load the navbar
loadNavbar();

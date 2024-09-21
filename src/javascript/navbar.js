const handleNav = (e) => {
    e.preventDefault();
    const navlinks = document.getElementById("navbar-links")
    navlinks.classList.toggle("hidden")
}
document.getElementById("nav-btn").addEventListener("click", handleNav);
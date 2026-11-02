// Get the hamburger button and navigation menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Open or close the mobile navigation menu
menuToggle.addEventListener("click", function () {

    // Toggle the show class
    navLinks.classList.toggle("show");

    // Check whether the menu is open
    const isOpen = navLinks.classList.contains("show");

    // Update accessibility information
    menuToggle.setAttribute("aria-expanded", isOpen);

    // Change hamburger icon to close icon
    menuToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
});

// Close the menu after clicking a navigation link
navLinks.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {
        navLinks.classList.remove("show");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });

});
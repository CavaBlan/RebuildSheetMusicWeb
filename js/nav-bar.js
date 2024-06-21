// Get all navigation links
var navLinks = document.querySelectorAll(".nav-bar-classes a");

function toggleSubMenu(e) {
    //Prevents the default behavior of <a>
    e.preventDefault();

    var clickedLink = e.target;
    var linkId = e.target.id;
    var subMenuId = linkId.replace("-link", "-sub");
    var subMenu = document.getElementById(subMenuId);

    var allSubMenus = document.querySelectorAll(".sub-menu");

    // Check if the currient link is highlight
    var isActive = clickedLink.classList.contains("active");

    // Unhighlight all navigation links
    navLinks.forEach(function (link) {
        link.classList.remove("active");
    });

    if (!isActive) {
        // If it is not highlight
        // show the submenu and add highlight
        allSubMenus.forEach(function (menu) {
            menu.classList.add("hidden");
        });
        subMenu.classList.remove("hidden");
        // Set currient link to highlight
        clickedLink.classList.add("active"); 
    } else {
        // If it is highlight
        // Hide the submenu and remove highlight
        subMenu.classList.add("hidden");
        clickedLink.classList.remove("active");
    }
}

// Add event listener to navigation links
navLinks.forEach(function (link) {
    var linkId = link.id;
    if (linkId.endsWith("-link")) {
        link.addEventListener("click", toggleSubMenu);
    }
});
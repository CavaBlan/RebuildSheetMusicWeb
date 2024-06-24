// Sorry, I wrote this JS using methods from many years ago

// Show submenu
// function showSubMenu(subMenuId) {
//     var subMenu = document.getElementById(subMenuId);
//     subMenu.classList.remove("hidden"); 
// }

// Hide submenu
// function hideSubMenu(subMenuId) {
//     var subMenu = document.getElementById(subMenuId);
//     subMenu.classList.add("hidden"); 
// }

var navLinks = document.querySelectorAll(".nav-bar-classes a");

function handleMouseOver(e){
    e.preventDefault();
    var linkId = e.target.id;
    var subMenuId = linkId.replace("-link", "-sub");
    showSubMenu(subMenuId);
}

function handleMouseOut(e){
    var linkId = e.target.id;
    var subMenuId = linkId.replace("-link", "-sub");
    hideSubMenu(subMenuId);
}


// Show submenu
function showSubMenu(subMenuId){
    var subMenu = document.getElementById(subMenuId);
    subMenu.classList.remove("hidden");
}

// Hide submenu
function hideSubMenu(subMenuId){
    var subMenu = document.getElementById(subMenuId);
    subMenu.classList.add("hidden");
}

navLinks.forEach(function(link){
    var linkId = link.id;

    if(linkId.endsWith("-link")){
        
        link.addEventListener("mouseover", handleMouseOver);
        link.addEventListener("mouseout", handleMouseOut);
    }
});
document.addEventListener('DOMContentLoaded', function() { //this event listener is basically for collapsible sections. it finds every page with the infobox class and loops to add the click eventlistener.
    var outsideTheBox = document.querySelectorAll(".infoBox");

        for (var i = 0; i < outsideTheBox.length; i++) {
            outsideTheBox[i].addEventListener("click", function() {
            this.classList.toggle("active");

            var content = this.querySelector(".infoContent"); //when the user clicks the infoBox class, it removes or adds the active on the box, and looks for infoContent. if its open it sets max heigh to null to hide it, else it sets maxHeight to element's scroll height, showign the text

                if (content){
                    if(content.style.maxHeight){
                            content.style.maxHeight = null;
                    } 
                    else {
                        content.style.maxHeight = content.scrollHeight + "px";
                    } 
                }
            });
        }
});

const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    
    if (sidebar.classList.contains('active')) {
        menuToggle.innerHTML = '✕';
    } else {
        menuToggle.innerHTML = '☰';
    }
});

// Close sidebar if a link is clicked 
const navLinks = document.querySelectorAll('.sidebar ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('active');
        menuToggle.innerHTML = '☰';
    });
});
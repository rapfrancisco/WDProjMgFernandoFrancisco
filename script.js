document.addEventListener('keydown', function(event) {
        if (event.shiftKey) {

            if(['b','h','e','m','r','t','p','u'].includes(event.key.toLowerCase())){
                event.preventDefault();
            }

            switch(event.key.toLowerCase()) {
                 /*Navigation Hotkeys, these are like a fast travel way if you dont want to use 
                 the sidebar. when u combine shift and a key, you can navigate to different places
                 Right now this is for the public folder files while the js for the index is saved as
                 an internal js. since i dont have much time and the folders are already there, i cant
                 really think of a better way, sorry*/
                case 'b': window.location.href = 'index.html'; break;
                case 'h': window.location.href = 'History_Of_Origami.html'; break;
                case 'e': window.location.href = 'Origami_Exhibit.html'; break;
                case 'm': window.location.href = 'Folding_In_Origami.html'; break;
                case 'r': window.location.href = 'References&Resources.html'; break;
                               
                /*Theme and Music Hotkeys; MORE COMPLEX JS REQUIRED AND WILL NOT BE FINISHED*/
                case "t": toggleTheme(); break;
                case "p": break;
                case "u": break;

                default: break;
            }
        }
    });

    function toggleTheme() {
        const useButton = document.getElementById('toggleTheme');
        const body = document.body;

        useButton.addEventListener('click', () => {
            if(body.getAttribute('data-theme') === 'dark') {
                body.removeAttribute('data-theme');
                useButton.textContent = 'Toggle Dark Mode'; 
            }
            else {
                body.setAttribute('data-theme','dark');
                useButton.textContent = 'Toggle Light Mode';
            }
        });
    }

        document.addEventListener('DOMContentLoaded', function() {

                    var outsideTheBox = document.querySelectorAll(".infoBox");

                    for (var i = 0; i < outsideTheBox.length; i++) {
                    outsideTheBox[i].addEventListener("click", function() {
                    this.classList.toggle("active");

                    var content = this.querySelector(".infoContent");

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

//Preferences html

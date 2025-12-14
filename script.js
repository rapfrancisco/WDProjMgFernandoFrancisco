document.addEventListener('keydown', function(event) {
        if (event.shiftKey) {
            switch(event.key.toLowerCase()) {
                 /*Navigation Hotkeys*/
                case 'b': window.location.href = '/index.html'; break;
                case 'h': window.location.href = "..public/History_Of_Origami"; break;
                case 'e': window.location.href = '#exhibit'; break;
                case 'm': window.location.href = '#folds'; break;
                case 'r': window.location.href = '#references'; break;
                               
                /*Theme and Music Hotkeys; MORE COMPLEX JS REQUIRED*/
                case "t": toggleTheme(); break;
                case "p": break;
                case "u": break;

                default: break;
            }
        }
    });
    function toggleTheme() {
        const body = document.body;
        const current = body.getAttribute('data-theme');
        const newTheme = current === 'dark' ? 'light' : 'dark';
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        window.addEventListener('load', () => {
        const saved = localStorage.getItem('theme');
        if (saved) document.body.setAttribute('data-theme', saved);
        });
        }
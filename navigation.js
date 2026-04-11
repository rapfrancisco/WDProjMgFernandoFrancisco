document.addEventListener('keydown', function(event) {
    if (event.shiftKey) {

        if(['b','h','e','m','r'].includes(event.key.toLowerCase())){
            event.preventDefault();
        }

        switch(event.key.toLowerCase()) {
            case 'b': window.location.href = 'index.html'; break;
            case 'h': window.location.href = 'History_Of_Origami.html'; break;
            case 'e': window.location.href = 'Origami_Exhibit.html'; break;
            case 'm': window.location.href = 'Folding_In_Origami.html'; break;
            case 'r': window.location.href = 'References&Resources.html'; break;
            //new hotkeys for different locations to be inputted on a later date
            default: break;
            }
        }
    });

    function backToPref(){
        window.location.href = "Preferences_Forum.html";
    }
    function sendToFoldingInOri(){
        window.location.href = "Calm.html"; //sent to calm
    }
    function sendToRecommendations(){
        window.location.href = "Recommendations.html"; //send to recommendations
    }
    function willReset(){
        if(confirm("Are you sure you want to reset your preferences")){//confirm to reset?
        localStorage.removeItem('userPreferences');
        window.location.href="Preferences_Forum.html";
        }
    }

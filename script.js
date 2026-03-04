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
                    
const tutorials = [
/* This is an array containing objects on each tutorial. They are divided into 3 main groups (animals, plants and geometric), and are further
divided into difficulties of beginner, intermediate and advanced. their properties also contain the title, estimated time for completeion, and links (which are sited in references.html already) */
    // Animals
    {
        title: "Origami Crab",
        level: "Beginner",
        category: "Animals",
        time: "~8 minutes",
        link: "https://www.youtube.com/watch?v=dMt7Glzlvv8"
    },
    {
        title: "Origami Fox",
        level: "Intermediate",
        category: "Animals",
        time: "~15 minutes",
        link: "https://www.youtube.com/watch?v=BPSh5r2xF_U"
    },
    {
        title: "Origami Dragon",
        level: "Advanced",
        category: "Animals",
        time: "~40 minutes",
        link: "https://www.youtube.com/watch?v=kUsxMXwCW8A"
    },

    // Geometric
    {
        title: "Origami 3D Triangle",
        level: "Beginner",
        category: "Geometric",
        time: "~3 minutes",
        link: "https://www.youtube.com/shorts/0OargI55kV0"
    },
    {
        title: "Origami Tetragonal Crystal",
        level: "Intermediate",
        category: "Geometric",
        time: "~9 minutes",
        link: "https://www.youtube.com/watch?v=UGpwj0kSfTw"
    },
    {
        title: "Origami Hydrangea (Shuzo Fujimoto)",
        level: "Advanced",
        category: "Geometric",
        time: "~30 minutes",
        link: "https://www.youtube.com/watch?v=8fUsuU73Rbg"
    },

    // Plants
    {
        title: "Origami Venus Fly Trap",
        level: "Beginner",
        category: "Plants",
        time: "~2 minutes",
        link: "https://www.youtube.com/shorts/NWliaVY9gYU"
    },
    {
        title: "Origami Lotus Flower",
        level: "Intermediate",
        category: "Plants",
        time: "~18 minutes",
        link: "https://www.youtube.com/watch?v=-mKRKSCn3qg"
    },
    {
        title: "Origami Kawasaki Rose",
        level: "Advanced",
        category: "Plants",
        time: "~30 minutes",
        link: "https://www.youtube.com/watch?v=MJF4St32-wY"
    }
];

//declaration of html elemnts with ids to be set to certain variables. each would be used for certain parts of the calm.html and recommendations html.
const audio = document.getElementById('bgAudio');

if(audio){
    audio.loop = true;
}

const musicSelect = document.getElementById('chosenMusic'); 
const volumeSlider = document.getElementById('volumeRange');
const sessionInput = document.getElementById('sessionTime');
const quoteDisplay = document.getElementById('displayQuote');
const musicForm = document.getElementById('musicForm');
let timerInt;
const quotes = [ //an array of quotes that would be displayed in the relax.html 
    "You can’t use up creativity. The more you use, the more you have. - Angelou, M.",
    "Creativity takes courage. - Matisse, H.",
    "Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome. - Washington, B. T.",
    "Despite everything, it's still you! - Undertale"

];

function quoteDisplayFunc(){ //this essentially picks a random quote and uses a randomizer to generate a valid index and display the quote
    
    if(quoteDisplay){
        const random = quotes[Math.floor(Math.random()*quotes.length)];
        quoteDisplay.textContent = random;
    }
}

setInterval(quoteDisplayFunc, 300000); //trigger quote change every 5 seconds
quoteDisplayFunc();//run function

function getMusicFile(opt){ //this function has a switch statement that sets the chosen music the user wants to play
    switch(opt){
        case 'lofi': return 'lofi-chill.mp3';
        case 'ambiance': return 'ambiance-bird.wav';
        case 'classical': return 'classical-rave.wav';
        case 'ost': return 'ost-ut.mp3';
        case 'instrumental': return 'instrumental-beats.mp3';
        case 'none': return '';
        default: return ''
        }
    }

function loadPreferences() {
    const savedMusic = localStorage.getItem('music') || 'none';
    const savedVolume = localStorage.getItem('volume') || 50;
    const savedSession = localStorage.getItem('session') || 30;
    const stored = localStorage.getItem('userPreferences');

    if(stored){
        const prefs = JSON.parse(stored);

        if (musicSelect) musicSelect.value = prefs.musicPreference; //update elements to have their values
        if (volumeSlider) volumeSlider.value = prefs.volume;
        if (sessionInput) sessionInput.value = prefs.session;

        const difRad = document.querySelector(`input[name="difficulty"][value="${prefs.difficulty}"]`);
        if (difRad) difRad.checked=true;

        if(prefs.interests && Array.isArray(prefs.interests)) {
            prefs.interests.forEach(val => {
                const checkbox = document.querySelector(`input[value="${val}"]`);
                if(checkbox) checkbox.checked=true;
        });

        }

    const musicFile = getMusicFile(prefs.musicPreference);
    if(audio && musicFile){ //apply audio settings
        audio.src = musicFile;
        audio.volume = savedVolume / 100;

    }
    
    }
}
if(musicSelect){
musicSelect.addEventListener('change', () => {
    const selected = musicSelect.value;
    const musicFile = getMusicFile(selected);

    localStorage.setItem('music', selected);

    if (musicFile){
        audio.src = musicFile;
        audio.play();
    }
    else{
        audio.pause();
        audio.src="";
    }

    if (typeof startTimer === "function"){
        startTimer();
    }
    else {
        console.warn("Function not defined.");
    }
});
}

if(volumeSlider){
    volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value / 100;
    localStorage.setItem('volume', volumeSlider.value);
});
}

loadPreferences();

function sixSeven(event){ //function is named sixSeven, deal with it. 
        event.preventDefault(); //prevent refresh

    if(!confirm("Are you sure you want to submit your preferences?")){ //confirm to submit?
        return false;
    }
    const checkedValues = (name) => {
        const checkedBoxes = document.querySelectorAll(`input[name="${name}"]:checked`);
        return Array.from(checkedBoxes).map(box => box.value);
    };

    const preferences = {

        //grabs one checked value from difficulty radio
        difficulty: document.querySelector('input[name="difficulty"]:checked') ?.value || "not selected",
        interests: [].concat( //merge all checked values to one array
            ...checkedValues('animals'),
            ...checkedValues('geometric'),
            ...checkedValues('plants'),
        ),


        musicPreference: musicSelect.value,
        volume: volumeSlider.value,
        session: sessionInput.value

        };

        //save everything
        localStorage.setItem('userPreferences', JSON.stringify(preferences)); //save new info to local storage as string
        localStorage.setItem('music', preferences.musicPreference);
        localStorage.setItem('volume', volumeSlider.value);
        localStorage.setItem('session', sessionInput.value);

        audio.src = getMusicFile(preferences.musicPreference);
        audio.volume = preferences.volume / 100;
        if(audio.src) audio.play();

        quoteDisplayFunc();
                        
        alert("Preferences saved successfully!");
    }
        
    if(musicForm){
        musicForm.addEventListener('submit', sixSeven);
    }

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

    function startTimer() {
        clearInterval(timerInt);
        let minutes = parseInt(sessionInput.value, 10) || 30;
        let seconds = minutes * 60;
        let timerDisplay = document.getElementById('sessionTimer');
        if (!timerDisplay) {
            timerDisplay = document.createElement('p');
            timerDisplay.id = 'sessionTimer';
            document.body.appendChild(timerDisplay);
        }
        timerInt = setInterval (() => {
            const m = Math.floor(seconds / 60);
            const s = seconds % 60;

            timerDisplay.textContent = `Time left: ${m}m ${String(s).padStart(2, '0')}s`;

            if(seconds < 0){
                clearInterval(timerInt);
                alert("Session ended. Take a break or start another session.");
            }
            seconds--;
        },1000);
    }

    function loadRecommendations() {
        const stored = localStorage.getItem("userPreferences");
        if (!stored) {
            alert("Please set your preferences first.");
            return;
        }

        const prefs = JSON.parse(stored);

        if(typeof tutorials !== 'undefined'){
            const filtered = tutorials.filter(tutorial => {
                return tutorial.level === prefs.difficulty && prefs.interests.includes(tutorial.category);
            });
        displayTutorials(filtered);
        }
    }


    function displayTutorials(list) {
        const container = document.getElementById("woahRecoms");
        container.innerHTML = "";

        if (list.length === 0) {
            container.innerHTML = "<p>No matching tutorials found.</p>";
            return;
    }

    list.forEach(tutorial => {

        const card = document.createElement("div");
        card.classList.add("divFeature");

        card.innerHTML = `
            <h3>${tutorial.title}</h3>
            <p><strong>Level:</strong> ${tutorial.level}</p>
            <p><strong>Category:</strong> ${tutorial.category}</p>
            <p><strong>Time:</strong> ${tutorial.time}</p>
            <a href="${tutorial.link}" target="_blank">Watch Tutorial</a>
        `;

        container.appendChild(card);
    });
}
    
function displayAllTutorials() {

    const container = document.querySelector(".all-grid");
    container.innerHTML = "";

    tutorials.forEach(tutorial => {

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${tutorial.title}</h3>
            <p><strong>Level:</strong> ${tutorial.level}</p>
            <p><strong>Category:</strong> ${tutorial.category}</p>
            <p><strong>Time:</strong> ${tutorial.time}</p>
            <a href="${tutorial.link}" target="_blank">Watch Tutorial</a>
        `;

        container.appendChild(card);
    });
}

const calmForm = document.getElementById("calmForm");
if(calmForm){
    calmForm.addEventListener("submit", function (event){
        event.preventDefault();
        alert("Session starting! Enjoy your calm moment!");
        window.location.href = "RelaxToFold.html";
    });
}
        
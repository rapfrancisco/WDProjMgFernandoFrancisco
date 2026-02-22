document.addEventListener('keydown', function(event) {
    if (event.shiftKey) {

        if(['b','h','e','m','r','t','p','u'].includes(event.key.toLowerCase())){
            event.preventDefault();
        }

        switch(event.key.toLowerCase()) {
            case 'b': window.location.href = 'index.html'; break;
            case 'h': window.location.href = 'History_Of_Origami.html'; break;
            case 'e': window.location.href = 'Origami_Exhibit.html'; break;
            case 'm': window.location.href = 'Folding_In_Origami.html'; break;
            case 'r': window.location.href = 'References&Resources.html'; break;
            //dont forget new cases
            default: break;
            }
        }
    });

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
                    
const tutorials = [

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

const audio = document.getElementById('bgAudio');
const musicSelect = document.getElementById('chosenMusic'); // or 'musicPreference'
const volumeSlider = document.getElementById('volumeRange');
const sessionInput = document.getElementById('sessionTime');
const quoteDisplay = document.getElementById('displayQuote');
const musicForm = document.getElementById('musicForm');

const quotes = [
    "dd",
    "dd",
    "dd",
];

function displayQuoteFunc(){
    const displayQuote = document.getElementById('displayQuote');
    const random = quotes[Math.floor(Math.random()*quotes.length)];
    displayQuote.textContent = random;
}

setInterval(displayQuoteFunc, 300000);
displayQuoteFunc();

function getMusicFile(opt){
    switch(opt){
        case 'lofi': return '';
        case 'ambiance': return '';
        case 'classical': return '';
        case 'ost': return '';
        case 'instrumental': return '';
        case 'silence': return '';
        default: return ''
        }
    }

function loadPreferences() {
    const savedMusic = localStorage.getItem('music') || 'silence';
    const savedVolume = localStorage.getItem('volume') || 50;
    const savedSession = localStorage.getItem('session') || 30;

    musicSelect.value = savedMusic;
    volumeSlider.value = savedVolume;
    sessionInput.value = savedSession;

    audio.src = getMusicFile(savedMusic);
    audio.volume = savedVolume / 100;
    }

loadPreferences();

musicSelect.addEventListener('change', () => {
    audio.src = getMusicFile(musicSelect.value);
    if(audio.src) audio.play();
});

volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value / 100;
});

function sixSeven(event){ //function is named sixSeven, deal with it. 
    console.log("Form Submitted"); //just a checker to see if form loads, unrelated to actual code and jsut for debugging
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
            checkedValues('animals'),
            checkedValues('geometric'),
            checkedValues('plants'),
        ),

        musicPreference: document.getElementById("chosenMusic").value,
        volume: volumeSlider.value,
        session: sessionInput.value

        };

        localStorage.setItem('userPreferences', JSON.stringify(preferences)); //save new info to local storage as string
        localStorage.setItem('music', preferences.musicPreference);
        localStorage.setItem('volume', volumeSlider.value);
        localStorage.setItem('session', sessionInput.value);

        audio.src = getMusicFile(musicSelect.value);
        audio.volume = volumeSlider.value / 100;
        if(audio.src) audio.play()
                        
        alert("Preferences saved/overwritten successfully! Note: Head to folding or recommendations!")
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
        return confirm("Are you sure you want to reset your preferences"); //confirm to reset?
    }

    function loadRecommendations() {
        const stored = localStorage.getItem("userPreferences");
        if (!stored) {
            alert("Please set your preferences first.");
            return;
        }

        const prefs = JSON.parse(stored);
        const selectedDifficulty = prefs.difficulty;
        const selectedInterests = prefs.interests;
        const filtered = tutorials.filter(tutorial =>
            tutorial.level === selectedDifficulty &&
            selectedInterests.includes(tutorial.category)
        );

        displayTutorials(filtered);
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
        
const musicSelect = document.getElementById('chosenMusic'); 
const volumeSlider = document.getElementById('volumeRange');
const sessionInput = document.getElementById('sessionTime');
const quoteDisplay = document.getElementById('displayQuote');
const audio = document.getElementById('bgAudio'); 
const musicForm = document.getElementById('musicForm'); 
const seeResultsBtn = document.getElementById('seeResultsBtn');
const deletePrefsBtn = document.getElementById('deletePrefsBtn');
const modal = document.getElementById('resultsModal');
const closeModal = document.getElementById('closeModal');
const resultsContent = document.getElementById('resultsContent');

function loadPreferences() {
    const savedMusic = localStorage.getItem('music') || 'none';
    const savedVolume = localStorage.getItem('volume') || 50;
    const savedSession = localStorage.getItem('session') || 30;
    const stored = localStorage.getItem('userPreferences');

    if(stored){
        const prefs = JSON.parse(stored);

        if (musicSelect) musicSelect.value = prefs.musicPreference;
        if (volumeSlider) volumeSlider.value = prefs.volume;
        if (sessionInput) sessionInput.value = prefs.session;

        const difRad = document.querySelector(`input[name="difficulty"][value="${prefs.difficulty}"]`);
        if (difRad) difRad.checked = true;

        if(prefs.interests && Array.isArray(prefs.interests)) {
            prefs.interests.forEach(val => {
                const checkbox = document.querySelector(`input[value="${val}"]`);
                if(checkbox) checkbox.checked = true;
            });
        }

        const musicFile = getMusicFile(prefs.musicPreference);

        if(audio && musicFile){
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

        if (audio) {
            if (musicFile){
                audio.src = musicFile;
                audio.play();
            } else {
                audio.pause();
                audio.src = "";
            }
        }

        if (typeof startTimer === "function"){
            startTimer();
        } else {
            console.warn("Function not defined.");
        }
    });
}

if(volumeSlider){
    volumeSlider.addEventListener('input', () => {
        if (audio) {
            audio.volume = volumeSlider.value / 100;
        }
        localStorage.setItem('volume', volumeSlider.value);
    });
}

loadPreferences();

function updateSeeResults() {
    const stored = localStorage.getItem('userPreferences');

    console.log("Checking stored:", stored); // DEBUG

    if (!seeResultsBtn) return;

    if (stored && stored !== "null") {
        seeResultsBtn.disabled = false;
        seeResultsBtn.style.backgroundColor = "green";
        console.log("Button ENABLED");
    } else {
        seeResultsBtn.disabled = true;
        seeResultsBtn.style.backgroundColor = "red";
        console.log("Button DISABLED");
    }
}

updateSeeResults();

if(seeResultsBtn) {
    seeResultsBtn.addEventListener('click', () => {
        const storedData = localStorage.getItem('userPreferences');
        if(!storedData) return;
        const prefs = JSON.parse(storedData);

        resultsContent.innerHTML = `
            <p><strong>Difficulty:</strong> ${prefs.difficulty}</p>
            <p><strong>Interests:</strong> ${prefs.interests.join(", ")}</p>
            <p><strong>Music:</strong> ${prefs.musicPreference}</p>
            <p><strong>Volume:</strong> ${prefs.volume}</p>
            <p><strong>Session:</strong> ${prefs.session} min</p>
        `;

        modal.style.display = "block";
    });
}
if (closeModal) {
    closeModal.addEventListener('click', () => {
        modal.style.display = "none";
    });
}

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

if (deletePrefsBtn) {
    deletePrefsBtn.addEventListener('click', () => {
        if (confirm("Delete ALL preferences?")) {
            localStorage.removeItem('userPreferences');
            localStorage.removeItem('music');
            localStorage.removeItem('volume');
            localStorage.removeItem('session');

            alert("Preferences deleted.");

            updateSeeResults();
        }
    });
}

function sixSeven(event){
    event.preventDefault();

    if(!confirm("Are you sure you want to submit your preferences?")){
        return false;
    }

    const checkedValues = (name) => {
        const checkedBoxes = document.querySelectorAll(`input[name="${name}"]:checked`);
        return Array.from(checkedBoxes).map(box => box.value);
    };

    const preferences = {
        difficulty: document.querySelector('input[name="difficulty"]:checked')?.value || "not selected",

        interests: [].concat(
            ...checkedValues('animals'),
            ...checkedValues('geometric'),
            ...checkedValues('plants'),
        ),

        musicPreference: musicSelect ? musicSelect.value : "none",
        volume: volumeSlider ? volumeSlider.value : 50,
        session: sessionInput ? sessionInput.value : 30
    };

    localStorage.setItem('userPreferences', JSON.stringify(preferences));
    localStorage.setItem('music', preferences.musicPreference);

    if (volumeSlider) localStorage.setItem('volume', volumeSlider.value);
    if (sessionInput) localStorage.setItem('session', sessionInput.value);

    if (audio) {
        audio.src = getMusicFile(preferences.musicPreference);
        audio.volume = preferences.volume / 100;
        if(audio.src) audio.play();
    }

    if (typeof quoteDisplayFunc === "function"){
        quoteDisplayFunc();
    }

    alert("Preferences saved successfully!");

    setTimeout(() => {
    updateSeeResults();
    }, 0);
    
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
console.log("AFTER SAVE:", localStorage.getItem('userPreferences'));
}



function getMusicFile(opt){
    switch(opt){
        case 'lofi': return 'lofi-chill.mp3';
        case 'ambiance': return 'ambiance-bird.wav';
        case 'classical': return 'classical-rave.wav';
        case 'ost': return 'ost-ut.mp3';
        case 'instrumental': return 'instrumental-beats.mp3';
        case 'none': return '';
        default: return '';
    }
}


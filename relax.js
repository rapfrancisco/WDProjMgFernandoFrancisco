const quotes = [ //an array of quotes that would be displayed in the relax.html 
    "You can’t use up creativity. The more you use, the more you have. - Angelou, M.",
    "Creativity takes courage. - Matisse, H.",
    "Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome. - Washington, B. T.",
    "Despite everything, it's still you! - Undertale"

];
const musicForm = document.getElementById('musicForm');
let timerInt;

const calmForm = document.getElementById("calmForm");
if(calmForm){
    calmForm.addEventListener("submit", function (event){
        event.preventDefault();
        alert("Session starting! Enjoy your calm moment!");
        window.location.href = "RelaxToFold.html";
    });
}
      
const audio = document.getElementById('bgAudio');

if(audio){
    audio.loop = true;
}

function quoteDisplayFunc(){
    if(quoteDisplay){
        const random = quotes[Math.floor(Math.random()*quotes.length)];
        quoteDisplay.textContent = random;
    }
}

setInterval(quoteDisplayFunc, 300000);
quoteDisplayFunc();

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
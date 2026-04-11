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
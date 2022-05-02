const affirmationText = document.getElementById("affirmationText");

const affirmationResponse =
    fetch("https://www.affirmations.dev").then(r => { return r.json(); })
                                         .then(r => { affirmationText.innerText = r.affirmation });
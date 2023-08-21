const quiz = document.getElementById("quiz");
form.addEventListener("submit", submitted);

function submitted(event) {
    event.preventDefault();
    if(answers.question1) {
        return "Minecraft is the game recommended for you.";
    }
}
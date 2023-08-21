const form = document.getElementById("quiz");
form.addEventListener("submit", submitted);

function submitted(event) {
    event.preventDefault();
    display();
}

function display() {
    const resultSection = document.getElementById("results");
    resultSection.innerHTML = "";

    const resultHeader = document.createElement('h3');
    resultHeader.textContent = "Results";
    resultSection.appendChild(resultHeader);

    const result = document.createElement('p');
    result.textContent = "Recommendation : Minecraft";
    resultSection.appendChild(result);

    const reason = document.createElement('p');
    reason.textContent = "Reason : Minecraft is the game recommended based on what you like. It has many different modes such as survival, where there is no real objective and you can do whatever you want, creative, where the only limiting factor is your imagination, and adventure, which takes away many of the player's abilities, enabling the creation of many games designed by you and others where griefing by the player would be devastating. It also has an endless amount of minigames that you can find on the tons of servers hosted by players and a lot of mods and data packs whose effects vary from making small quality of life changes to completely changing how the game works.";
    resultSection.appendChild(reason);

    const myImage1 = document.createElement('img');
    myImage1.src="https://th.bing.com/th/id/OIP.5tds8J2TwVLkCViLfkUJaQHaCl?w=313&h=121&c=7&r=0&o=5&dpr=1.3&pid=1.7";
    resultSection.appendChild(myImage1);

    const myImage2 = document.createElement('img');
    myImage2.src="https://th.bing.com/th/id/OIP.NY20Csth274i7_4n2TmDQwHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";
    resultSection.appendChild(myImage2);

    const myImage3 = document.createElement('img');
    myImage3.src="https://th.bing.com/th/id/OIP.VndpnxaBica9WiZqo8mj9wHaEK?w=328&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7";
    resultSection.appendChild(myImage3);


}
// const riggedOutcome = "Minecraft is the game recommended for you based on the quiz. It has many different modes such as survival, creative, and adventure as well as an endless amount of minigames you can find on the tons of servers hosted by players.";

// function showQuestion() {
//   const currentQuestion = questions[currentQuestionIndex];
//   questionContainer.textContent = currentQuestion.question;

//   choicesContainer.innerHTML = "";
//   for (let i = 0; i < currentQuestion.choices.length; i++) {
//     const choiceButton = document.createElement("button");
//     choiceButton.textContent = currentQuestion.choices[i];
//     choiceButton.addEventListener("click", function() {
//       checkAnswer(i);
//     });
//     choicesContainer.appendChild(choiceButton);
//   }
// }

// function checkAnswer(selectedIndex) {
//   currentQuestionIndex++;

//   if (currentQuestionIndex < questions.length) {
//     showQuestion();
//   } else {
//     showResult();
//   }
// }

// function showResult() {
//   quizContainer.style.display = "none";
//   resultContainer.textContent = riggedOutcome;

//   const explanation = document.createElement("p");
//   explanation.textContent = "This rigged quiz always leads to the same outcome.";
//   resultContainer.appendChild(explanation);

//   const images = document.createElement("div");
//   images.innerHTML = `
//     <img src="https://th.bing.com/th/id/OIP.5tds8J2TwVLkCViLfkUJaQHaCl?w=313&h=121&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Minecraft Screenshot 1">
//     <img src="https://i.ytimg.com/vi/Y4dc2M22K6w/maxresdefault.jpg" alt="Minecraft Screenshot 2">
//     <img src="https://wallpapercave.com/wp/wp7075984.png" alt="Minecraft Screenshot 3">
//   `;
//   resultContainer.appendChild(images);
// }

// let currentQuestionIndex = 0;
// nextButton.addEventListener("click", showQuestion);

// showQuestion();
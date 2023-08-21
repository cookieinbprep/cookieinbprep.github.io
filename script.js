const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question");
const choicesContainer = document.getElementById("choices");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result");

const questions = [
  {
    question: "What gamemode do you prefer the most?",
    choices: ["Survival", "Creative", "Adventure"],
    correctAnswer: Creative
  },
  {
    question: "Do you enjoy being able to play a variety of minigames?",
    choices: ["Yes", "No"],
    correctAnswer: Yes
  },
  {
    question: "What type of playstyle do you enjoy the most?",
    choices: ["Adventure", "PvP", "PvE", "Creative"],
    correctAnswer: Adventure
  }
];

const riggedOutcome = "Minecraft is the game recommended for you based on the quiz. It has many different modes such as survival, creative, and adventure as well as an endless amount of minigames you can find on the tons of servers hosted by players.";

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionContainer.textContent = currentQuestion.question;

  choicesContainer.innerHTML = "";
  for (let i = 0; i < currentQuestion.choices.length; i++) {
    const choiceButton = document.createElement("button");
    choiceButton.textContent = currentQuestion.choices[i];
    choiceButton.addEventListener("click", function() {
      checkAnswer(i);
    });
    choicesContainer.appendChild(choiceButton);
  }
}

function checkAnswer(selectedIndex) {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizContainer.style.display = "none";
  resultContainer.textContent = riggedOutcome;

  const explanation = document.createElement("p");
  explanation.textContent = "This rigged quiz always leads to the same outcome.";
  resultContainer.appendChild(explanation);

  const images = document.createElement("div");
  images.innerHTML = `
    <img src="https://th.bing.com/th/id/OIP.5tds8J2TwVLkCViLfkUJaQHaCl?w=313&h=121&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Minecraft Screenshot 1">
    <img src="https://i.ytimg.com/vi/Y4dc2M22K6w/maxresdefault.jpg" alt="Minecraft Screenshot 2">
    <img src="https://wallpapercave.com/wp/wp7075984.png" alt="Minecraft Screenshot 3">
  `;
  resultContainer.appendChild(images);
}

let currentQuestionIndex = 0;
nextButton.addEventListener("click", showQuestion);

showQuestion();
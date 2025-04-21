let level = 1;
const maxLevel = 5;
let correctAnswer;

function generateQuestion() {
  const a = Math.floor(Math.random() * 10) + level;
  const b = Math.floor(Math.random() * 10) + level;
  correctAnswer = a + b;
  document.getElementById("question").textContent = `What is ${a} + ${b}?`;
  document.getElementById("answer").value = "";
}

function submitAnswer() {
  const userAnswer = parseInt(document.getElementById("answer").value);
  if (userAnswer === correctAnswer) {
    if (level === maxLevel) {
      triggerSurprise();
    } else {
      level++;
      document.getElementById("level-info").textContent = `Level: ${level} / ${maxLevel}`;
      generateQuestion();
    }
  } else {
    alert("Oops! Wrong answer. Try again.");
  }
}

function triggerSurprise() {
  document.getElementById("game-container").style.display = "none";
  const surpriseWrapper = document.getElementById("surprise-wrapper");
  surpriseWrapper.classList.remove("hidden");
  surpriseWrapper.style.display = "flex";
}

function revealMessage() {
  document.getElementById("message-box").classList.remove("hidden");
  document.getElementById("present").style.display = "none";
}

// Start first question
generateQuestion();

function showThankYou() {
  document.getElementById("message-box").classList.add("hidden");
  document.getElementById("thank-you-screen").classList.remove("hidden");
}

let totalTime = 90 * 60;
let currentQuestion = 1;
let totalQuestions = 50;
let flaggedQuestions = new Set();
let currentQuestionId = null;

function updateProgress(current, total) {
  const percent = Math.round((current / total) * 100);
  document.getElementById("progress-label").innerText = `Question ${current} of ${total}`;
  document.getElementById("progress-fill").style.width = `${percent}%`;
}

function startTimer() {
  const timerElem = document.getElementById('timer');
  const interval = setInterval(() => {
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    timerElem.innerText = `Time Left: ${minutes}:${seconds.toString().padStart(2, '0')}`;
    if (totalTime <= 0) {
      clearInterval(interval);
      alert("Time's up! Auto-submitting your answers.");
      submitExam();
    }
    totalTime--;
  }, 1000);
}

function showDOMCFeedback(userSelections, correctOptions) {
  document.querySelectorAll("input[type='checkbox']").forEach((input, idx) => {
    const label = input.nextElementSibling;
    if (correctOptions.includes(input.value)) {
      label.innerHTML += " ✅";
      label.style.color = "green";
    } else if (userSelections.includes(input.value)) {
      label.innerHTML += " ❌";
      label.style.color = "red";
    }
  });
}

document.getElementById("dark-mode-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

document.getElementById("flag-btn").addEventListener("click", () => {
  flaggedQuestions.add(currentQuestionId);
  alert("Question flagged for review.");
});

function submitExam() {
  alert("Exam submitted! Review your scores.");
  console.log("Flagged Questions: ", [...flaggedQuestions]);
}

window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
  startTimer();
  updateProgress(currentQuestion, totalQuestions);
});

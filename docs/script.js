
let questions = [];
let current = 0;
let score = 0;
let timer;
let answered = false;

console.log("✅ script.js loaded");

function startTimer(duration) {
  let time = duration;
  const display = document.getElementById('timer');
  timer = setInterval(() => {
    const h = String(Math.floor(time / 3600)).padStart(2, '0');
    const m = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
    const s = String(time % 60).padStart(2, '0');
    display.textContent = `⏱️ ${h}:${m}:${s}`;
    if (--time < 0) {
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);
}

function startExam() {
  document.getElementById('start-btn').style.display = 'none';
  document.getElementById('next-btn').style.display = 'inline';
  questions = shuffle(questionBank).slice(0, 50);
  startTimer(2 * 60 * 60);
  showQuestion();
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function showQuestion() {
  answered = false;
  const q = questions[current];
  const box = document.getElementById('question-box');
  box.innerHTML = '';

  if (q.type === "MCQ") {
    box.innerHTML += `<h3>Q${current + 1}. ${q.question}</h3>`;
    if (q.options && Array.isArray(q.options)) {
  q.options.forEach((opt, i) => {
      const optId = `option-${i}`;
      box.innerHTML += `
        <div>
          <label>
            <input type="radio" name="option" value="${i}" id="${optId}" onclick="checkMCQAnswer(${i})">
            ${opt}
          </label>
        </div>
      `;
      });
}
    box.innerHTML += `<div id="explanation" style="margin-top:10px; display:none;"></div>`;
  } else if (q.type === "DOMC") {
    box.innerHTML += `<h3>Q${current + 1}. ${q.question}</h3>`;
    box.innerHTML += `
      <button onclick="submitDOMC(true)">Yes</button>
      <button onclick="submitDOMC(false)">No</button>
      <div id="explanation" style="margin-top:10px;"></div>
    `;
  }
}

function checkMCQAnswer(selectedIndex) {
  if (answered) return;
  const q = questions[current];
  answered = true;
  const explanationBox = document.getElementById("explanation");
  const allOptions = document.querySelectorAll('input[name="option"]');

  allOptions.forEach((opt, i) => {
    opt.disabled = true;
    const parent = opt.parentElement;
    if (i === q.answer) {
      parent.style.color = "green";
    } else if (i === selectedIndex) {
      parent.style.color = "red";
    }
    });
}

  if (selectedIndex === q.answer) score++;

  if (q.explanation) {
    explanationBox.innerHTML = "💡 Explanation: " + q.explanation;
    explanationBox.style.display = "block";
  }

  document.getElementById('next-btn').disabled = false;
}

function submitDOMC(answer) {
  if (answered) return;
  answered = true;
  const q = questions[current];
  const box = document.getElementById("explanation");

  if (q.correct === answer) {
    score++;
    box.innerHTML = "✅ Correct!";
  } else {
    box.innerHTML = "❌ Incorrect!";
  }

  if (q.explanation) {
    box.innerHTML += "<br>💡 Explanation: " + q.explanation;
  }

  document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
  current++;
  if (current >= questions.length) {
    endQuiz();
  } else {
    showQuestion();
    document.getElementById('next-btn').disabled = true;
  }
}

function endQuiz() {
  clearInterval(timer);
  document.getElementById('question-box').innerHTML = '';
  document.getElementById('next-btn').style.display = 'none';
  document.getElementById('result').innerHTML = `
    <h2>Exam Complete</h2>
    <p>Score: ${score} / ${questions.length}</p>
    <p>Status: ${score >= 35 ? '✅ Pass' : '❌ Fail'}</p>
  `;
}

document.getElementById('start-btn').addEventListener('click', startExam);
document.getElementById('next-btn').addEventListener('click', nextQuestion);

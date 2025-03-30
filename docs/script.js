
let questions = [];
let current = 0;
let score = 0;
let timer;
let answered = false;
let domcOptions = [];
let domcIndex = 0;

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
  questions = shuffle(questionBank.filter(q =>
    (q.type === "MCQ" && Array.isArray(q.options)) ||
    (q.type === "DOMC" && Array.isArray(q.options) && Array.isArray(q.correctOptions))
  )).slice(0, 50);
  startTimer(2 * 60 * 60);
  showQuestion();
  document.getElementById('next-btn').disabled = true;
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
    domcOptions = q.options.map((opt, i) => ({
      text: opt,
      correct: q.correctOptions.includes(i),
      userSelected: false
    }));
    domcIndex = 0;
    showDOMCOption();
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

  if (selectedIndex === q.answer) score++;

  if (q.explanation) {
    explanationBox.innerHTML = "💡 Explanation: " + q.explanation;
    explanationBox.style.display = "block";
  }

  document.getElementById('next-btn').disabled = false;
}

function showDOMCOption() {
  const q = questions[current];
  const box = document.getElementById("question-box");
  box.innerHTML = `<h3>Q${current + 1}. ${q.question}</h3>`;
  
  const option = domcOptions[domcIndex];
  box.innerHTML += `
    <div>
      <label>
        <input type="checkbox" id="domcCheck"> "${option.text}"
      </label>
    </div>
    <button onclick="submitDOMCOption()">Submit Option</button>
    <div id="explanation" style="margin-top:10px;"></div>
  `;
}

function submitDOMCOption() {
  const isChecked = document.getElementById("domcCheck").checked;
  const option = domcOptions[domcIndex];
  option.userSelected = isChecked;

  domcIndex++;
  if (domcIndex < domcOptions.length) {
    showDOMCOption();
  } else {
    finishDOMCQuestion();
  }
}

function finishDOMCQuestion() {
  answered = true;
  const box = document.getElementById("question-box");
  const q = questions[current];
  box.innerHTML = `<h3>Q${current + 1}. ${q.question}</h3>`;

  let correctCount = 0;
  domcOptions.forEach(opt => {
    const user = opt.userSelected ? "✅" : "❌";
    const actual = opt.correct ? "(Correct)" : "(Incorrect)";
    if (opt.userSelected === opt.correct) correctCount++;
    box.innerHTML += `<p>${user} "${opt.text}" ${actual}</p>`;
  });

  if (correctCount === domcOptions.length) score++;

  if (q.explanation) {
    box.innerHTML += `<p>💡 Explanation: ${q.explanation}</p>`;
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
    ${score >= 35 ? "<p>🎓 Congratulations! You are certified for this chapter.</p>" : "<p>📚 Please review and try again to certify.</p>"}
    <canvas id="scoreChart" width="300" height="150"></canvas>
  `;
  renderScoreChart(score, questions.length);
}

function renderScoreChart(correct, total) {
  const ctx = document.getElementById('scoreChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Correct', 'Incorrect'],
      datasets: [{
        label: 'Score Summary',
        data: [correct, total - correct],
        backgroundColor: ['#2ecc71', '#e74c3c']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: {
          display: true,
          text: '📊 Your Score Breakdown'
        }
      }
    }
  });
}

document.getElementById('start-btn').addEventListener('click', startExam);
document.getElementById('next-btn').addEventListener('click', nextQuestion);

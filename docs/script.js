let questions = [];
let current = 0;
let score = 0;
let timer;

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
  const q = questions[current];
  const box = document.getElementById('question-box');
  box.innerHTML = '';
  if (q.type === "MCQ") {
    box.innerHTML += `<h3>Q${current + 1}. ${q.question}</h3>`;
    q.options.forEach((opt, i) => {
      box.innerHTML += \`
        <div><label>
          <input type="radio" name="option" value="\${i}"> \${opt}
        </label></div>
      \`;
    });
  } else if (q.type === "DOMC") {
    box.innerHTML += `<h3>Q${current + 1}. ${q.question}</h3>`;
    box.innerHTML += \`
      <button onclick="submitDOMC(true)">Yes</button>
      <button onclick="submitDOMC(false)">No</button>
    \`;
  }
}

function nextQuestion() {
  const q = questions[current];
  if (q.type === "MCQ") {
    const selected = document.querySelector('input[name="option"]:checked');
    if (selected && parseInt(selected.value) === q.answer) score++;
  }
  current++;
  if (current >= questions.length) {
    endQuiz();
  } else {
    showQuestion();
  }
}

function submitDOMC(answer) {
  const q = questions[current];
  if (q.correct === answer) score++;
  current++;
  if (current >= questions.length) {
    endQuiz();
  } else {
    showQuestion();
  }
}

function endQuiz() {
  clearInterval(timer);
  document.getElementById('question-box').innerHTML = '';
  document.getElementById('next-btn').style.display = 'none';
  document.getElementById('result').innerHTML = \`
    <h2>Exam Complete</h2>
    <p>Score: \${score} / \${questions.length}</p>
    <p>Status: \${score >= 35 ? '✅ Pass' : '❌ Fail'}</p>
  \`;
}

document.getElementById('start-btn').addEventListener('click', startExam);
document.getElementById('next-btn').addEventListener('click', nextQuestion);

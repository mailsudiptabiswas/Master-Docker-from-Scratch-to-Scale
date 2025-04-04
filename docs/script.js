let questions = [];
let current = 0;
let userAnswers = {};

fetch('questions.json')
  .then(res => res.json())
  .then(data => {
    questions = data;
    showQuestion();
  });

function showQuestion() {
  const q = questions[current];
  const box = document.getElementById('question-box');
  let html = `<h2>Q${current+1}: ${q.question}</h2>`;
  if (q.type === "MCQ") {
    for (const key in q.options) {
      html += `<label><input type="radio" name="answer" value="${key}"> ${q.options[key]}</label><br>`;
    }
  } else if (q.type === "DOMC") {
    for (const key in q.options) {
      html += `<label><input type="checkbox" name="answer" value="${key}"> ${q.options[key]}</label><br>`;
    }
  } else {
    html += `<label><input type="radio" name="answer" value="True"> True</label><br>`;
    html += `<label><input type="radio" name="answer" value="False"> False</label><br>`;
  }
  box.innerHTML = html;
  document.getElementById('progress').innerText = `Question ${current+1} of ${questions.length}`;
}

function nextQuestion() {
  saveAnswer();
  if (current < questions.length - 1) current++;
  showQuestion();
}

function prevQuestion() {
  if (current > 0) current--;
  showQuestion();
}

function saveAnswer() {
  const q = questions[current];
  const inputs = document.querySelectorAll('input[name="answer"]:checked');
  userAnswers[q.id] = Array.from(inputs).map(i => i.value);
}

function submitExam() {
  saveAnswer();
  let score = 0;
  let domainScores = {};
  for (const q of questions) {
    const correct = JSON.stringify(q.correct_options.sort());
    const user = JSON.stringify((userAnswers[q.id] || []).sort());
    if (correct === user) {
      score++;
      domainScores[q.domain] = (domainScores[q.domain] || 0) + 1;
    }
  }
  alert(`✅ You got ${score} / ${questions.length} correct.\n\nPer-domain breakdown:\n` +
    Object.entries(domainScores).map(([d, s]) => `${d}: ${s}`).join('\n'));
}
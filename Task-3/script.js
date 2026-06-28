// quiz setup

const questions = [
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answer: "CSS"
  },
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "None of these"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which method selects an element by ID in JavaScript?",
    options: ["getElement()", "getElementById()", "selectById()", "findById()"],
    answer: "getElementById()"
  },
  {
    question: "Which CSS property changes text color?",
    options: ["font-color", "text-color", "color", "background-color"],
    answer: "color"
  },
  {
    question: "What does API stand for?",
    options: ["Application Programming Interface", "Applied Program Index", "App Processing Input", "None of these"],
    answer: "Application Programming Interface"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');
const scoreEl = document.getElementById('score');
const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  feedbackEl.textContent = '';
  optionsEl.innerHTML = '';
  nextBtn.style.display = 'none';

  q.options.forEach(function(option) {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.addEventListener('click', function() {
      checkAnswer(option);
    });
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  const buttons = optionsEl.querySelectorAll('button');

  buttons.forEach(function(btn) {
    btn.disabled = true;
    if (btn.textContent === correct) {
      btn.style.backgroundColor = '#27ae60';
      btn.style.color = '#fff';
    } else if (btn.textContent === selected) {
      btn.style.backgroundColor = '#e74c3c';
      btn.style.color = '#fff';
    }
  });

  if (selected === correct) {
    feedbackEl.textContent = 'Correct! ✅';
    feedbackEl.style.color = '#27ae60';
    score++;
  } else {
    feedbackEl.textContent = 'Wrong! Answer: ' + correct;
    feedbackEl.style.color = '#e74c3c';
  }

  scoreEl.textContent = 'Score: ' + score + ' / ' + questions.length;
  nextBtn.style.display = 'inline-block';
}

startBtn.addEventListener('click', function() {
  currentQuestion = 0;
  score = 0;
  scoreEl.textContent = '';
  startBtn.style.display = 'none';
  loadQuestion();
});

nextBtn.addEventListener('click', function() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    questionEl.textContent = 'Quiz done!';
    optionsEl.innerHTML = '';
    feedbackEl.textContent = '';
    scoreEl.textContent = 'Final Score: ' + score + ' / ' + questions.length;
    nextBtn.style.display = 'none';
    startBtn.textContent = 'Try Again';
    startBtn.style.display = 'inline-block';
  }
});

// joke api

const jokeBtn = document.getElementById('jokeBtn');
const jokeSetup = document.getElementById('jokeSetup');
const jokePunchline = document.getElementById('jokePunchline');

jokeBtn.addEventListener('click', function() {
  jokeSetup.textContent = 'Loading...';
  jokePunchline.textContent = '';

  fetch('https://v2.jokeapi.dev/joke/Any?type=twopart&safe-mode')
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      jokeSetup.textContent = data.setup;
      jokePunchline.textContent = data.delivery;
    })
    .catch(function() {
      jokeSetup.textContent = 'Could not load joke, try again!';
      jokePunchline.textContent = '';
    });
});
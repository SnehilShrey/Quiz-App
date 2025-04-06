const questions = [
    {
      question: "What does HTML stand for?",
      options: ["HyperText Markup Language", "HighText Machine Language", "Hyperloop Machine Language", "None of the above"],
      answer: "HyperText Markup Language"
    },
    {
      question: "Which language is used for styling web pages?",
      options: ["HTML", "JQuery", "CSS", "XML"],
      answer: "CSS"
    },
    {
      question: "What is the full form of JS?",
      options: ["JavaStructure", "JavaScript", "JustStyle", "JavaSystem"],
      answer: "JavaScript"
    },
    {
      question: "Which tag is used to define a JavaScript section in HTML?",
      options: ["<script>", "<js>", "<javascript>", "<code>"],
      answer: "<script>"
    },
    {
      question: "Which property is used to change the background color in CSS?",
      options: ["bgcolor", "color", "background-color", "style"],
      answer: "background-color"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const startBtn = document.getElementById("start-btn");
  const restartBtn = document.getElementById("restart-btn");
  const startScreen = document.getElementById("start-screen");
  const quizScreen = document.getElementById("quiz");
  const resultScreen = document.getElementById("result");
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextBtn = document.getElementById("next-btn");
  const scoreEl = document.getElementById("score");
  
  startBtn.onclick = () => {
    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    showQuestion();
  };
  
  restartBtn.onclick = () => {
    resultScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
    currentQuestion = 0;
    score = 0;
  };
  
  function showQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
  
    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.onclick = () => selectAnswer(btn, q.answer);
      optionsEl.appendChild(btn);
    });
  }
  
  function selectAnswer(button, correct) {
    const selected = button.textContent;
    if (selected === correct) {
      score++;
      button.style.backgroundColor = "#c8e6c9"; // green
    } else {
      button.style.backgroundColor = "#ffcdd2"; // red
    }
  
    Array.from(optionsEl.children).forEach(btn => btn.disabled = true);
  }
  
  nextBtn.onclick = () => {
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      showQuestion();
    } else {
      quizScreen.classList.add("hidden");
      resultScreen.classList.remove("hidden");
      scoreEl.textContent = `${score} / ${questions.length}`;
    }
  };
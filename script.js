const questions = [
  {
    question: "O consumo excessivo de álcool pode causar:",
    options: ["Melhora na memória", "Doenças hepáticas", "Aumento da concentração"],
    answer: 1
  },
  {
    question: "O cigarro é responsável por:",
    options: ["Fortalecer os pulmões", "Reduzir o risco de câncer", "Causar doenças respiratórias"],
    answer: 2
  },
  {
    question: "Qual substância viciante está presente no cigarro?",
    options: ["Cafeína", "Nicotina", "Álcool"],
    answer: 1
  },
  {
    question: "Beber em excesso pode afetar:",
    options: ["A coordenação motora", "A visão noturna", "A capacidade de correr"],
    answer: 0
  },
  {
    question: "Fumar passivamente significa:",
    options: ["Fumar menos cigarros", "Inalar fumaça de outros fumantes", "Fumar sem tragar"],
    answer: 1
  },
  {
    question: "O álcool afeta qual órgão principalmente?",
    options: ["Pulmões", "Fígado", "Coração"],
    answer: 1
  },
  {
    question: "Qual é um efeito comum do cigarro?",
    options: ["Melhora da digestão", "Aumento da pressão arterial", "Redução do estresse"],
    answer: 1
  },
  {
    question: "O consumo de álcool por adolescentes pode:",
    options: ["Ajudar no crescimento", "Prejudicar o desenvolvimento cerebral", "Melhorar o desempenho escolar"],
    answer: 1
  },
  {
    question: "Parar de fumar traz benefícios em quanto tempo?",
    options: ["Após 10 anos", "Após 24 horas", "Após 1 mês"],
    answer: 1
  },
  {
    question: "Qual é um sinal de dependência do álcool?",
    options: ["Beber socialmente", "Necessidade constante de beber", "Evitar bebidas alcoólicas"],
    answer: 1
  },
  {
    question: "O cigarro eletrônico é:",
    options: ["Totalmente seguro", "Livre de nicotina", "Também pode causar danos à saúde"],
    answer: 2
  },
  {
    question: "O álcool pode causar:",
    options: ["Desidratação", "Hiper-hidratação", "Imunidade elevada"],
    answer: 0
  },
  {
    question: "Fumar pode afetar:",
    options: ["A fertilidade", "A audição", "A altura"],
    answer: 0
  },
  {
    question: "O álcool é considerado uma droga?",
    options: ["Não", "Sim", "Depende da quantidade"],
    answer: 1
  },
  {
    question: "Qual é uma alternativa saudável ao cigarro?",
    options: ["Chiclete de nicotina", "Cigarro light", "Cigarro sem filtro"],
    answer: 0
  }
];

function loadQuiz() {
  const container = document.getElementById("quiz-container");
  questions.forEach((q, i) => {
    const questionBlock = document.createElement("div");
    questionBlock.innerHTML = `<p><strong>${i + 1}. ${q.question}</strong></p>`;
    q.options.forEach((opt, j) => {
      questionBlock.innerHTML += `
        <label>
          <input type="radio" name="q${i}" value="${j}" />
          ${opt}
        </label><br/>
      `;
    });
    container.appendChild(questionBlock);
  });
}

function submitQuiz() {
  let score = 0;
  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && parseInt(selected.value) === q.answer) score++;
  });

  const resultText = `Você acertou ${score} de ${questions.length} perguntas.`;
  document.getElementById("result").textContent = resultText;
  localStorage.setItem("quizScore", score);
}

loadQuiz();

// creating array of objects with questions and answers of the quiz
const questions = [
  {
    question: "Qual é o nome do protagonista principal de Persona 5?",
    answers: [
      "Ren Amamiya",
      "Akira Kurusu",
      "Makoto Yuki",
    ],
    correct: 0
  },
  {
    question: "Quem é o mascote do grupo de ladrões Phantom Thieves?",
    answers: [
      "Morgana",
      "Teddie",
      "Koromaru",
    ],
    correct: 0
  },
  {
    question: "Qual é o nome da escola em que os personagens principais estudam em Persona 5?",
    answers: [
      "Shujin Academy",
      "Gekkoukan High School",
      "Yasogami High School",
    ],
    correct: 0
  },
  {
    question: "Quem é o antagonista principal de Persona 5?",
    answers: [
      "Masayoshi Shido",
      "Tohru Adachi",
      "Ryotaro Dojima",
    ],
    correct: 0
  },
  {
    question: "Qual é o nome do mundo paralelo onde os Phantom Thieves realizam suas missões?",
    answers: [
      "Metaverse",
      "TV World",
      "Dark Hour",
    ],
    correct: 0
  },
  {
    question: "Qual é o nome do mentor e guia dos Phantom Thieves?",
    answers: [
      "Igor",
      "Sojiro Sakura",
      "Sae Niijima",
    ],
    correct: 0
  },
  {
    question: "Qual é o nome do local onde os personagens principais se reúnem e planejam suas atividades?",
    answers: [
      "Velvet Room",
      "Leblanc Café",
      "Mementos",
    ],
    correct: 1
  },
  {
    question: "Quem é o último membro a se juntar aos Phantom Thieves?",
    answers: [
      "Goro Akechi",
      "Yusuke Kitagawa",
      "Haru Okumura",
    ],
    correct: 2
  },
  {
    question: "Qual é o nome do navio pirata voador dos Phantom Thieves?",
    answers: [
      "Morgana Car",
      "Mona Bus",
      "Mementos Ship",
    ],
    correct: 0
  },
  {
    question: "Quem é o antagonista final e verdadeiro de Persona 5?",
    answers: [
      "Yaldabaoth",
      "Nyarlathotep",
      "Izanami",
    ],
    correct: 0
  }
];

  
// bringing div tag to serve as base for the quiz
const quiz = document.querySelector('#quiz')
// bringing template tag to use for each item
const template = document.querySelector('template')

// creating set to put correct items
const correctOnes = new Set()
// getting number of items
const totalOfQuestions = questions.length
// bringing span of correct answers
const showTotal = document.querySelector('#correct span')

// looping each object from the array
for(const item of questions) {
  // cloning tags from the template
  const quizItem = template.content.cloneNode(true)
  // redefining h3 tag content
  quizItem.querySelector('h3').textContent = item.question
  
  // looping each answer of each item
  for(let answer of item.answers) {
    // cloning input and span tags
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    // redefining span tag content
    dt.querySelector('span').textContent = answer
    // redefining input tag name so all answers of each item will have the same name
    dt.querySelector('input').setAttribute('name', 'question-'+questions.indexOf(item))
    // redefining input tag value so that each answer of the same item will have a different value
    dt.querySelector('input').value = item.answers.indexOf(answer)
    // creating arrow event to monitor changes in the input tag
    dt.querySelector('input').onchange = (event) => {
      // removing object from set after user changes answer
      correctOnes.delete(item)
      // checking if user input equals right answer
      if(event.target.value == item.correct) {
        // adding correct item to set
        correctOnes.add(item)
      }
      // redefining span tag content
      showTotal.textContent = correctOnes.size + ' out of ' + totalOfQuestions
    }

    // adding answer detail tags to the items
    quizItem.querySelector('dl').appendChild(dt)
  }

  // removing first template detail tag
  quizItem.querySelector('dl dt').remove()

  // adding item tags to quiz div tag
  quiz.appendChild(quizItem)
}
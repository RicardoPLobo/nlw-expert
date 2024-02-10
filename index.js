// creating array of objects with questions and answers of the quiz
const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "let x = 5;",
        "var x = 5;",
        "const x = 5;",
      ],
      correta: 2
    },
    {
      pergunta: "Como você define uma função em JavaScript?",
      respostas: [
        "function myFunction() {}",
        "def myFunction() {}",
        "func myFunction() {}",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador usado para verificar igualdade de valor e tipo em JavaScript?",
      respostas: [
        "==",
        "===",
        "=",
      ],
      correta: 1
    },
    {
      pergunta: "Como você comenta uma linha de código em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "/* Este é um comentário */",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função usada para imprimir algo no console em JavaScript?",
      respostas: [
        "log()",
        "print()",
        "console.log()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o método usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "add()",
        "append()",
      ],
      correta: 0
    },
    {
      pergunta: "Como você verifica o comprimento de uma string em JavaScript?",
      respostas: [
        "len()",
        "length()",
        "size()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado da expressão 10 % 3 em JavaScript?",
      respostas: [
        "1",
        "2",
        "3",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o tipo de dado retornado pelo operador typeof em JavaScript quando aplicado a uma função?",
      respostas: [
        "'function'",
        "'object'",
        "'undefined'",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado da expressão 2 + '2' em JavaScript?",
      respostas: [
        "4",
        "'22'",
        "TypeError",
      ],
      correta: 1
    }
  ];
  
  // bringing div tag to serve as base for the quiz
  const quiz = document.querySelector('#quiz')
  // bringing template tag to use for each item
  const template = document.querySelector('template')
  
  // creating set to put correct items
  const corretas = new Set()
  // getting number of items
  const totalDePerguntas = perguntas.length
  // bringing span of correct answers
  const mostrarTotal = document.querySelector('#acertos span')
  
  // looping each object from the array
  for(const item of perguntas) {
    // cloning tags from the template
    const quizItem = template.content.cloneNode(true)
    // redefining h3 tag content
    quizItem.querySelector('h3').textContent = item.pergunta
    
    // looping each answer of each item
    for(let resposta of item.respostas) {
      // cloning input and span tags
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      // redefining span tag content
      dt.querySelector('span').textContent = resposta
      // redefining input tag name so all answers of each item will have the same name
      dt.querySelector('input').setAttribute('name', 'pergunta-'+perguntas.indexOf(item))
      // redefining input tag value so that each answer of the same item will have a different value
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      // creating arrow event to monitor changes in the input tag
      dt.querySelector('input').onchange = (event) => {
        // removing object from set after user changes answer
        corretas.delete(item)
        // checking if user input equals right answer
        if(event.target.value == item.correta) {
          // adding correct item to set
          corretas.add(item)
        }
        // redefining span tag content
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      // adding answer detail tags to the items
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    // removing first template detail tag
    quizItem.querySelector('dl dt').remove()
  
    // adding item tags to quiz div tag
    quiz.appendChild(quizItem)
  }
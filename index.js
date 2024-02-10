// creating array of objects with questions and answers of the quiz
const questions = [
  {
    question: "What is the basic functional unit of the nervous system?",
    answers: [
      "Neuron",
      "Hormone",
      "Glial cell",
    ],
    correct: 0
  },
  {
    question: "Which part of the brain is responsible for regulating vital functions like breathing and heart rate?",
    answers: [
      "Cerebellum",
      "Hypothalamus",
      "Parietal lobe",
    ],
    correct: 1
  },
  {
    question: "What is the fatty substance that surrounds and insulates the axon of a neuron?",
    answers: [
      "Dendrite",
      "Synapse",
      "Myelin",
    ],
    correct: 2
  },
  {
    question: "Which neurotransmitter is associated with feelings of pleasure and reward?",
    answers: [
      "Dopamine",
      "Serotonin",
      "Acetylcholine",
    ],
    correct: 0
  },
  {
    question: "What is the name of the process by which neurons communicate with each other?",
    answers: [
      "Myelination",
      "Synaptic transmission",
      "Neurogenesis",
    ],
    correct: 1
  },
  {
    question: "Which part of the brain is responsible for higher cognitive functions such as reasoning and problem-solving?",
    answers: [
      "Frontal lobe",
      "Temporal lobe",
      "Occipital lobe",
    ],
    correct: 0
  },
  {
    question: "What is the term for the branching extensions of a neuron that receive signals from other neurons?",
    answers: [
      "Axon",
      "Cell body",
      "Dendrite",
    ],
    correct: 2
  },
  {
    question: "Which division of the nervous system controls voluntary movements of skeletal muscles?",
    answers: [
      "Sympathetic nervous system",
      "Autonomic nervous system",
      "Somatic nervous system",
    ],
    correct: 2
  },
  {
    question: "What is the space between two neurons where neurotransmitters are released and received?",
    answers: [
      "Synapse",
      "Myelin sheath",
      "Neuron body",
    ],
    correct: 0
  },
  {
    question: "Which structure connects the two hemispheres of the brain and facilitates communication between them?",
    answers: [
      "Thalamus",
      "Hippocampus",
      "Corpus callosum",
    ],
    correct: 2
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
export const questions = [
  {
    question: 'What\'s my name?',
    answers: ['Regina', 'Danil', 'Sophia'],
    correctAnswer: 'Danil'
  },
  {
    question: 'How old am I?',
    answers: ['13', '24', '17'],
    correctAnswer: '17'
  },
]

shuffle(questions)

export function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]
    ]
  }
  return array;
}
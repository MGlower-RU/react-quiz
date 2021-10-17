import { useContext, useEffect, useState } from "react"
import { QuestionContext } from "./Context"

export default function Question() {
  const {
    questions,
    questionNumber,
    setCorrectAnswers,
    correctAnswers,
    setQuestionNumber,
  } = useContext(QuestionContext)
  const questionData = questions[questionNumber]
  const [currAnswer, setCurrAnswer] = useState(questionData.answers[0])

  useEffect(() => {
    setCurrAnswer(questionData.answers[0])
  }, [questionData])

  function handleSubmit() {
    const isAnswerCorrect = currAnswer.toLowerCase() === questionData.correctAnswer.toLowerCase()
    setCorrectAnswers([...correctAnswers, {isAnswerCorrect, answer: currAnswer, correct: questionData.correctAnswer}])
    setQuestionNumber(num => num + 1)
  }

  return (
    <div className='question__wrapper'>
      <div className="question">
        {questionData.question}
      </div>
      <div className="answers">
        {
          questionData.answers.map((el, i) => {
            return (
              <label key={i}>
                <input
                  type="radio"
                  name="name"
                  value={el}
                  onClick={e => setCurrAnswer(e.target.value)}
                  defaultChecked={i === 0}
                />
                <span>{el}</span>
              </label>
            )
          })
        }
      </div>
      <button onClick={handleSubmit}>
        Continue
      </button>
    </div>
  )
}
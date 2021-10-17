import { useContext } from "react"
import { QuestionContext } from "./Context"

export default function Results() {
  const {
    correctAnswers,
    setQuestionNumber,
    setCorrectAnswers,
    shuffle,
    questions,
    isLastQuestion
  } = useContext(QuestionContext)

  function handleClick() {
    setQuestionNumber(0)
    setCorrectAnswers([])
    document.querySelector('.quiz__wrapper').classList.remove('results-open')
    shuffle(questions)
  }

  return (
    <div className="results__wrapper">
      <h2>Correct answers</h2>
      <ul>
        <li>
          <span>Your</span>
          <span>Correct</span>
        </li>
        {
          correctAnswers.map((el, i) => {
            return (
              <li key={i}>
                <div
                  className="results__answer__choosen"
                  style={{
                    color: el.isAnswerCorrect ? '#086820' : '#bb0c03'
                  }}
                >
                  {el.answer}
                </div>
                <div className="results__answer__correct">
                  {el.correct}
                </div>
              </li>
            )
          })
        }
      </ul>
      {
        !isLastQuestion && <button onClick={handleClick}>Try again</button>
      }
    </div>
  )
}
import { useContext } from "react"
import { QuestionContext } from "./Context"

export default function Results() {
  const { correctAnswers } = useContext(QuestionContext)
  console.log(correctAnswers);

  return (
    <div className="results__wrapper">
      <h2>Correct answers</h2>
      <ul>
        {
          correctAnswers.map((el, i) => {
            return (
              <li key={i}>
                <div
                  className="results__answer__choosen"
                  style={{color: el.isAnswerCorrect ? 'green' : 'red'}}
                >
                  {el.answer}
                </div>
                <div className="results__answer__correct">
                  {String(el.isAnswerCorrect)}
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
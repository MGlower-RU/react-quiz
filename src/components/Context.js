import React, { createContext, useState } from 'react';
import { questions, shuffle } from './QuestionsData';

export const QuestionContext = createContext();

export default function Context(props) {
  const [questionNumber, setQuestionNumber] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState([])
  const isLastQuestion = questionNumber < questions.length;

  return (
    <QuestionContext.Provider value={{questions, shuffle, questionNumber, setQuestionNumber, setCorrectAnswers, correctAnswers, isLastQuestion}}>
      {props.children}
    </QuestionContext.Provider>
  )
}
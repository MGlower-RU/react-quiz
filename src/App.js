import { useContext } from 'react';
import { QuestionContext } from './components/Context';
import Question from './components/Question';
import Results from './components/Results';
import './styles/App.scss';

function App() {
  const {isLastQuestion} = useContext(QuestionContext)

  if(!isLastQuestion) document.querySelector('.quiz__wrapper').classList.add('results-open')

  return (
    <div className="quiz__wrapper">
      {isLastQuestion && <Question />}
      <Results />
    </div>
  );
}

export default App;

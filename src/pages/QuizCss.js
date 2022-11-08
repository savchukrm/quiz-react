import { useState } from 'react';

import questions from '../questions/dataCss';
import Game from '../components/Game';
import Result from '../components/Result';

const QuizCSS = () => {
  const [start, setStart] = useState(false);
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  const onStart = () => {
    setStart(true);
  };

  return (
    <div className="block">
      <button onClick={onStart} className={start ? 'hidden' : 'btn-start'}>
        Start
      </button>
      {step !== questions.length ? (
        start && (
          <Game
            step={step}
            question={question}
            onClickVariant={onClickVariant}
          />
        )
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
};

export default QuizCSS;

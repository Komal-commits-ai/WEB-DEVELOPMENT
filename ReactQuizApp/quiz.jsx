import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import {Question} from './question.jsx'
export default function QuizPage(props) {
  const {
    questions,
    currentindex,
    setIndex,
    score,
    setScore,
    selectedAnswers,
    setSelectedAnswers,
    scr_array,
    name,
    setArray
  } = props;
  const navigate = useNavigate();
  const [timer, setTimer] = useState(30);
  const [showMessage, setShowMessage] = useState(false);useEffect(() => {
    if (currentindex >= questions.length) {
      const attempts = {
        name: name,
        tscore: score,
        str_result: scr_array,
        str_selectedAnswer: selectedAnswers
      };
      localStorage.setItem(Date.now(), JSON.stringify(attempts));
      navigate('/result');
      return;
    }
  }, [currentindex, navigate, score, scr_array, selectedAnswers, questions.length]);
  useEffect(() => {
    if (currentindex >= questions.length) return;
    setTimer(30);
    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev === 1) {
          clearInterval(interval);setIndex(currentindex + 1);
          return 30;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [currentindex, setIndex, questions.length]);
  function CheckAns(currentindex, bindex) {
    setSelectedAnswers(pr => {
      const newAnswers = [...pr];
      newAnswers[currentindex] = bindex;
      return newAnswers;
    });
    if (questions[currentindex].correctAnswer === bindex) {
      setScore(score + 1);
      setArray(prev => {const newArray = [...prev];
        newArray[currentindex] = true;
        return newArray;
      });
    }
    setIndex(currentindex + 1);
    setTimer(30);
  }
  function handleNextClick() {
    if (selectedAnswers[currentindex] === null) {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 5000);
    } else {
      setIndex(currentindex + 1);
    }
  }
  const btn_style = 'font-mono text-blue-900 font-bold rounded-lg text-[20px] ml-35 m-1 hover:-translate-1 border-2 border-white hover:border-blue-900';
  const style = 'font-mono text-white bg-blue-800 rounded-2xl w-25 h-14 hover:-translate-3 active:bg-blue-400 text-xs';if (currentindex >= questions.length) {
    return null; 
  }
  return (
    <div className='bg-white  m-15 ml-65 mr-65 rounded-4xl relative h-110'>
      <h1 id='heading' className='text-blue-800 text-4xl text-center drop-shadow-xl font-bold py-6'>QUIZ:REACT</h1>
      <div className="absolute top-4 right-4 bg-blue-700 text-white font-bold rounded-xl px-4 py-2 w-32 text-center shadow-md">
        Time Left: {timer} seconds
      </div>
      <Question index={currentindex + 1}>{questions[currentindex].question}</Question>
      {questions[currentindex].options.map((option, bindex) =>
        <div key={bindex}>
          <button
            id="b"
            onClick={() => CheckAns(currentindex, bindex)}
            className={`${btn_style} ${selectedAnswers[currentindex] === bindex ? 'bg-gray-400 ' : ' '}`}
          >
            {bindex + 1}){option}
          </button><br />
        </div>
      )}
      {currentindex === 0 ? null : (
        <button
          className={`${style} absolute bottom-5 left-5`}
          onClick={() => {
            if (scr_array[currentindex - 1] === true) {
              setArray(prev => {
                const newArray = [...prev];
                newArray[currentindex - 1] = false;
                return newArray;
              });
              setScore(score - 1);
            }
            setIndex(currentindex - 1);
            setTimer(30);
          }}
        >
          Back
        </button>)}
      <div className="absolute bottom-5 right-5">
        {showMessage && (
          <div className="sms-message bg-red-100 text-blue-800 rounded-lg text-sm shadow-md border border-red-200 whitespace-nowrap absolute right-20 -top-2">
            Please select an answer before proceeding
          </div>
        )}
        <button className={`${style} bottom-5 right-5`} onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}
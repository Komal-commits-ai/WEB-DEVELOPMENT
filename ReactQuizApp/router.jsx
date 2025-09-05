import { useState } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Marks from './marks.jsx';
import QuizPage from './quiz.jsx';
import NamePage from './name.jsx';
import Attempts from './attemptsList.jsx';
import { questions } from './repositories/questions.js';
import QuizInterface from './QuizInterface.jsx';


const RouterComponent = () => {
  
  const [score, setScore] = useState(0);
  const [currentindex, setIndex] = useState(0);
  const [name, setName] = useState('');
  const [selectedAnswers, setSelectedAnswers] = useState(Array(11).fill(null));
  const [scr_array, setArray] = useState(Array(11).fill(false));

 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/interface" />
    },
    {
      path:"/interface",
      element:<QuizInterface/>
    },
    {
      path: "/name",
      element: <NamePage name={name} setName={setName} />
    },
    {
      path: "/quiz",
      element: (
        <QuizPage
          questions={questions}
          currentindex={currentindex}
          setIndex={setIndex}
          score={score}
          setScore={setScore}
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
          scr_array={scr_array}
          setArray={setArray}
          name={name}
        />
      )
    },
    {
      path: "/result",
      element: (
        <Marks
          questions={questions}
          scr_array={scr_array}
          score={score}
          setScore={setScore}
          setArray={setArray}
          setIndex={setIndex}
          setSelectedAnswers={setSelectedAnswers}
          selectedAnswers={selectedAnswers}
          setName={setName}
        />
      ),
      children: [
        {
          path: "attempts",
          element: <Attempts questions={questions} />
        }
      ]
    }
  ]);
  return <RouterProvider router={router} />;
};

export default RouterComponent
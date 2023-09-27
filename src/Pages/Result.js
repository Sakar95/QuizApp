import React from 'react';
import { useQuizContext } from '../Context/useContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Score from '../Components/Score';
import ResultBottom from '../Components/ResultBottom';

export default function Result() {
  // Calculate the score based on correct answers
  const navigate = useNavigate()
  const { quizQuestions, correctCount, setCorrectCount, wrongCount, setWrongCount } = useQuizContext();
  const score = correctCount * 10;

  return (
    <>
    <div className="w-screen max-w-sm bg-yellow-400 h-64 rounded-3xl pt-8 h-1/3 p-4 relative flex flex-col items-center justify-center relative">
      <div className='absolute left-6 top-8 cursor-pointer' onClick={()=>navigate("/")}><FontAwesomeIcon icon={faAngleLeft} size='2xl' color='white' /></div>
      {/* Centered circle for displaying the score */}
      <div
        className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-2 border-8 border-yellow-300"
      >
        <span className="text-orange text-3xl font-bold">{score}</span>
      </div>
      <div className="text-white text-2xl font-bold mt-4">Your Score</div>
    </div>

    <Score/>

   <ResultBottom/>
     

    </>
  );
}

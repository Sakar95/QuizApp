import React from 'react';
import { useQuizContext } from '../Context/useContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Score from '../Components/Score';
import ResultBottom from '../Components/ResultBottom';

export default function Result() {
  const navigate = useNavigate()
  const { correctCount } = useQuizContext();
  const score = correctCount * 10;

  return (
    <>
    <div className='max-w-sm w-screen relative m-auto h-screen shadow-md shadow-black '>
      <div className=" bg-gray-800 h-64 rounded-3xl pt-8 h-1/3 p-4 relative flex flex-col items-center justify-center    relative">
        <div className='absolute left-6 top-8 cursor-pointer' onClick={() => navigate("/")}><FontAwesomeIcon icon={faAngleLeft} size='2xl' color='white' /></div>

        <div
          className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-2 border-8 border-yellow-300"
        >
          <span className="text-orange text-3xl font-bold">{score}</span>
        </div>
        <div className="text-white text-2xl font-bold mt-4">Your Score</div>
      </div>

      <Score />


      {/* <ResultBottom /> */}

    </div>
      <div className="absolute bottom-16 w-32 h-8 left-1/2 transform -translate-x-1/2 py-1  pl-8 shadow-md shadow-black  bg-yellow-400 rounded-lg text-white cursor-pointer"
      onClick={()=>navigate("/home")}
      >Play Again</div>
      </>
  );
}

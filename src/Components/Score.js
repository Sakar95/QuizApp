import React from 'react';
import { useQuizContext } from '../Context/useContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircle } from '@fortawesome/free-solid-svg-icons';

export default function Score() {
    const { quizQuestions, correctCount, setCorrectCount, wrongCount, setWrongCount } = useQuizContext();
  return (
    <div className='absolute w-2/3 h-60 bg-white left-16 top-56 rounded-3xl shadow-lg shadow-black px-4'>
      <div className='flex justify-between mt-12 mx-2 '>
        <div >
            <div>
            <FontAwesomeIcon icon={faCircle} size="sm" color="orange" /> 100%
            </div>
            <div>
              Completion
            </div>
        </div>
        <div className='pe-4'> 
            <div>
            <FontAwesomeIcon icon={faCircle} size="sm" color='orange' /> 10
            </div>
            <div>
              Total 
            </div>
        </div>

      </div>
      <div className='flex justify-between mt-8 mx-2'>
        <div>
            <div>
            <FontAwesomeIcon icon={faCircle} size="sm" color='green' /> {correctCount}
            </div>
            <div>
              Correct
            </div>
        </div>
        <div>
            <div>
            <FontAwesomeIcon icon={faCircle} size="sm" color="red" /> {wrongCount}
            </div>
            <div>
              Wrong
            </div>
        </div>

      </div>

   </div>
  )
}

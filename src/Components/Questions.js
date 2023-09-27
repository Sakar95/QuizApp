import React from 'react'
import { useQuizContext } from '../Context/useContext'


export default function Questions() {
    const { quizQuestions,correctCount,wrongCount,currentQuestionIndex } = useQuizContext()
    const totalQuestions = quizQuestions.length;
  return (
    <div className='absolute w-64 h-60 bg-white left-16 top-48 rounded-3xl flex flex-col items-center justify-center shadow-lg px-4 '>
    {/* Counts */}
  <div className='absolute top-8 left-3 text-xl text-bold text-green-500'>
    {correctCount}
  </div>
  <div className='absolute top-8 right-4 text-xl text-bold text-red-500'>
    {wrongCount}
  </div>
    <div className="text-center text-orange-500 text-bold p-4">
      Question {currentQuestionIndex + 1}/{totalQuestions}
    </div>
    <div>
      <p>{quizQuestions[currentQuestionIndex].question}</p> {/* Display the question text */}
    </div>
  </div>
  )
}

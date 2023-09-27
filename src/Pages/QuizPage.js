import React, { useState, useEffect } from 'react';
import Questions from '../Components/Questions';
import { useQuizContext } from '../Context/useContext';
import { Navigate, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAngleLeft ,faSquarePollVertical} from '@fortawesome/free-solid-svg-icons';

export default function QuizPage() {
  const navigate = useNavigate()
  const { quizQuestions,correctCount, setCorrectCount,  wrongCount, setWrongCount,currentQuestionIndex,setCurrentQuestionIndex } = useQuizContext();
  
  const [timer, setTimer] = useState(10);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  

  // Calculate the total number of questions
  const totalQuestions = quizQuestions.length;

  useEffect(() => {
    // Shuffle options whenever the current question index changes
    if (currentQuestionIndex < quizQuestions.length) {
      const correctOption = quizQuestions[currentQuestionIndex].correct_answer;
      const incorrectOptions = quizQuestions[currentQuestionIndex].incorrect_answers;
      const allOptions = [...incorrectOptions, correctOption];
      const shuffled = shuffleArray(allOptions);
      setShuffledOptions(shuffled);
    }
  }, [currentQuestionIndex, quizQuestions]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        if (currentQuestionIndex < quizQuestions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setTimer(10); // Reset the timer for the next question
          setSelectedOption(null); // Reset selected option
          // If the timer runs out, consider the question unattempted
          setWrongCount(wrongCount + 1);
        } else {
          clearInterval(interval); // Stop the timer when there are no more questions
          navigate("/result")
        }
      }
    }, 1000); // Update the timer every second

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, [currentQuestionIndex, quizQuestions, timer, wrongCount]);

  // Function to shuffle an array
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Function to handle option selection
  const handleOptionSelect = (index) => {
    // Check if an option has already been selected for this question
    if (selectedOption === null) {
      setSelectedOption(index);
      // Check if the selected option is correct
      if (shuffledOptions[index] === quizQuestions[currentQuestionIndex].correct_answer) {
        setCorrectCount(correctCount + 1); // Increment correct count
      }
    }
  };

  return (
    <>
      <div className="w-screen  max-w-sm bg-yellow-400 h-60 rounded-3xl pt-8 h-1/3 p-4 relative">
        <div className="flex justify-between ">
          <div className="text-2xl text-bold text-white cursor-pointer" onClick={()=>navigate("/")}><FontAwesomeIcon icon={faAngleLeft} /></div>
           <div className="cursor-pointer" onClick={()=>navigate("/result")}><FontAwesomeIcon icon={faSquarePollVertical} size='2xl' color='white' /></div>
        </div>
        <div className="flex ">
          <div className="text-2xl text-bold text-white m-auto mt-8">{quizQuestions[0].category}</div>
        </div>
        {/* Timer */}
        <div className='absolute top-40 left-1/2 transform -translate-x-1/2 text-3xl text-bold text-orange-500 bg-white w-20 h-20 rounded-full flex items-center justify-center  shadow-md z-10'>
          {timer}
        </div>

       {/* Question div */}
      <Questions/>
        
      </div>
        {/* Shuffled Options */}
        <div className="absolute bottom-12 w-64 left-1/2 transform -translate-x-1/2 p-2 shadow-md ">
          {shuffledOptions.map((option, index) => (
            <div
              key={index}
              className={`border cursor-pointer ${
                selectedOption === index
                  ? option === quizQuestions[currentQuestionIndex].correct_answer
                    ? "border-green-500 border-2" // Correct option selected
                    : "border-red-500 border-2" // Incorrect option selected
                  : "border-orange-500"
              } rounded px-2 mb-2`}
              onClick={() => handleOptionSelect(index)}
              // Disable the option if it's already selected
              disabled={selectedOption !== null}
            >
              {option}
            </div>
          ))}
        </div>
        </>
  );
}

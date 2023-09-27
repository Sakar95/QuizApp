import { createContext, useState } from "react";
export const Context = createContext();




export const ContextProvider = ({ children }) => {

  

  const [category,setCategory]=useState(9);
  const [quizQuestions,setQuizQuestions] = useState([])
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);


  return (
    <Context.Provider
      value={{
        category,setCategory,
        quizQuestions,setQuizQuestions,
        correctCount, setCorrectCount,
        wrongCount, setWrongCount,
        currentQuestionIndex, setCurrentQuestionIndex
      }}
    >
      {children}
    </Context.Provider>
  );
};

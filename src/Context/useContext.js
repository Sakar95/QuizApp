import { Context } from "./Context";
import { useContext } from "react";


export const useQuizContext = () => {
  const context = useContext(Context)
  return context;
}

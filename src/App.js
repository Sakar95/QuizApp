import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import QuizPage from './Pages/QuizPage';
import Result from './Pages/Result';
import Login from './Pages/Login'

function App() {
  return (
    <div className='h-screen w-screen  m-auto  bg-gray-900 relative shadow-lg '>
      <Router>
        <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/quiz" element={<QuizPage/>} />
        <Route path="/result" element={<Result/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

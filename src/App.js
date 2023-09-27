import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import QuizPage from './Pages/QuizPage';
import Result from './Pages/Result';
import LeaderBoard from './Pages/LeaderBoard';

function App() {
  return (
    <div className='min-h-screen w-screen max-w-sm m-auto bg-white  rounded-3xl relative shadow-lg '>
      <Router>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/quiz" element={<QuizPage/>} />
        <Route path="/result" element={<Result/>} />
        <Route path="/leaderboard" element={<LeaderBoard/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

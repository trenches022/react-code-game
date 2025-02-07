import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Levels from "../pages/Levels";
import Game from '../pages/Game';
import Profile from "../pages/Profile";
import Header from "../components/Header";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/levels" element={<Levels /> } />
        <Route path="/game/:levelId" element={<Game /> } />
        <Route path="/profile" element={<Profile /> } />
      </Routes>
    </Router>
  )
}

export default AppRouter;
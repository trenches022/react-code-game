import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Levels from "../pages/Levels";
import Game from '../pages/Game';
import Profile from "../pages/Profile";
import Congratulations from "../pages/Congratulations";
import Header from "../components/Header";
import Roadmap from "../pages/Roadmap";
import Lessons from "../pages/Lessons";


const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/levels" element={<Levels /> } />
        <Route path="/game/:levelId" element={<Game /> } />
        <Route path="/profile" element={<Profile /> } />
        <Route path="/roadmap" element={<Roadmap /> } />
        <Route path="/lesson/:id" element={<Lessons /> } />
        <Route path="/congratulations" element={<Congratulations /> } />
      </Routes>
    </Router>
  )
}

export default AppRouter;
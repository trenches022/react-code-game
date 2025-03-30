import '../App.css';
import '../styles/Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h2 className='home-h2'>
        <span>&lt; Welcome to the Code Game! /&gt;</span> <br />
        Game is based on solving <span className='home-span'>JavaScript</span> problems.
      </h2>
      <h3 className='home-h3'>
        With this code game, you can understand the basic concepts of{' '}
        <span className='home-span'>JavaScript</span> or improve your skills if you are already familiar with this language.
      </h3>
      <h3>Visit <Link to='/roadmap' style={{textDecoration: 'none', color: 'rgb(250, 204, 21)'}}>Roadmap</Link></h3>
      <Link to="/levels">
        <button className="start-game-btn" style={{ backgroundColor: '#facc15', color: '#151b23' }}>
          Start
        </button>
      </Link>
    </div>
  );
};

export default Home;
import '../App.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container" style={{ backgroundColor: '#151b23', color: '#fff' }}>
      <h2 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '20px' }}>
        <span>&lt; Welcome to the Code Game! /&gt;</span> <br />
        Game is based on solving <span style={{ color: '#facc15' }}>JavaScript</span> problems.
      </h2>
      <h3 style={{ fontSize: '25px', textAlign: 'center', marginBottom: '40px' }}>
        With this code game, you can understand the basic concepts of{' '}
        <span style={{ color: '#facc15' }}>JavaScript</span> or improve your skills if you are already familiar with this language.
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
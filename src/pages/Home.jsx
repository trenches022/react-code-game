import '../App.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h2 style={{fontSize: '32px'}}>
      &lt; Welcome to the Code Game! &#47;&gt; <br />
        Game is based on solving <span style={{color: 'rgb(255, 213, 0)'}}>JavaScript</span> problems.
      </h2>
      <Link to='/levels'><button className="start-game-btn">Start</button></Link>
    </div>
  )
}

export default Home;
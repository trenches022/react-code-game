import useStore from '../store/useStore';
import '../App.css';
import { Link } from 'react-router-dom';

const LevelCard = ({ level }) => {

  const { currentLevel } = useStore();
  const isLocked = level.id > currentLevel;

  return (
    <div className={`level-card ${isLocked ? "locked" : ""}`}>
      {isLocked ? (
        <>
          <h3>{level.id}. {level.title}</h3>
          <p>🔒 Locked</p>
        </>
      ) : (
        <Link to={`/game/${level.id}`} style={{ textDecoration: 'none', color: 'white' }}>
          <h3>{level.id}. {level.title}</h3>
          <p>{level.description}</p>
        </Link>
      )}
    </div>
  );
}

export default LevelCard;

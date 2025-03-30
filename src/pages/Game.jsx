import { useParams } from "react-router-dom";
import levels from "../data/levels.ts";
import CodeEditor from "../components/CodeEditor";
import ProgressBar from '../components/ProgressBar';
import '../App.css';

const Game = () => {

  const { levelId } = useParams();
  const level = levels.find(lvl => lvl.id === parseInt(levelId));

  if (!level) {
    return <h2>Level not found</h2>
  }

  return (
    <div className='game-container'>
      <h2>{level.title}</h2>
      <p>{level.description}</p>
      <CodeEditor level={level}/>
      <ProgressBar />
      
      
      {level.hints?.length > 0 && (
        <div className="task-hints">
          <h3>Hints:</h3>
          <ul>
            {level.hints.map((hint, index) => (
              <li key={index}>{hint}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Game;

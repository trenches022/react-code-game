import levels from "../data/levels.ts";
import LevelCard from "../components/LevelCard";
import '../App.css';

const Levels = () => {
  return (
    <div className="levels-container">
      <h2>Levels</h2>
      {levels.map((level) => (
        <LevelCard key={level.id} level={level} />
      ))}
    </div>
  );
}

export default Levels;
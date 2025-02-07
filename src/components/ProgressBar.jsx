import useStore from "../store/useStore";
import '../App.css';

const ProgressBar = () => {

  const { currentLevel, totalLevels } = useStore();
  const progress = (currentLevel / totalLevels) * 100;

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      <span className="progress-text">
        Level {currentLevel} / {totalLevels}
      </span>
    </div>
  )
}

export default ProgressBar;
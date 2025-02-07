import '../App.css';
import levels from '../data/levels';

const Task = () => {
  return (
    <div className="tasks-container">
      {levels.map((level) => (
        <div className="task-container" key={level.id}>
          <h2 className="task-title">{level.title}</h2>
          <p className="task-desc">{level.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Task;

import { useParams, useNavigate } from 'react-router-dom';
import CodeMirror from '@uiw/react-codemirror';
import { dracula } from '@uiw/codemirror-theme-dracula';
import lessons from '../data/lessons';
import '../styles/Lessons.css';

const Lessons = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const currentLesson = lessons.find((lesson) => lesson.id === Number(id)); 

  if (!currentLesson) {
    return <div className="lesson-not-found">Lesson not found</div>;
  }

  const handleNextLesson = () => {
    const nextLessonId = currentLesson.id + 1;
    if (nextLessonId <= lessons.length) {
      navigate(`/lesson/${nextLessonId}`);
    } else {
      navigate('/roadmap');
    }
  };

  return (
    <div className="lessons-container">
      <h2 className="lesson-title">{currentLesson.title}</h2>
      <p className="lesson-description">{currentLesson.description}</p>
      <CodeMirror
        value={currentLesson.example}
        height="200px"
        theme={dracula}
        editable={false}
        className="lesson-code"
      />
      <button className="next-lesson-btn" onClick={handleNextLesson}>
        Next lesson
      </button>
    </div>
  );
};

export default Lessons;
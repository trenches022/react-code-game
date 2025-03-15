import { Link } from 'react-router-dom';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/Roadmap.css'

const lessons = [
  { id: 1, title: 'Hello World!', description: 'Here you will learn to work with the `return` statement to output a simple string.' },
  { id: 2, title: 'Variables and Data Types', description: 'Here you will learn to work with variables and assign values using the `let` keyword.' },
  { id: 3, title: 'Functions', description: 'Here you will learn to work with functions, including parameters and the `return` statement.' },
  { id: 4, title: 'Conditional Statements', description: 'Here you will learn to work with conditional statements and the modulo operator to check even numbers.' },
  { id: 5, title: 'Loops', description: 'Here you will learn to work with loops to sum numbers from 1 to a given value.' },
  { id: 6, title: 'Arrays', description: 'Here you will learn to work with arrays and access their first element using indexing.' },
  { id: 7, title: 'Object Manipulation', description: 'Here you will learn to work with objects and access their properties to concatenate strings.' },
  { id: 8, title: 'Array Methods', description: 'Here you will learn to work with the `.map()` method to transform array elements.' },
  { id: 9, title: 'String Manipulation', description: 'Here you will learn to work with strings using `.split()`, `.reverse()`, and `.join()` methods.' },
  { id: 10, title: 'Advanced Object Manipulation', description: 'Here you will learn to work with the spread operator (`...`) to merge objects.' },
  { id: 11, title: 'Array Filtering', description: 'Here you will learn to work with the `.filter()` method to filter array elements.' },
  { id: 12, title: 'Array Reduce', description: 'Here you will learn to work with the `.reduce()` method to find the maximum value in an array.' },
  { id: 13, title: 'Promises', description: 'Here you will learn to work with Promises and the `setTimeout` function for delayed execution.' },
  { id: 14, title: 'Async/Await', description: 'Here you will learn to work with async/await syntax to handle asynchronous operations.' },
  { id: 15, title: 'Error Handling', description: 'Here you will learn to work with conditional checks to handle division by zero errors.' },
  { id: 16, title: 'Closures', description: 'Here you will learn to work with closures to maintain state with inner functions.' },
  { id: 17, title: 'Destructuring', description: 'Here you will learn to work with object destructuring to extract properties into variables.' },
  { id: 18, title: 'Higher-Order Functions', description: 'Here you will learn to work with higher-order functions that accept and call other functions.' },
  { id: 19, title: 'Working with Dates', description: 'Here you will learn to work with the `Date` object to get the current year.' },
  { id: 20, title: 'Chaining Methods', description: 'Here you will learn to work with method chaining to filter, map, and reduce an array.' },
];


const Roadmap = () => {
  return (
    <>
      <h2 className="roadmap-title">Roadmap</h2>
      <VerticalTimeline lineColor="#facc15">
        {lessons.map((lesson) => (
          <VerticalTimelineElement
            key={lesson.id}
            iconStyle={{ background: '#facc15', color: '#151b23' }}
            contentStyle={{ background: '#273241', color: '#fff', boxShadow: '0 3px 0 #2a3748', borderRadius: '20px' }}
            contentArrowStyle={{ borderRight: '8px solid #273241' }}
          >
            <Link to={`/lesson/${lesson.id}`} className="lesson-link">
              <h3 className="lesson-title">{lesson.title}</h3>
              <p className="lesson-description">{lesson.description.split('\n\n')[0]}</p>
            </Link>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </>
  );
};

export default Roadmap
import '../App.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-container">
      <header>
        <Link to='/'>Main</Link>
        <Link to='/levels'>Levels</Link>
        <Link to='/profile'>Profile</Link>
      </header>
    </div>
  )
}

export default Header;
import { useEffect, useState } from 'react';
import '../App.css';
import useStore from '../store/useStore';

const Profile = () => {

  const { userXp, userLevel, completedLevels } = useStore();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const savedUserName = localStorage.getItem('savedUserName');
    if (savedUserName) {
      setUsername(savedUserName);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('savedUserName', username)
  }, [username])

  return (
    <div className='profile-container'>
      <h3>User Profile</h3>
      <img src="https://www.svgrepo.com/show/308016/programmer-software-engineer-coder-software-developer.svg" alt="Avatar" className="avatar" />
      <div className="profile-info">
        <input 
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="username-input"
        />
        <p>XP: {userXp}</p>
        <p>User`s level: {userLevel}</p>
        <p>Completed Levels: {completedLevels.length}</p>
      </div>
    </div>
  )
}

export default Profile;
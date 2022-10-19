import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import User from './components/User';

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState(0);

  useEffect(() => {
    axios.get('https://localhost:3001/getUsers').then((response) => {
      setListOfUsers(response.data);
    });
  }, [listOfUsers]);

  const createUser = () => {
    axios.post('http://localhost:3001/createUser', { name, age, username });
  };
  return (
    <div className="list">
      <h1>사용자 목록</h1>
      <div>
        {listOfUsers.map((user) => {
          return (
            <div className="list">
              <h3>
                Name: {user.name}, Age: {user.age}, USername: {user.username}
              </h3>
            </div>
          );
        })}
      </div>

      <div>
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          onChange={(event) => setAge(event.target.value)}
        />
        <input
          type="text"
          placeholder="USername"
          onChange={(event) => setUsername(event.target.value)}
        />
        <button onClick={createUser}>사용자 등록</button>
      </div>
    </div>
  );
}

export default App;

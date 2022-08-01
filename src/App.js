import './App.css';
import { useEffect, useState } from 'react';
import User from './User';
import AddUser from './AddUser';

function App() {
  
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => setUsers(data))
    .catch((err) => {
      console.log(err)
    })
  }

  const addRow = async (name, email) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteRow = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <h1><span className='headline'>Users List</span> from <span className='headline'>JSON</span> Placeholder</h1>

      <hr />

      <AddUser onAdd={addRow} />

      <div className='users-container'>
      {
        users.map((user) => {
          return (
          <User id={user.id} key={user.key} email={user.email} name={user.name} onDelete={deleteRow} />
          )
        })
      }
      </div>
    </div>
  );
}

export default App;
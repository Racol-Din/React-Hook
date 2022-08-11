import './App.css';
import Navigation from './components/navigation/nav';
import { useEffect, useState } from 'react';
import Todo from './components/todos/todo';
import Covid from './components/covid-table/covid';
const App = () => {
  let [name, setName] = useState('')
  let [address, setAddress] = useState('')
  const [todos, setTodos] = useState([
    { id: "todo1", title: "We will go home", type: "education" },
    { id: "todo2", title: "We will go to school", type: "education" },
    { id: "todo3", title: "We will club", type: "hangout" },
    { id: "todo4", title: "We will par", type: "hangout" }
  ])


  const handleClick = (event) => {
    if (!name) {
      alert('empty name')
      return;
    }
    let todo = { id: Math.floor((Math.random() * 1000000)) + 1, title: name, type: "hangout" }
    setTodos([...todos, todo])
    setName('')
  }
  const handleDelete = (id) => {
    let current = todos
    current = current.filter(item => item.id !== id)
    setTodos([...current])
  };
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <h2>
          Learn React with Racol {name}
        </h2>
        <Covid />

        {/* <Todo
          todos={todos}
          title="All todos"
          deleteDataTodos={handleDelete}
        />
        <Todo
          todos={todos.filter(item => item.type === "hangout")}
          title="hangout todos"
          deleteDataTodos={handleDelete}
        />
        <input type="text" value={address} placeholder="address" onChange={(event) => { setAddress(event.target.value) }} />
        <input type="text" value={name} placeholder="name" onChange={(event) => { setName(event.target.value) }} />
        <button type="button" onClick={(event) => handleClick(event)}>Click</button> */}

      </header>
    </div>
  );
}

export default App;

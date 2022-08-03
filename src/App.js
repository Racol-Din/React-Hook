import './App.css';
import Navigation from './components/navigation/nav';
import { useState } from 'react';
const App = () => {
  let [name, setName] = useState('khai')
  let [address, setAddress] = useState('')
  const [todos, setTodos] = useState([
    { id: "todo1", title: "We will go home" },
    { id: "todo2", title: "We will go to school" }
  ])
  const handleClick = (event) => {
    if (!address) {
      alert('empty address')
      return;
    }
    let todo = { id: "aaaa", title: address }
    setTodos([...todos, todo])
    setAddress('')
  }
  const handleOnChangeInput = (event) => {
    setAddress(event.target.value)
    console.log(event.target.value);
  }
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <h2>
          Learn React with Racol {name}
        </h2>
        <div className="todos-container">
          {todos.map(todo => {
            return (
              <>
                <li className='todos-child' key={todo.id}> {todo.title}</li>
              </>
            )
          })}

        </div>
        <input type="text" value={address} onChange={(event) => { setAddress(event.target.value) }} />
        <button type="button" onClick={(event) => handleClick(event)}>Click</button>

      </header>
    </div>
  );
}

export default App;

import './App.css';
import Navigation from './components/navigation/nav';
import { useState } from 'react';
const App = () => {
  let obj = { name: "khai", age: 23 }
  let [name, setName] = useState('khai')
  let [address, setAddress] = useState('')
  const handleClick = (event) => {
    setName(address)
    console.log(`>> click me`, address);
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
        <input type="text" value={address} onChange={(event) => { setAddress(event.target.value) }} />
        <button type="button" onClick={(event) => handleClick(event)}>Click</button>

      </header>
    </div>
  );
}

export default App;

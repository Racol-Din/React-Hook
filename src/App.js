import './App.css';
import Navigation from './components/navigation/nav';
// template + logic 
const App = () => {
  let obj = { name: "khai", age: 23 }
  const handleClick = (event) => {
    console.log(`clear alll`, event.target.value);

  }
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <h2>
          Learn React with Racol {obj.age}
        </h2>
        <input type="text" value={obj.name} onClick={(event) => handleClick(event)} />
        <button type="button" onClick={(event) => handleClick(event)}>Click</button>

      </header>
    </div>
  );
}

export default App;

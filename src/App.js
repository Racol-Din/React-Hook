import './App.css';

// template + logic 
const App = () => {
  let obj = { name: "khai", age: 23 }
  const handleClick = (a) => {
    console.log(">>>Click me", a);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Learn React with Racol {obj.age}
        </h2>
        <button type="button" onClick={(event) => handleClick(event)}>Click</button>

      </header>
    </div>
  );
}

export default App;

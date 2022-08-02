import './App.css';

// template + logic 
const App = () => {
  let obj = { name: "khai", age: 23 }
  const link = `https://github.com/Racol-Din/React-Hook`;
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Learn React with Racol {obj.age}
        </h2>
        <p> {JSON.stringify(obj)}</p>
        <a href={link} target="_blank" rel="noreferrer"> GITHUB</a>

      </header>
    </div>
  );
}

export default App;

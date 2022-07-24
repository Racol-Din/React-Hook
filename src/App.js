import logo from './logo.svg';
import './App.css';

// template + logic 
const App = () => {
  let obj = { name: "khai", age: 23 }
  const link = `https://github.com/Racol-Din/React-Hook`;
  return (
    <div className="App">
      {console.log(">>> check", { obj })}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Learn React with Racol {obj.age}
        </h2>
        <a href={link} target="_blank" rel="noreferrer"> GITHUB</a>

      </header>
    </div>
  );
}

export default App;

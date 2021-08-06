import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greet name='bhavani'/>
        <Greet name='shankar'/>
      </header>
    </div>
  );
}

export default App;

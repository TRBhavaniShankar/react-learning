import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import './components/appStyles.css'
import styles from './components/appStyles.module.css';
import Inline from './components/Inline';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Greet name='bhavani'/>
        <Greet name='shankar'/> */}
        {/* <NameList/> */}
        <Stylesheet primary={false} />
        <h1 className={styles.success}>success</h1>
        <h1 className='error'>error</h1>
        <Inline />
      </header>
    </div>
  );
}

export default App;

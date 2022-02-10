import './css/App.css';
import { Boxes } from './components/Boxes';
import { Display } from './components/Display';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Reedax Calculator
      </header>
      <div className="calculator">
        <>
          <Display text='0'/>
        </>
        <div className="Buttonsbox">
          <Boxes />
        </div>
      </div>
    </div>
  );
}

export default App;

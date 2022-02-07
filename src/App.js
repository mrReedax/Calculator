import './App.css';
import { Boxes } from './Boxes';
import { Display } from './Display';

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

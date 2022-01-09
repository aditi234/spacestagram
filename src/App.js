import './App.css';
import Navbar from './components/Navbar';
import APOD from './components/APOD';
import MarsRover from './components/MarsRover';

function App() {
  return (
    <div className="App">
       <Navbar />
       <APOD />
       <MarsRover />
    </div>
  );
}

export default App;


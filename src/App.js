import './App.css';
import { Routes, Route } from 'react-router-dom';
import Work from './components/Work.js';
import About from './components/About.js';
import Fishsim from './components/Fishsim.js';
import Pixelart from './components/Pixelart.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Work />} />
        <Route path='/about' element={<About />} />
        <Route path='/fishsim' element={<Fishsim />} />
        <Route path='/pixelart' element={<Pixelart />} />
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Work from './components/Work.js';
import About from './components/About.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Work />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

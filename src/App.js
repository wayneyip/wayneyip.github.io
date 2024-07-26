import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Work from './components/Work.js';
import About from './components/About.js';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Navbar />
      <Work />
      <About />
    </div>
  );
}

export default App;

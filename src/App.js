import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Work from './components/Work.js';
import About from './components/About.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Work />
      <About />
      <Footer />
    </div>
  );
}

export default App;

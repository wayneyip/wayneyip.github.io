import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.js';
import Work from './components/Work.js';
import About from './components/About.js';
import Fishsim from './components/Fishsim.js';
import Pixelart from './components/Pixelart.js';
import Mah from './components/Mah.js';
import Dmm from './components/Dmm.js';
import Ginkgo from './components/Ginkgo.js';
import Mayatools from './components/Mayatools.js';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Work />} />
        <Route path='/about' element={<About />} />
        <Route path='/fishsim' element={<Fishsim />} />
        <Route path='/pixelart' element={<Pixelart />} />
        <Route path='/mah' element={<Mah />} />
        <Route path='/dmm' element={<Dmm />} />
        <Route path='/ginkgo' element={<Ginkgo />} />
        <Route path='/mayatools' element={<Mayatools />} />
      </Routes>
    </div>
  );
}

export default App;

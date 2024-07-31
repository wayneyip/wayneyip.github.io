import Navbar from './Navbar.js';
import Footer from './Footer.js';

export default function Fishsim()
{
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
        <div className="flex-grow">
          <p>placeholder text</p>
        </div>
      <Footer />
    </div>
  )
}
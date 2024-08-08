import Navbar from './Navbar.js';
import Detail from './Detail.js';
import BackToHome from './BackToHome.js';
import Footer from './Footer.js';

const details = [
  {
    imgSrc: "fishsim/rayavoid.gif", 
    title: "Boids with Ray Avoidance",
    text: "Each fish's movement is simulated using the boids flocking algorithm. I derived my own vector math for boids to avoid the mouse's raycast, since ray avoidance is not a common feature in boids implementations."    
  },
  {
    imgSrc: "fishsim/fish.gif", 
    title: "Fish Shader with Caustic Projections",
    text: "To emulate caustic lighting, the fish shader samples a noise texture in world space. Also, each fish is assigned a different offset for its sine wave animation, so that they don't swim in sync."            
  },
  {
    imgSrc: "fishsim/surface.gif", 
    title: "Water Surface Shader with Caustic Reflections",
    text: "Using two samples of a normal map and some math tricks, I created a water surface that faces downwards but picks up specular highlights from the directional light above."    
  },
  {
    imgSrc: "fishsim/godrays.gif", 
    title: "Low-Cost God Rays Shader",
    text: "I derived a way to fake god rays with a simple cone mesh. The shader samples a noise texture in polar coordinates, with the offset being changed over time to create shifting beams."    
  },
]

export default function Fishsim()
{
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
        <div className="flex-grow">
          <div className="container max-w-screen-lg mx-auto px-4 py-20">
            <h1 className="mb-8 text-left text-3xl font-medium text-gray-800">Three.js Fish Simulation</h1>
              <img className="w-full mx-auto mb-8" src="fishsim/main.gif" alt="Three.js Fish Simulation"/>
              <div className="text-left mb-20">
                <p><span className="font-medium">Role:</span> Solo Developer</p>
                <p><span className="font-medium">Tech:</span> Three.js, GLSL, Node.js, Vite, Vercel</p>
                <br/>
                <p>An interactive fish simulation that runs on the browser. Supports desktop, mobile and tablet devices for mouse and touch input.</p>
                <br/>
                <p>I built this to apply my initial learnings from Three.js Journey, the comprehensive 93-hour course by Bruno Simon.</p>
                <br/>
                <br/>
                <a
                  href="https://wayne-ocean.vercel.app/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mr-5 py-2 px-6 text-white text-lg bg-green-500 hover:bg-green-600">
                  Live Demo
                </a>
                <a
                  href="https://github.com/wayneyip/fishtank"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mr-5 py-2 px-6 text-white text-lg bg-green-500 hover:bg-green-600">
                  GitHub
                </a>
              </div>
            {details.map((detail, index) => (
              <Detail key={index} imgSrc={detail.imgSrc} title={detail.title} text={detail.text} />
            ))}
          </div>
        </div>
      <BackToHome />
      <Footer />
    </div>
  )
}
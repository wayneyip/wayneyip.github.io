import Navbar from './Navbar.js';
import Detail from './Detail.js';
import Footer from './Footer.js';

const details = [
  {
    imgSrc: "work_fish.png", 
    title: "Boids with Ray Avoidance",
    text: "Each fish's movement is simulated using the boids flocking algorithm. I derived my own vector math for boids to avoid the mouse's raycast, since ray avoidance is not a common feature in boids implementations."    
  },
  {
    imgSrc: "work_fish.png", 
    title: "Fish Shader with Caustic Projections",
    text: "I customised the default three.js lambert for the fish. It performs a sine wave animation on the vertex shader, and samples a noise texture in world space for the caustics lighting effect."            
  },
  {
    imgSrc: "work_fish.png", 
    title: "Water Surface Shader with Caustic Reflections",
    text: "Using two samples of a normal map and some math tricks, I landed on a water surface that faces downwards but picks up specular highlights from the directional light above."    
  },
  {
    imgSrc: "work_fish.png", 
    title: "Fast Procedural God Ray Shader",
    text: "God rays are faked with a single cone mesh, sampling a noise texture in polar coordinates that shift over time."    
  },
]

export default function Fishsim()
{
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
        <div className="flex-grow">
          <div className="container max-w-screen-lg mx-auto py-20">
            <h1 className="mb-8 text-left text-3xl font-medium text-gray-800">Three.js Fish Simulation</h1>
              <img className="w-full mx-auto mb-8" src="work_fish.png" alt="Three.js Fish Simulation"/>
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
      <Footer />
    </div>
  )
}
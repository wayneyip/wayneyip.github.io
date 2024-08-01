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
    title: "Fish Shader",
    text: "The fishes use an extended three.js lambert shader with sine wave vertex animation, and a noise texture sampled in world space for the caustics lighting effect."            
  },
  {
    imgSrc: "work_fish.png", 
    title: "Water Surface Shader",
    text: "With only one normal map and a couple of math tricks, I got a reflective caustics effect on the water surface shader that picks up light from above."    
  },
  {
    imgSrc: "work_fish.png", 
    title: "Fast Procedural Godrays",
    text: "God rays are faked with a single cone mesh that uses the same noise texture, sampled with polar coordinates that shift over time."    
  },
]

export default function Fishsim()
{
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
        <div className="flex-grow">
          <div className="container max-w-screen-lg mx-auto py-20">
            <h1 className="mb-4 text-left text-3xl font-medium text-gray-800">Three.js Fish Simulation</h1>
            <div className="flex">
              <img className="w-2/3 pr-10" src="work_fish.png" alt="Three.js Fish Simulation"/>
              <div className="flex-col text-left">
                <p>Role: Solo Developer</p>
                <p>Tech: Three.js, GLSL, Node.js, Vite, Vercel</p>
                <br/>
                <p>An interactive fish simulation that runs on the browser. I built this to consolidate my learnings from Three.js Journey, the renowned 93-hour course by Bruno Simon.</p>
                <br/>
                <a
                  href="https://wayne-ocean.vercel.app/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="py-2 px-6 text-white text-lg bg-green-500 hover:bg-green-600">
                  Live Demo
                </a>
              </div>
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
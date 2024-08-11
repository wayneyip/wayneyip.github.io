import Navbar from './Navbar.js';
import DetailsGroup from './DetailsGroup.js';
import Detail from './Detail.js';
import BackToHome from './BackToHome.js';
import Footer from './Footer.js';

const boidsDetails = [
  {
    imgSrc: "fishsim/rayavoid.mp4", 
    title: "Boids Procedural Animation",
    text: "Each fish is procedurally animated via the boids flocking algorithm, always trying to swim together in a school. They also respond to user input (mouse, pen or touch)."    
  },
  {
    imgSrc: "fishsim/rayavoid_code.jpg", 
    title: "Ray Avoidance",
    text: "I derived my own vector math solution for boids to avoid the mouse's raycast, since ray avoidance is not a common feature in boids implementations."    
  },
  {
    imgSrc: "fishsim/rayavoid_vectors.jpg", 
    title: "Breakdown: Vector Setup",
    text: "This is a top-down view of the 3D vectors at play, with the mouse casting a ray into the screen. (\"Mouse\" is a shorthand here for PointerEvent, which also supports pen and touch input.)"
  },
  {
    imgSrc: "fishsim/rayavoid_dot.jpg", 
    title: "Breakdown: Dot Product",
    text: "If the boid is facing the mouse (and near the mouse), I add a vector to the boid's velocity to steer it away -- in this case, in the direction of negative d."    
  },
]

const shaderDetails = [
  {
    imgSrc: "fishsim/godrays.mp4", 
    title: "Optimized Sunbeams Shader",
    text: "These hundreds of sunbeams are actually just a single cone mesh. Its shader samples a noise texture in polar coordinates, with the offset being changed over time to create shifting beams."    
  },
  {
    imgSrc: "fishsim/surface.mp4", 
    title: "Water Surface Shader with Caustic Reflections",
    text: "Using two samples of a normal map and some math tricks, I created a water surface that faces downwards but picks up specular highlights from the directional light above."    
  },
  {
    imgSrc: "fishsim/fish.mp4", 
    title: "Fish Shader with Caustic Projections",
    text: "To emulate caustic lighting, the fish shader samples a Voronoi texture in world space. Also, each fish is assigned a different offset for its sine wave animation, so that they don't swim in sync."            
  },
  {
    imgSrc: "fishsim/ground.mp4", 
    title: "Ground Shader with Caustic Projections",
    text: "The ground uses the same Voronoi texture as the fish, scrolling it at two different speeds and scales and then taking the minimum value, resulting in the shifting caustics effect."    
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
              <video className="w-full mx-auto mb-8" autoPlay loop muted playsInline> 
                <source src='fishsim/main.mp4' type="video/mp4" />
              </video>
              <div className="text-left mb-20">
                <p><span className="font-medium">Role:</span> Solo Developer</p>
                <p><span className="font-medium">Tech:</span> Three.js, GLSL, Node.js, Vite, Vercel</p>
                <br/>
                <p>An Three.js fish simulation with many custom GLSL shaders. Supports desktop, mobile and tablet devices for mouse and touch input.</p>
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
            <DetailsGroup groupName="Boids with Ray Avoidance" details={boidsDetails} />
            <DetailsGroup groupName="Custom GLSL Shaders" details={shaderDetails} />
          </div>
        </div>
      <BackToHome />
      <Footer />
    </div>
  )
}
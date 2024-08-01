import Navbar from './Navbar.js';
import DetailsGroup from './DetailsGroup.js';
import Footer from './Footer.js';

const characterDetails = [
  {
    imgSrc: "work_grizzly.png", 
    title: "Outsourcer Rig Management",
    text: "I guided outsourcers through the development of all character rigs, which helped us nail down the flowing motion of Elsa’s dress ribbons and Meilin Lee’s expressive smiles, among many other effects."    
  },
  {
    imgSrc: "work_grizzly.png", 
    title: "Custom Camera Animation Setup",
    text: "I also established the Maya-to-Unity pipeline for custom camera animations that empower all of the game’s dynamic character intros."            
  },
  {
    imgSrc: "work_grizzly.png", 
    title: "Character Animation Implementations",
    text: "I took charge of implementing all character animations in Unity with the Animancer plugin, working closely with animators, engineers and VFX artists to coordinate the timing of each attack."            
  },
  {
    imgSrc: "work_grizzly.png", 
    title: "Avatar Mask Scripting",
    text: "I also extended our Animancer setup with C# scripts to incorporate avatar masks, allowing our characters to run and attack smoothly for a dynamic battlefield."            
  }
]

export default function Dmm()
{
	return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
        <div className="flex-grow">
          <div className="container max-w-screen-lg mx-auto py-20">
            <h1 className="mb-8 text-left text-3xl font-medium text-gray-800">Disney Melee Mania</h1>
              <p className="text-left">Disney Melee Mania is a 3v3 arena brawler video game featuring Disney and Pixar characters.</p>
              <br/>
              <img className="w-full mx-auto mb-8" src="work_grizzly.png" alt="Disney Melee Mania"/>
              <div className="text-left mb-20">
                <p><span className="font-medium">Role:</span> Technical Artist</p>
                <p><span className="font-medium">Platforms:</span> iOS, tvOS, macOS</p>
                <p><span className="font-medium">Software:</span> Unity (Universal Renderer Pipeline), Maya</p>
                <br/>
                <p>I worked as a technical artist in a team of 2, with these main contributions:</p>
                <ol>
                	<li><span className="font-medium">Established workflows and standards</span> for performance profiling, Python scripting, and VFX creation.</li>
									<li><span className="font-medium">Organized regular optimization passes</span> on WebGL and Android, maintaining budgets for FPS, memory and loading times every milestone.</li>
									<li><span className="font-medium">Streamlined character LOD creation pipeline</span> by developing Maya tools in Python to automate texture baking, skinning, and exporting.</li>
									<li><span className="font-medium">Created custom shaders</span> in Unity (Shader Graph, HLSL) for characters, environments, and post-processing.</li>
									<li><span className="font-medium">Developed Blender plugin</span> in Python for artists to rapidly iterate over 5000 image renders across 4 months.</li>
              	</ol>
                <br/>
                <br/>
                <a
                  href="https://wayne-ocean.vercel.app/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mr-5 py-2 px-6 text-white text-lg bg-green-500 hover:bg-green-600">
                  Website
                </a>
              </div>
            <DetailsGroup groupName="Character Asset Management and Implementation" details={characterDetails} />
          </div>
        </div>
      <Footer />
    </div>
	)
}
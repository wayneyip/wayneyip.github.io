import Navbar from './Navbar.js';
import DetailsGroup from './DetailsGroup.js';
import Footer from './Footer.js';

const dangerZoneDetails = [
  {
    imgSrc: "work_mah.jpg", 
    title: "Custom Render Ordering",
    text: "In implementing the gameplay-critical Danger Zone shader, I worked closely with all production departments (Art, Engineering, Design). Since the shader gets drawn over all opaques, I devised a custom rendering order to balance its visual fidelity with the visibility of gameplay elements (characters, projectiles, environments)."    
  },
  {
    imgSrc: "work_mah.jpg", 
    title: "Tile-Glitching Shader Effect",
    text: "I created the shader’s tile-glitching effect that shows the environment dissolving into cyber-space. Primary development of the shader is by fellow technical artist Dedrick Koh."            
  }
]

const lodToolsDetails = [
  {
    imgSrc: "work_mah.jpg", 
    title: "Pipeline Automation",
    text: "For generating our character LODs, I developed a suite of Maya Python tools that automated many tedious processes across the pipeline, including texture baking, rigging and skinning, cleanup and exporting."    
  },
  {
    imgSrc: "work_mah.jpg", 
    title: "Time Saved",
    text: "This tool suite reduced the work of LOD generation from 3 weeks to 1 week for the 3D team, accelerating our output of iconic action hero characters in the game."            
  }
]

const pfpGenDetails = [
  {
    imgSrc: "work_mah.jpg", 
    title: "Renderer Feature Implementation",
    text: "This tool enabled concept artists to render out our 5000 NFT images without supervision, allowing for rapid art iteration over 4 months to achieve the final product shown above."    
  },
  {
    imgSrc: "work_mah.jpg", 
    title: "Tile-Glitching Effect",
    text: "I implemented this tool in Python with a host of features, from image recoloring to various search filters, based on the art team's requests and feedback. 2D artists were able to use the tool on their own for rapid iteration."  }
]

export default function Mah()
{
	return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
        <div className="flex-grow">
          <div className="container max-w-screen-lg mx-auto py-20">
            <h1 className="mb-8 text-left text-3xl font-medium text-gray-800">Mighty Action Heroes</h1>
              <p className="text-left">Mighty Action Heroes is a shooting arena game where mercenaries battle it out in an epic action movie-inspired showdown. Dodge bullets, hurl grenades, and deploy heroic abilities to emerge victorious.</p>
              <br/>
              <img className="w-full mx-auto mb-8" src="work_mah.jpg" alt="Mighty Action Heroes"/>
              <div className="text-left mb-20">
                <p><span className="font-medium">Role:</span> Technical Artist</p>
                <p><span className="font-medium">Tech:</span> Unity (Universal Renderer Pipeline), Shader Graph, C#, Maya, Blender, Python</p>
                <p><span className="font-medium">Platforms:</span> WebGL, Android</p>
                <br/>
                <p>I worked as a technical artist in a team of 2, with these main contributions:</p>
                <br/>
                <br/>
                <a
                  href="https://wayne-ocean.vercel.app/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mr-5 py-2 px-6 text-white text-lg bg-green-500 hover:bg-green-600">
                  Live Game
                </a>
              </div>
            <DetailsGroup groupName="Danger Zone Renderer Feature" details={dangerZoneDetails} />
            <DetailsGroup groupName="LOD Generation Maya Tools" details={lodToolsDetails} />
            <DetailsGroup groupName="PFP Generation Blender Tool" details={pfpGenDetails} />
          </div>
        </div>
      <Footer />
    </div>
	)
}
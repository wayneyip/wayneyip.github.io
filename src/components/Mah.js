import Navbar from './Navbar.js';
import DetailsGroup from './DetailsGroup.js';
import BackToHome from './BackToHome.js';
import Footer from './Footer.js';

const lodToolsDetails = [
  {
    imgSrc: "mah_lodtools.png", 
    title: "Pipeline Automation",
    text: "For generating our character LODs, I developed a suite of Maya Python tools that automated many tedious processes across the pipeline, including texture baking, rigging and skinning, cleanup and exporting."    
  },
  {
    imgSrc: "mah_lod2.png", 
    title: "Time Saved",
    text: "This tool suite reduced the work of LOD generation from 3 weeks down to 1 week for the 3D team, accelerating the art team's output of hero characters."            
  }
]

const pfpGenDetails = [
  {
    imgSrc: "mah_bbs.png", 
    title: "Image Combination and Batch Rendering",
    text: "This plugin enabled 2D artists to combine their body part assets and render 5000 profile pictures at 2K resolution within 30 minutes. This allowed for rapid art iteration over 4 months to achieve the final product shown above."    
  },
  {
    imgSrc: "mah_tool.png", 
    title: "Quality-of-Life Features",
    text: "I created this plugin in Python with a host of features, from image recoloring to various search filters, based on the art team's requests and feedback."  }
]

const dangerZoneDetails = [
  {
    imgSrc: "mah_dangerzone.mp4", 
    title: "Render Pipeline Customization",
    text: "To implement the gameplay-critical Danger Zone shader, I worked closely with all production departments (Art, Engineering, Design). Since the shader gets drawn over all opaques, I devised a custom rendering order to handle the visibility of gameplay elements (characters, projectiles, and environments)."    
  },
  {
    imgSrc: "mah_dangerzone_glitch.mp4", 
    title: "Tile-Glitching Shader Effect",
    text: "I created the shader’s tile-glitching effect that suggests the environment dissolving into cyber-space, and supported general development of the shader by my teammate Dedrick Koh."            
  }
]

export default function Mah()
{
	return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
        <div className="flex-grow">
          <div className="container max-w-screen-lg mx-auto px-4 py-20">
            <h1 className="mb-8 text-left text-3xl font-medium text-gray-800">Mighty Action Heroes</h1>
              <p className="text-left">Mighty Action Heroes is a shooting arena game where mercenaries battle it out in an epic action movie-inspired showdown. Dodge bullets, hurl grenades, and deploy heroic abilities to emerge victorious.</p>
              <br/>
              <div className="aspect-video mb-12">
                <iframe 
                className="w-full h-full"
                  src="https://www.youtube.com/embed/wBT7RxdP9wM" 
                  title="[Official] Open Beta: Mighty Road | Mighty Action Heroes" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen>
                </iframe>
              </div>
              <div className="text-left mb-20">
                <p><span className="font-medium">Role:</span> Technical Artist</p>
                <p><span className="font-medium">Platforms:</span> WebGL, Android</p>
                <p><span className="font-medium">Software:</span> Unity (Universal Renderer Pipeline), Maya, Blender, Xcode</p>
                <br/>
                <p>I worked on this project as a technical artist at Mighty Bear Games, from prototyping to soft launch (spanning 1.5 years).</p>
                <br />
                <p>My main contributions:</p>
                <ul className="list-disc list-inside leading-loose">
                	<li><span className="font-medium">Established workflows and standards</span> for performance profiling, Python scripting, and VFX creation.</li>
									<li><span className="font-medium">Organized regular optimization passes</span> on WebGL and Android, maintaining budgets for FPS, memory and loading times every milestone.</li>
									<li><span className="font-medium">Streamlined workflows for artists</span> by developing automation tools in Maya and Blender.</li>
									<li><span className="font-medium">Researched and implemented Unity plugins</span> for accelerating art workflows and supporting gameplay features.</li>
              	</ul>
                <br/>
                <br/>
                <a
                  href="https://app.mightynet.xyz"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mr-5 py-2 px-6 text-white text-lg bg-green-500 hover:bg-green-600">
                  Live Game
                </a>
              </div>
            <DetailsGroup groupName="LOD Generation Maya Tools" details={lodToolsDetails} />
            <DetailsGroup groupName="PFP Generation Blender Plugin" details={pfpGenDetails} />
            <DetailsGroup groupName="Danger Zone Renderer Feature" details={dangerZoneDetails} />
          </div>
        </div>
      <BackToHome />
      <Footer />
    </div>
	)
}
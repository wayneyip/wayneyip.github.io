import Navbar from './Navbar.js';
import DetailsGroup from './DetailsGroup.js';
import BackToHome from './BackToHome.js';
import Footer from './Footer.js';


const scatterToolDetails = [
  {
    imgSrc: "work_grizzly.png", 
    title: "Visual Result",
    text: "This tool empowered the set dressing around all of Disney Melee Mania's battle arenas, from little forests to bunches of candy canes."    
  },
  {
    imgSrc: "work_grizzly.png", 
    title: "Time Saved",
    text: "This tool reduced the set dressing work for each battle arena from hours down to seconds, as 3D artists no longer had to fuss over each object's placement within the railings."            
  },
]

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
    title: "Character Asset Implementation",
    text: "I implemented all character rigs and animations in Unity, working closely with animators, engineers and VFX artists. Many animations had multiple phases tied to VFX and code triggers, so it was essential to coordinate timings and fix bugs."            
  },
  {
    imgSrc: "work_grizzly.png", 
    title: "Avatar Mask Scripting",
    text: "I extended our Animancer setup with C# scripts to incorporate avatar masks, allowing our characters to run and attack smoothly for a dynamic battlefield."            
  }
]

const charRigDetails = [
  {
    imgSrc: "work_grizzly.png", 
    title: "Abstract Bing Bong Rig",
    text: "I took charge of rigging Abstract Bing Bong, whose logic-defying anatomy required a lot of unconventional technical setup for animation."    
  },
  {
    imgSrc: "work_grizzly.png", 
    title: "Rig in Action",
    text: "This custom rig empowered the various zany animations and facial expressions behind this unlockable skin for Bing Bong."            
  },
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
                <p><span className="font-medium">Platforms:</span> iOS, tvOS, macOS (Apple Arcade)</p>
                <p><span className="font-medium">Software:</span> Unity (Universal Renderer Pipeline), Maya, Xcode</p>
                <br/>
                <p>I worked on this project as a technical artist at Mighty Bear Games, from pre-production to shipping and post-launch updates (spanning 1.5 years).</p>
                <br />
                <p>My main contributions:</p>
                <ul className="list-disc list-inside leading-loose">
                	<li><span className="font-medium">Managed outsourcers</span> on delivery and iteration of 20+ Disney-Pixar character rigs over 18 months.</li>
									<li><span className="font-medium">Implemented all character assets</span> in close collaboration with animators, engineers and VFX artists.</li>
									<li><span className="font-medium">Optimized performance</span> on mobile devices with Xcode, bringing low-end iOS devices from 20 to 60 FPS.</li>
									<li><span className="font-medium">Developed tools</span> in C# to streamline art workflows in Unity.</li>
									<li><span className="font-medium">Created character rigs</span> for characters with unconventional anatomy.</li>
              	</ul>
                <br/>
                <br/>
                <a
                  href="https://apps.apple.com/us/app/disney-melee-mania/id1544934886"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mr-5 py-2 px-6 text-white text-lg bg-green-500 hover:bg-green-600">
                  App Store
                </a>
              </div>
            <DetailsGroup groupName="Spline-Based Scatter Tool" details={scatterToolDetails} />
            <DetailsGroup groupName="Character Asset Management and Implementation" details={characterDetails} />
            <DetailsGroup groupName="Abstract Bing Bong Rig" details={charRigDetails} />
          </div>
        </div>
      <BackToHome />
      <Footer />
    </div>
	)
}
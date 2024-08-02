import Navbar from './Navbar.js';
import DetailsGroup from './DetailsGroup.js';
import Footer from './Footer.js';


const scatterToolDetails = [
  {
    imgSrc: "work_ginkgo.png", 
    title: "Automatic Weight Painting Algorithm",
    text: "To ensure smooth deformation, I developed an algorithm to skin the cloth mesh with polynomial distribution in a single click."    
  },
  {
    imgSrc: "work_ginkgo.png", 
    title: "Adjustable Power Curvature",
    text: "To rapidly prototype different stretch behaviors, I designed the algorithm to allow user input of different powers for different curvatures: linear, quadratic, cubic, etc."            
  },
  {
    imgSrc: "work_ginkgo.png", 
    title: "Adjustable Ledge Distance",
    text: "Since our fabric rested on ledges in the game, I designed the algorithm to account for variable ledge distances, painting ledge areas as 100% solid and scaling the remaining gradients accordingly."            
  },
  {
    imgSrc: "work_ginkgo.png", 
    title: "Visual Result",
    text: "The rigged fabric is also layered with in-engine cloth simulation. I tuned the cloth painting and physics settings to achieve dynamic stretching behavior that was both responsive and stable."            
  },
]

const chaseYokaiDetails = [
  {
    imgSrc: "work_ginkgo.png", 
    title: "Experimental Anatomy",
    text: "I directed our artists to mess with conventional anatomy, bending the knees back and removing the clavicles for a spider-like silhouette."    
  },
  {
    imgSrc: "work_ginkgo.png", 
    title: "IK/FK Blend Controls",
    text: "For its intense clambering motions, I set up IK/FK blending using my Kinematify autorigger, allowing our animator to switch as needed."            
  },
]

const spiderYokaiDetails = [
  {
    imgSrc: "work_ginkgo.png", 
    title: "Curve-based Eyelid Rig",
    text: "I rigged the spider's eyelids using my Facify autorigger, allowing our animator to convey a range of expressions with a single eye."    
  },
  {
    imgSrc: "work_ginkgo.png", 
    title: "Rounded Silhouette Design",
    text: "I directed our artists to distinguish this friendly creature's silhouette from the Chase Yokai using round shapes and fuzzy legs."            
  },
]

const lanternYokaiDetails = [
  {
    imgSrc: "work_ginkgo.png", 
    title: "Minimalist Rig",
    text: "I designed this rig as an exercise in efficiency, using only 3 joints to achieve stretchy behavior with the jaws and eyeball."    
  },
  {
    imgSrc: "work_ginkgo.png", 
    title: "Dynamic Tassel Simulation",
    text: "To make lantern interactions engaging, I simulated the 2 bones in its tassel as RigidBodies, creating swishy behavior as the player aims their needle."            
  },
]

export default function Ginkgo()
{
	return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
        <div className="flex-grow">
          <div className="container max-w-screen-lg mx-auto py-20">
            <h1 className="mb-8 text-left text-3xl font-medium text-gray-800">Ginkgo</h1>
              <p className="text-left">Inspired by East Asian horror, Ginkgo is a first-person horror game where you use a magic needle to solve puzzles and outsmart surreal monsters.</p>
              <br/>
              <img className="w-full mx-auto mb-8" src="work_ginkgo.png" alt="Ginkgo"/>
              <div className="text-left mb-20">
                <p><span className="font-medium">Role:</span> Art Lead</p>
                <p><span className="font-medium">Platforms:</span> Windows, macOS</p>
                <p><span className="font-medium">Software:</span> Unreal Engine 4, Maya</p>
                <br/>
                <p>I worked on this project as the Art Lead over 1 year, directing a team of 10 artists.</p>
                <br/>
                <a
                  href="https://store.steampowered.com/app/1335030/Ginkgo/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mr-5 py-2 px-6 text-white text-lg bg-green-500 hover:bg-green-600">
                  Steam
                </a>
              </div>
            <DetailsGroup groupName="Sewable Cloth Rigging Tool" details={scatterToolDetails} />
            <DetailsGroup groupName="Chase Yokai" details={chaseYokaiDetails} />
            <DetailsGroup groupName="Spider Yokai" details={spiderYokaiDetails} />
            <DetailsGroup groupName="Lantern Yokai" details={lanternYokaiDetails} />
          </div>
        </div>
      <Footer />
    </div>
	)
}
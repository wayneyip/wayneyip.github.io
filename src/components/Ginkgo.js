import Navbar from './Navbar.js';
import DetailsGroup from './DetailsGroup.js';
import BackToHome from './BackToHome.js';
import Footer from './Footer.js';


const clothToolDetails = [
  {
    imgSrc: "ginkgo_clothsim.gif", 
    title: "Visual Result",
    text: "Sewing cloth together is Ginkgo's main game mechanic, used to create paths and hide from enemies. I created a rigging tool to ensure that we could deliver on the visual impact of such a unique mechanic."
  },
  {
    imgSrc: "ginkgo_clothrig.gif", 
    title: "Automatic Weight Painting Algorithm",
    text: "To ensure smooth deformation when sewing, I developed an algorithm to skin the cloth mesh with polynomial distribution in a single click."    
  },
  {
    imgSrc: "ginkgo_clothcurve.gif", 
    title: "Adjustable Power Curvature",
    text: "To rapidly prototype different cloth-stretching behaviors, I designed the algorithm to allow user input of different powers for different curvatures: linear, quadratic, cubic, etc."            
  },
  {
    imgSrc: "ginkgo_clothledge.gif", 
    title: "Adjustable Ledge Distance",
    text: "Since much of our cloth rested on ledges in the game, I designed the algorithm to account for variable ledge distances, painting ledge areas as 100% solid and scaling the remaining gradients accordingly."            
  },
]

const chaseYokaiDetails = [
  {
    imgSrc: "ginkgo_chase.gif", 
    title: "Experimental Anatomy",
    text: "For this major antagonist creature, I directed our artists to mess with conventional anatomy, bending the knees back and removing the clavicles for an unsettling, spider-like silhouette."    
  },
  {
    imgSrc: "ginkgo_chaserig.gif", 
    title: "IK/FK Blend Controls",
    text: "For its intense clambering motions, I set up IK/FK blending using my Kinematify autorigger, allowing our animator to switch as needed."            
  },
]

const spiderYokaiDetails = [
  {
    imgSrc: "ginkgo_spider.gif", 
    title: "Rounded Silhouette Design",
    text: "I directed our artists to distinguish this friendly creature's silhouette from the Chase Yokai using round shapes and fuzzy legs."            
  },
  {
    imgSrc: "ginkgo_spiderrig.gif", 
    title: "Curve-based Eyelid Rig",
    text: "I rigged the spider's eyelids using my Facify autorigger, allowing our animator to convey a range of expressions with a single eye."    
  },
]

const lanternYokaiDetails = [
  {
    imgSrc: "ginkgo_lantern.gif", 
    title: "Dynamic Tassel Simulation",
    text: "To draw player attention to this tutorial creature, I simulated the 2 bones in its tassel as RigidBodies, creating swishy behavior as the player aims their needle."            
  },
  {
    imgSrc: "ginkgo_lanternrig.gif", 
    title: "Minimalist Rig",
    text: "I designed this rig as an exercise in efficiency, using only 3 joints to achieve stretchy behavior with the jaws and eyeball."    
  },
]

export default function Ginkgo()
{
	return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
        <div className="flex-grow">
          <div className="container max-w-screen-lg mx-auto px-4 py-20">
            <h1 className="mb-8 text-left text-3xl font-medium text-gray-800">Ginkgo</h1>
            <p className="text-left">Inspired by East Asian horror, Ginkgo is a first-person horror game where you use a magic needle to solve puzzles and outsmart surreal monsters.</p>
            <br/>
            <div className="aspect-video mb-12">
              <iframe 
              className="w-full h-full"
                src="https://www.youtube.com/embed/EBELVAvd1g4" 
                title="Ginkgo | NEW Student Game Trailer Reveal | #USCGamesEXPO 2020" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
              </iframe>
            </div>
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
            <DetailsGroup groupName="Sewable Cloth" details={clothToolDetails} />
            <DetailsGroup groupName="Chase Yokai" details={chaseYokaiDetails} />
            <DetailsGroup groupName="Spider Yokai" details={spiderYokaiDetails} />
            <DetailsGroup groupName="Lantern Yokai" details={lanternYokaiDetails} />
          </div>
        </div>
      <BackToHome />
      <Footer />
    </div>
	)
}
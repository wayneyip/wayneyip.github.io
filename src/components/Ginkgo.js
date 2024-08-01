import Navbar from './Navbar.js';
import DetailsGroup from './DetailsGroup.js';
import Footer from './Footer.js';


const scatterToolDetails = [
  {
    imgSrc: "work_ginkgo.png", 
    title: "Visual Result",
    text: "This tool empowered the set dressing around all of Disney Melee Mania's battle arenas, from little forests to bunches of candy canes."    
  },
  {
    imgSrc: "work_ginkgo.png", 
    title: "Time Saved",
    text: "This tool reduced the set dressing work for each battle arena from hours down to seconds, as 3D artists no longer had to fuss over each object's placement within the railings."            
  },
]

const characterDetails = [
  {
    imgSrc: "work_ginkgo.png", 
    title: "Outsourcer Rig Management",
    text: "I guided outsourcers through the development of all character rigs, which helped us nail down the flowing motion of Elsa’s dress ribbons and Meilin Lee’s expressive smiles, among many other effects."    
  },
  {
    imgSrc: "work_ginkgo.png", 
    title: "Custom Camera Animation Setup",
    text: "I also established the Maya-to-Unity pipeline for custom camera animations that empower all of the game’s dynamic character intros."            
  },
  {
    imgSrc: "work_ginkgo.png", 
    title: "Character Asset Implementation",
    text: "I implemented all character rigs and animations in Unity, working closely with animators, engineers and VFX artists. Many animations had multiple phases tied to VFX and code triggers, so it was essential to coordinate timings and fix bugs."            
  },
  {
    imgSrc: "work_ginkgo.png", 
    title: "Avatar Mask Scripting",
    text: "I extended our Animancer setup with C# scripts to incorporate avatar masks, allowing our characters to run and attack smoothly for a dynamic battlefield."            
  }
]

const charRigDetails = [
  {
    imgSrc: "work_ginkgo.png", 
    title: "Abstract Bing Bong Rig",
    text: "I took charge of rigging Abstract Bing Bong, whose logic-defying anatomy required a lot of unconventional technical setup for animation."    
  },
  {
    imgSrc: "work_ginkgo.png", 
    title: "Rig in Action",
    text: "This custom rig empowered the various zany animations and facial expressions behind this unlockable skin for Bing Bong."            
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
            <DetailsGroup groupName="Spline-Based Scatter Tool" details={scatterToolDetails} />
            <DetailsGroup groupName="Character Asset Management and Implementation" details={characterDetails} />
            <DetailsGroup groupName="Abstract Bing Bong Rig" details={charRigDetails} />
          </div>
        </div>
      <Footer />
    </div>
	)
}
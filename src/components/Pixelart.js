import Navbar from './Navbar.js';
import Detail from './Detail.js';
import Footer from './Footer.js';

const details = [
  {
    imgSrc: "work_pixelart.png", 
    title: "Single-Pixel Edge Detection",
    text: "Each pixel is compared with its four orthogonal neighbors only, producing the crisp outlines found in pixel art."    
  },
  {
    imgSrc: "work_pixelart.png", 
    title: "Outline Objects by Layer",
    text: "Despite being a fullscreen effect, the outlines are applied only to opaques in the Character layer, allowing characters to stand out in the visual hierarchy. I did this by writing a custom renderer feature."            
  },
  {
    imgSrc: "work_pixelart.png", 
    title: "Outline Edges by Vertex Colors",
    text: "Using vertex colors, the artist gets to define where outlines are drawn, which gives more stable and controllable results than the traditional depth- or normals-based outlines."    
  },
  {
    imgSrc: "work_pixelart.png", 
    title: "Color Outlines with Lights",
    text: "Outlines are lit by the main light for some extra visual flair. This is for outer outlines only, which are depth-based."    
  },
]

export default function Pixelart()
{
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
        <div className="flex-grow">
          <div className="container max-w-screen-lg mx-auto py-20">
            <h1 className="mb-8 text-left text-3xl font-medium text-gray-800">3D Pixel Art Shader Showcase</h1>
              <img className="w-full mx-auto mb-8" src="work_pixelart.png" alt="3D Pixel Art Shader Showcase"/>
              <div className="text-left mb-20">
                <p><span className="font-medium">Role:</span> Solo Developer and Artist</p>
                <p><span className="font-medium">Tech:</span> Unity (Universal Render Pipeline), Shader Graph, C#, Maya, GIMP</p>
                <br/>
                <p>My showcase of a 3D scene that emulates 2D Pokémon sprites from the Nintendo DS era, with single-pixel outlines lit by the sun.</p>
                <br/>
                <p>All assets shown are mine, including the character designs, models, rigs, animations, textures, VFX, UI, font, and shaders -- only the human uses a Mixamo rig and animation.</p>
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
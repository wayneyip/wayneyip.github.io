import Navbar from './Navbar.js';
import DetailsGroup from './DetailsGroup.js';
import BackToHome from './BackToHome.js';
import Footer from './Footer.js';

const outlineDetails = [
  {
    imgSrc: "pixel_vertcolors.png", 
    title: "Defined by Vertex Colors",
    text: "By painting vertex colors, the artist gets to define where outlines are drawn, which gives more stable and controllable results than the traditional depth- or normals-based outlines."    
  },
  {
    imgSrc: "pixel_outlinepass.png", 
    title: "Single-Pixel Edge Detection",
    text: "Outlines are drawn by sampling the four orthogonal neighbors of each pixel, resulting in the 1-pixel-wide outlines commonly found in pixel art."    
  },
  {
    imgSrc: "pixel_lightpass.png", 
    title: "Shaded by Lights",
    text: "Outlines are realtime-lit in the main light's direction. To avoid visual clutter, I applied the lighting effect only to the outer outlines of characters."    
  },
  {
    imgSrc: "pixel_outlinefinal.png", 
    title: "Applied to Selected Layers Only",
    text: "Despite being a fullscreen effect, the outlines are applied only to opaques in the Character layer, allowing characters to stand out in the visual hierarchy. I achieved the layer mask by writing a custom renderer feature in C#."            
  },
]

const miscDetails = [
  {
    imgSrc: "pixel_vfx_bubbles.mp4", 
    title: "Fake Metaballs",
    text: "To mimic the goopy look of metaballs at a fraction of the performance cost, I just squashed and stretched some spheres in a particle system. At a distance, the rim lighting helps to sell the illusion of bubbles sticking together."    
  },
	{
    imgSrc: "pixel_env_foliage.mp4", 
    title: "Foreground Darkening",
    text: "Foliage is darkened near the camera, giving definition to the foreground. To get this effect, I smoothstepped and posterized the scene depth sampled by the foliage shader."    
  },
	{
    imgSrc: "pixel_dither.mp4", 
    title: "Dithering",
    text: "Not used for the main shot above. I included this feature to support future characters with shaggy fur, sand, and other rough surfaces."            
  },
  {
    imgSrc: "pixel_models.png", 
    title: "Models, Rigs and Animations",
    text: "I modeled, rigged and animated these two creatures in Maya. They were first designed for my pixel art Instagram."    
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
            <video className="w-full mx-auto mb-8" autoPlay loop muted playsInline> 
            	<source src="pixelart_mainshot.mp4" type="video/mp4" />
          	</video>
            <div className="text-left mb-12">
              <p><span className="font-medium">Role:</span> Solo Developer and Artist</p>
              <p><span className="font-medium">Tech:</span> Unity (Universal Render Pipeline), Shader Graph, C#, Maya, GIMP</p>
              <br/>
              <p>My showcase of a 3D scene that emulates 2D Pokémon sprites from the Nintendo DS era, with 1-pixel-wide outlines lit by the sun.</p>
              <br/>
              <p>All assets shown are mine -- shaders, character designs, models, rigs, animations, textures, VFX, UI, and font. Only the human uses a Mixamo rig and animation.</p>
            </div>
            <DetailsGroup groupName="Pixel Art Outline Shader" details={outlineDetails} />
            <DetailsGroup groupName="Miscellaneous Effects" details={miscDetails} />
          </div>
        </div>
      <BackToHome />
      <Footer />
    </div>
  )
}
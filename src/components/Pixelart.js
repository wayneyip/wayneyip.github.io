import Navbar from './Navbar.js';
import Detail from './Detail.js';
import Footer from './Footer.js';

const outlineDetails = [
  {
    imgSrc: "work_pixelart.png", 
    title: "Define Outlines with Vertex Colors",
    text: "Using vertex colors, the artist gets to define where outlines are drawn, which gives more stable and controllable results than the traditional depth- or normals-based outlines."    
  },
  {
    imgSrc: "work_pixelart.png", 
    title: "Outline Objects by Layer",
    text: "Despite being a fullscreen effect, the outlines are applied only to opaques in the Character layer, allowing characters to stand out in the visual hierarchy. I did this by writing a custom renderer feature."            
  },
  {
    imgSrc: "work_pixelart.png", 
    title: "Color Outlines with Lights",
    text: "Outlines are realtime-lit in the main light's direction. To avoid visual clutter, I apply this only to the outer outlines of characters."    
  },
  {
    imgSrc: "work_pixelart.png", 
    title: "Full Shader Graph",
    text: "The messy areas are from sampling the four neighboring pixels, which is essential for crisp single-pixel outlines."    
  },
]

const foliageDetails = [
  {
    imgSrc: "work_pixelart.png", 
    title: "Spherized Custom Normals",
    text: "Pixel art cannot afford the noisiness of irregular lighting, so baking normals from a sphere is crucial for clean-looking foliage."            
  },
  {
    imgSrc: "work_pixelart.png", 
    title: "Perpendicular Fade",
    text: "To further reduce noise, leaf planes fade out when perpendicular to the camera. Because their normals are already overwritten with the sphere, I reconstruct normals in the shader using the cross product of ddx and ddy."    
  },
  {
    imgSrc: "work_pixelart.png", 
    title: "Foreground Darkening",
    text: "Leaves are darkened only near the camera, like a reverse depth fog. This method of defining the foreground is especially impactful with the striking colors of pixel art."    
  },
  {
    imgSrc: "work_pixelart.png", 
    title: "Full Shader Graph",
    text: "Includes the wind animation in the vertex shader, and toon shading in the fragment shader."    
  },
]

const miscDetails = [
	{
    imgSrc: "work_pixelart.png", 
    title: "Dithering",
    text: "Not used for the main shot above. I included this feature to support future characters with shaggy fur, sand, or other rough surfaces."            
  },
  {
    imgSrc: "work_pixelart.png", 
    title: "Models, Rigs and Animations",
    text: "I modeled, rigged and animated these two creatures in Maya! They were first designed for my pixel art Instagram."    
  },
]

function DetailsGroup({ groupName, details })
{
	return (
		<div className="mb-14">
			<div className="mb-6 text-left text-2xl font-medium">{groupName}</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
				{details.map((detail, index) => (
					<div>
						<img src={detail.imgSrc} alt={detail.title}/>
						<h2 className="my-2 font-medium">{detail.title}</h2>
	        	<p>{detail.text}</p>
					</div>
				))}
			</div>
		</div>
	)
}

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
            <DetailsGroup sectionName="Pixel Art Outline Shader" details={outlineDetails} />
            <DetailsGroup sectionName="Foliage Shader" details={foliageDetails} />
            <DetailsGroup sectionName="Miscellaneous" details={miscDetails} />
          </div>
        </div>
      <Footer />
    </div>
  )
}
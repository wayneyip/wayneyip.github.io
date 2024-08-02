import Navbar from './Navbar.js';
import Detail from './Detail.js';
import Footer from './Footer.js';

const details = [
  {
    imgSrc: "work_fish.png", 
    title: "Facify",
    subtitle: "Curve-based Eye/Mouth Autorigger",
    text: [
    	"Wire deformer to drive multiple joints with few controls",
			"Controls angled to follow joint direction/face curvature",
			"Automatic blendshape setup for blink controls",
		],
		link: "https://github.com/wayneyip/facify"
	},
  {
    imgSrc: "work_fish.png", 
    title: "Splinify",
    subtitle: "Squash-and-Stretch + Spline IK Autorigger",
    text: [
			"Automatic setup of volume-preserving squash & stretch",
			"Automatic cluster controls setup, with scalable spline length",
			"Option to automate joint chain setup or use existing joints",
    ],
		link: "https://github.com/wayneyip/splinify"
  },
  {
    imgSrc: "work_fish.png", 
    title: "Bendify",
    subtitle: "Bendy Bone Autorigger",
    text: [
     	"Automatic setup of up to 20 sub-joints",
			"Quadratic weight distribution across parent constraints",
			"Automatic setup of curveInfo and multiplyDivide nodes",    
  	],
		link: "https://github.com/wayneyip/bendify"
  },
  {
    imgSrc: "work_fish.png", 
    title: "Kinematify",
    subtitle: "IK/FK Blend System Autorigger",
    text: [
    	"Automatic creation of IK and FK joint chains",
			"FK controls created with correctly oriented group nodes",
			"Setup of custom attribute for IK/FK blending from 0 to 1",
    ],
		link: "https://github.com/wayneyip/kinematify"  
  },
]

function ItemDetail({ imgSrc, imgAlt, title, subtitle, text, link })
{
  return (
    <div className="flex mt-10">
      <img className="w-2/3 pr-10" src={imgSrc} alt={title}/>
      <div className="flex-col text-left">
        <h2 className="mb-2 text-xl font-medium">{title}</h2>
        <h2 className="mb-2 text-lg">{subtitle}</h2>
        <ul className="mb-10">
        {text.map((bullet, index) => (
        	<li>{bullet}</li>
      	))}
      	</ul>
        <a
          href={link}
          target="_blank" 
          rel="noopener noreferrer"
          className="mr-5 py-2 px-6 text-white text-lg bg-green-500 hover:bg-green-600">
          GitHub
        </a>
      </div> 
    </div>
  )
}

export default function Mayatools()
{
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
        <div className="flex-grow">
          <div className="container max-w-screen-lg mx-auto py-20">
            <h1 className="mb-8 text-left text-3xl font-medium text-gray-800">Maya Tools</h1>
            {details.map((detail, index) => (
              <ItemDetail 
              	key={index} 
              	imgSrc={detail.imgSrc} 
              	title={detail.title}
              	subtitle={detail.subtitle} 
              	text={detail.text}
              	link={detail.link} 
            	/>
            ))}
          </div>
        </div>
      <Footer />
    </div>
  )
}
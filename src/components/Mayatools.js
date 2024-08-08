import Navbar from './Navbar.js';
import DetailWithLink from './DetailWithLink.js';
import BackToHome from './BackToHome.js';
import Footer from './Footer.js';

const details = [
  {
    imgSrc: "mayatools/facify.gif", 
    title: "Facify",
    subtitle: "Curve-based Eye/Mouth Autorigger",
    text: [
    	"Wire deformer to drive multiple joints with few controls",
			"Controls angled to follow joint direction/face curvature",
			"Automatic blendshape setup for blink controls",
		],
		link: "https://github.com/wayneyip/facify",
		linkLabel: "GitHub"
	},
  {
    imgSrc: "mayatools/splinify.gif", 
    title: "Splinify",
    subtitle: "Squash-and-Stretch + Spline IK Autorigger",
    text: [
			"Automatic setup of volume-preserving squash & stretch",
			"Automatic cluster controls setup, with scalable spline length",
			"Option to automate joint chain setup or use existing joints",
    ],
		link: "https://github.com/wayneyip/splinify",
		linkLabel: "GitHub"
  },
  {
    imgSrc: "mayatools/bendify.gif", 
    title: "Bendify",
    subtitle: "Bendy Bone Autorigger",
    text: [
     	"Automatic setup of up to 20 sub-joints",
			"Quadratic weight distribution across parent constraints",
			"Automatic setup of curveInfo and multiplyDivide nodes",    
  	],
		link: "https://github.com/wayneyip/bendify",
		linkLabel: "GitHub"
  },
  {
    imgSrc: "mayatools/kinematify.gif", 
    title: "Kinematify",
    subtitle: "IK/FK Blend System Autorigger",
    text: [
    	"Automatic creation of IK and FK joint chains",
			"FK controls created with correctly oriented group nodes",
			"Setup of custom attribute for IK/FK blending from 0 to 1",
    ],
		link: "https://github.com/wayneyip/kinematify",
		linkLabel: "GitHub"  
  },
]

export default function Mayatools()
{
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
        <div className="flex-grow">
          <div className="container max-w-screen-lg mx-auto px-4 py-20">
            <h1 className="mb-8 text-left text-3xl font-medium text-gray-800">Maya Tools</h1>
            {details.map((detail, index) => (
              <DetailWithLink 
              	key={index} 
              	imgSrc={detail.imgSrc} 
              	title={detail.title}
              	subtitle={detail.subtitle} 
              	text={detail.text}
              	link={detail.link} 
              	linkLabel={detail.linkLabel} 
            	/>
            ))}
          </div>
        </div>
      <BackToHome />
      <Footer />
    </div>
  )
}
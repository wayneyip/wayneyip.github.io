import Navbar from './Navbar.js';
import Footer from './Footer.js';

export default function About()
{
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
				<div className="flex-grow">
					<div className="container max-w-screen-lg mx-auto flex px-4 py-20 md:flex-row flex-col">
			      <div className="lg:flex-grow md:w-1/2 md:pr-16 lg:pr-24 md:items-start text-left mb-16">
			        <h1 className="mb-4 text-3xl title-font font-medium text-gray-800">
			          About
			        </h1>
			        <p className="mb-8 text-gray-800 leading-loose">
			          Graduate of Computer Science Games program at the University of Southern California. I'm a fan of shaders, tools, procedural animation, and just about any use of math and logic to drive art and design.  
			          <br/>
			          <br/>Outside of work, I'm on a journey to design 100 original Pokémon in pixel art. And I climb rocks twice a week.
			        </p>
		          <a
		            href="Resume_WayneYip_2024.pdf"
		            target="_blank" 
		            rel="noopener noreferrer"
		            className="py-2 px-6 text-white text-lg bg-green-500 hover:bg-green-600">
		            Resume
		          </a>
			      </div>
			      <div className="mx-auto">
			        <img
			          className="max-w-sm"
			          alt="wayne"
			          src="about_wayne.jpg"
			        />
			      </div>
			    </div>
		    </div>
		    <Footer />
    </div>
	)
}
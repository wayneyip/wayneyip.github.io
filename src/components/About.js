export default function About()
{
	return (
		<div className="bg-gray-800">
			<div className="container max-w-screen-lg mx-auto flex py-20 md:flex-row flex-col">
	      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
	        <h1 className="mb-4 text-3xl title-font font-medium text-white">
	          About
	        </h1>
	        <p className="mb-8 text-gray-400 leading-loose">
	          Graduate of Computer Science Games program at the University of Southern California. I'm a fan of shaders, tools, procedural animation, and just about any use of math and logic to drive art and design.  
	          <br/>
	          <br/>Outside of work, I'm on a journey to design 100 original Pokémon in pixel art. Also a rock climbing enjoyer.
	        </p>
          <a
            href="#contact"
            className="py-2 px-6 text-white text-lg bg-green-500 hover:bg-green-600">
            Resume
          </a>
	      </div>
	      <div className="">
	        <img
	          className="object-cover object-center"
	          alt="wayne"
	          src="https://via.placeholder.com/300"
	        />
	      </div>
	    </div>
    </div>
	)
}
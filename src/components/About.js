export default function About()
{
	return (
		<div className="bg-gray-800">
			<div className="container max-w-screen-lg mx-auto flex py-20 md:flex-row flex-col items-center">
	      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
	        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
	          About
	        </h1>
	        <p className="mb-8 text-gray-400 leading-relaxed">
	          Graduate of Computer Science Games program at the University of Southern California. I'm a fan of shaders, tools, procedural animation, and just about any use of math and logic to drive art and design.  
	          <br/>
	          <br/>Outside of work, I'm on a journey to design 100 original Pokémon in pixel art. Also a rock climbing enjoyer.
	        </p>
          <a
            href="#contact"
            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
            Resume
          </a>
	      </div>
	      <div className="">
	        <img
	          className="object-cover object-center rounded"
	          alt="hero"
	          src="https://via.placeholder.com/300"
	        />
	      </div>
	    </div>
    </div>
	)
}
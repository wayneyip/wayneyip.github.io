export default function DetailWithLink({ imgSrc, imgAlt, title, subtitle, text, link, linkLabel })
{
  return (
    <div className="flex flex-col md:flex-row mb-12">
      <img className="w-full md:w-2/3 md:pr-10 pb-4 md:pb-0" src={imgSrc} alt={title}/>
      <div className="md:text-left">
        <h2 className="mb-2 text-xl font-medium">{title}</h2>
        <h2 className="mb-2 text-lg">{subtitle}</h2>
        <ul className="mb-10 xs:ml-12 sm:ml-32 md:ml-0 text-left list-disc list-inside">
          {text.map((bullet, index) => (
          	<li key={bullet}>{bullet}</li>
        	))}
      	</ul>
        <a
          href={link}
          target="_blank" 
          rel="noopener noreferrer"
          className="mr-5 py-2 px-6 text-white text-lg bg-green-500 hover:bg-green-600">
          {linkLabel}
        </a>
      </div> 
    </div>
  )
}

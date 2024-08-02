export default function DetailWithLink({ imgSrc, imgAlt, title, subtitle, text, link, linkLabel })
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
          {linkLabel}
        </a>
      </div> 
    </div>
  )
}

function getExtension(filename)
{
  return filename.split('.').pop()
}

export default function Detail({ imgSrc, imgAlt, title, text })
{
  return (
    <div className="flex flex-col md:flex-row mb-12">
      {getExtension(imgSrc) === 'mp4'
        ? <video className="w-full md:w-2/3 md:pr-10 pb-4 md:pb-0" autoPlay loop muted playsInline> 
            <source src={imgSrc} type="video/mp4" />
          </video>
        : <img className="w-full md:w-2/3 md:pr-10 pb-4 md:pb-0" src={imgSrc} alt={title}/>
      }
      <div className="text-center md:text-left">
        <h2 className="mb-2 text-lg font-medium">{title}</h2>
        <p>{text}</p>
      </div> 
    </div>
  )
}
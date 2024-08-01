export default function Detail({ imgSrc, imgAlt, title, text })
{
  return (
    <div className="flex mt-10">
      <img className="w-2/3 pr-10" src={imgSrc} alt={title}/>
      <div className="flex-col text-left">
        <h2>{title}</h2>
        <p>{text}</p>
      </div> 
    </div>
  )
}
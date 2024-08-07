function getExtension(filename)
{
	return filename.split('.').pop()
}

export default function DetailsGroup({ groupName, details })
{
	return (
		<div className="mb-14">
			<div className="mb-6 text-left text-2xl font-medium">{groupName}</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
				{details.map((detail, index) => (
					<div key={detail.title}>
						{getExtension(detail.imgSrc) == 'mp4'
							? <video className="w-full" autoPlay loop muted playsInline> 
		            	<source src={detail.imgSrc} type="video/mp4" />
		          	</video>
							: <img className="w-full" src={detail.imgSrc} alt={detail.title}/>
						}
						<h2 className="my-2 font-medium">{detail.title}</h2>
	        	<p>{detail.text}</p>
					</div>
				))}
			</div>
		</div>
	)
}
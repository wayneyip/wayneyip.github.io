const links = [
	{ title: 'Linkedin', iconUrl: 'icon_linkedin.png', linkUrl: 'https://www.linkedin.com/in/wayne-yip/' },
	{ title: 'GitHub', iconUrl: 'icon_github.png', linkUrl: 'https://github.com/wayneyip' },
	{ title: 'Devpost', iconUrl: 'icon_devpost.png', linkUrl: 'https://devpost.com/wayneyip' },
];

export default function Footer()
{
  return (
    <footer className="bg-gray-800 px-4 py-20">
      <div className="max-w-screen-lg mx-auto flex justify-end space-x-4">
      	{links.map((link, index) => (
  				<a key={index} href={link.linkUrl} target="_blank" rel="noopener noreferrer">
          	<img src={link.iconUrl} alt={link.title} className="w-6 h-6" />
        	</a>
  			))}
      </div>
    </footer>
  )
}
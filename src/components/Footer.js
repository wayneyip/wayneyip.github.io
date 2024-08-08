const links = [
	{ title: 'Linkedin', iconUrl: 'icons/linkedin.png', linkUrl: 'https://www.linkedin.com/in/wayne-yip/' },
	{ title: 'GitHub', iconUrl: 'icons/github.png', linkUrl: 'https://github.com/wayneyip' },
	{ title: 'Devpost', iconUrl: 'icons/devpost.png', linkUrl: 'https://devpost.com/wayneyip' },
];

export default function Footer()
{
  return (
    <footer className="bg-gray-800 px-4 py-20">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left font-fredoka">
          <p className="text-gray-400">
            Built with React and Tailwind CSS.
            <br/>
            <br/>
            Contact me at: <a className="underline text-blue-400" href="mailto:wqyip97@gmail.com">wqyip97@gmail.com</a>
          </p>
        </div>
        <div className="mt-12 md:mt-0 flex flex-row space-x-4">
        	{links.map((link, index) => (
    				<a key={index} href={link.linkUrl} target="_blank" rel="noopener noreferrer">
            	<img src={link.iconUrl} alt={link.title} className="w-6 h-6 hover:brightness-75" />
          	</a>
    			))}
        </div>
      </div>
    </footer>
  )
}
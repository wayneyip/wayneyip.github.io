const links = [
{ title: 'Link 1', iconUrl: 'https://via.placeholder.com/300x150', linkUrl: 'https://example.com' },
{ title: 'Link 2', iconUrl: 'https://via.placeholder.com/300x150', linkUrl: 'https://example.com' },
{ title: 'Link 3', iconUrl: 'https://via.placeholder.com/300x150', linkUrl: 'https://example.com' },
{ title: 'Link 4', iconUrl: 'https://via.placeholder.com/300x150', linkUrl: 'https://example.com' },
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
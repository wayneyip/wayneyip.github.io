const projects = [
  { title: 'Project 1', imageUrl: 'https://via.placeholder.com/150' },
  { title: 'Project 2', imageUrl: 'https://via.placeholder.com/150' },
  { title: 'Project 3', imageUrl: 'https://via.placeholder.com/150' },
  { title: 'Project 4', imageUrl: 'https://via.placeholder.com/150' },
  { title: 'Project 5', imageUrl: 'https://via.placeholder.com/150' },
  { title: 'Project 6', imageUrl: 'https://via.placeholder.com/150' },
  // Add more projects as needed
];

export default function Work()
{
	return (
    <div className="max-w-screen-lg mx-auto p-4">
      <section className="text-left mt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border overflow-hidden">
              <img src={project.imageUrl} alt={project.title} className="w-full h-auto" />
              <div className="p-2">
                <h3 className="text-lg font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
	)
}
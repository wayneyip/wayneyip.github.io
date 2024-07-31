const projects = [
  { title: 'Three.js Fish Simulation', imageUrl: 'work_fish.png' },
  { title: '3D Pixel Art Shader', imageUrl: 'work_pixelart.png' },
  { title: 'Mighty Action Heroes', imageUrl: 'work_mah.jpg' },
  { title: 'Disney Melee Mania', imageUrl: 'work_grizzly.png' },
  { title: 'Ginkgo', imageUrl: 'work_ginkgo.png' },
  { title: 'Maya Tools', imageUrl: 'work_mayatools.png' },
];

export default function Work()
{
	return (
    <div className="max-w-screen-lg mx-auto p-4">
      <section className="text-left mt-24 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="overflow-hidden">
              <img src={project.imageUrl} alt={project.title} className="w-full h-auto" />
              <div className="p-2 text-center">
                <h3 className="text-lg">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
	)
}
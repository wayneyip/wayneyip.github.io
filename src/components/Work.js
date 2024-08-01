import { Link } from 'react-router-dom';
import Navbar from './Navbar.js';
import Fishsim from './Fishsim.js';
import Footer from './Footer.js';

const projects = [
  { title: 'Three.js Fish Simulation', imageUrl: 'work_fish.png', siteUrl: '/fishsim' },
  { title: '3D Pixel Art Shader', imageUrl: 'work_pixelart.png', siteUrl: '' },
  { title: 'Mighty Action Heroes', imageUrl: 'work_mah.jpg', siteUrl: '' },
  { title: 'Disney Melee Mania', imageUrl: 'work_grizzly.png', siteUrl: '' },
  { title: 'Ginkgo', imageUrl: 'work_ginkgo.png', siteUrl: '' },
  { title: 'Maya Tools', imageUrl: 'work_mayatools.png', siteUrl: '' },
];

export default function Home()
{
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-lg mx-auto p-4">
        <section className="text-left mt-24 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="relative overflow-hidden bg-cover bg-no-repeat">
                <Link to={project.siteUrl}>
                  <img src={project.imageUrl} alt={project.title} className="w-full h-auto" />
                  <a href="#!">
                    <div
                      class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                  </a>
                  <div className="p-2 text-center">
                    <h3 className="text-lg">{project.title}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
} 
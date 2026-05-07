import { Eye, Github } from 'lucide-react';
import Title from '../Components/Title';
import { projects } from '../assets/constant';


const Projects = () => {
  return (
  <section id ='Projects' className="pt-32">
    <div className="container">
        <Title 
        title='My' 
        highlight='projects' 
        subtitle="Here are some of the projects I've worked on."
        />

        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3">
            {projects.map((project) => (
                <div key={project.id}>
                    <img 
                        className="rounded-tr-2xl rounded-tl-2xl" 
                        src={project.image} 
                        alt={project.title} 
                    />
                    <div className="bg-gray-900 rounded-br-2xl rounded-bl-2xl px-4 py-6">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="line-clamp-3">{project.description}</p>

                        <div className="mb-8 flex flex-wrap gap-2">
                            {project.stack.map((tech) => (
                                <span key={tech} className="px-2 py-1 bg-gray-800 rounded-full mt-4">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-4">
                            <a className="text-lg text-white font-semibold rounded-md flex items-center gap-2 capitalize px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600" href={project.liveUrl}
                            target='_blank'
                            >
                            <Eye size={20}/>
                            <p className="font-semibold">Live</p>
                            </a>

                            <a className="text-lg text-white font-semibold rounded-md flex items-center gap-2 capitalize px-4 py-3 bg-gray-600 hover:bg-blue-700 transition-color duration-300 ease-in" href={project.sourceUrl}
                            target='_blank'
                            >
                            <Github size={20}/>
                            <p className="font-semibold">Source</p>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  </section>
  )
}

export default Projects;

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import crudApp from '../assets/crudApp.avif'
import Tradeapp from '../assets/Tradeapp.jpg'
import Project from '../assets/Project.avif'


const projects = [
   {
    title: "Project Management",
    description: "Built a full-stack project management system with JWT authentication, role-based access control, and task/subtask tracking. Enables team collaboration with project management, file attachments, and secure user workflows",
    image: Project,
    tech: ["React.js", "Express.js","JWT","MongoDB","Node.js","Tailwind CSS",],
    githubUrl: "https://github.com/MonuYadav0115/Project-Management",
  },

  {
    title: "Trade Opportunities – AI-Powered Market Analysis",
    description: "Developed an AI-powered FastAPI application that analyzes market data and generates trade opportunity insights for different sectors. The system collects real-time data from web sources and uses LLM (Gemini API) to produce structured markdown reports. Implemented features like authentication, rate limiting, input validation, and clean API architecture for secure and scalable performance.",
    image: Tradeapp,
    tech: ["Python","FastAPI","Gemini API","React.js", "Tailwind CSS"],
    liveUrl: "https://trade-application-h98c7iq6j-monu-yadavs-projects-a0f5569c.vercel.app/",
    githubUrl: "https://github.com/MonuYadav0115/Trade-Application",
  },


  {
    title: "Full Stack CRUD Application",
    description: "Developed a full-stack CRUD application enabling users to create, view, update, and delete data seamlessly. Integrated REST APIs with a responsive frontend for efficient data management and smooth user experience.",
    image: crudApp,
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://crud-application-eight-rho.vercel.app/",
    githubUrl: "https://github.com/MonuYadav0115/CRUD-Application-",
  },

];

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className={`flex flex-col ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-8 lg:gap-12 items-center`}
    >

      {/* Image */}
      <div className="w-full lg:w-1/2">
        <div className="relative group rounded-2xl overflow-hidden border border-border/40 bg-card/30 backdrop-blur-xl">

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[220px] sm:h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white text-black hover:scale-110 transition"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white text-black hover:scale-110 transition"
            >
              <Github className="w-5 h-5" />
            </a>

          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2 space-y-5">

        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.2 }}
          className="space-y-4"
        >

          <h3 className="text-2xl lg:text-3xl font-bold tracking-tight">
            {project.title}
          </h3>

          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {/* Tech */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full border border-border/50 bg-background/50 backdrop-blur-md"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-2">

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium
                bg-gradient-to-r from-orange-500 to-pink-500 text-white
                hover:scale-105 transition"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium
              border border-border hover:bg-accent/10 transition"
            >
              <Github className="w-4 h-4" />
              Code
            </a>

          </div>

        </motion.div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Projects</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and real-world applications built with modern technologies.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-16 lg:space-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
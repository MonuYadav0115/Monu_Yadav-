import { useState } from "react";
import { motion } from "framer-motion";

export function Skills() {
  const [activeFilter, setActiveFilter] = useState("backend");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillsData = [
    

    { name: "HTML", hoverText: "Markup language for structuring web content", category: "frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },

    { name: "CSS", hoverText: "Stylesheet language for designing web pages", category: "frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },

    { name: "JavaScript", hoverText: "Core programming language for the web", category: "frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },

    { name: "Tailwind CSS", hoverText: "Utility-first CSS framework", category: "frontend", iconUrl: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },

    { name: "Material UI", hoverText: "React UI framework", category: "frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },

    { name: "React.js", hoverText: "Component-based frontend library", category: "frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },


    { name: "Node.js", hoverText: "JavaScript runtime", category: "backend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },

   { name: "Express.js", hoverText: "Web framework for Node.js", category: "backend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },

   {name: "FastAPI",
   hoverText: "High-performance Python API framework",
   category: "backend",
   iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
   },

   {name: "REST APIs",hoverText: "API design & development",category: "backend",iconUrl: "https://cdn-icons-png.flaticon.com/512/2164/2164832.png"},

   
    { name: "Python", hoverText: "General-purpose language", category: "tools", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },

    { name: "MySQL", hoverText: "Relational DB", category: "tools", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },

    { name: "MongoDB", hoverText: "NoSQL DB", category: "tools", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },

    { name: "GitHub", hoverText: "Code hosting", category: "tools", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },

    { name: "Git", hoverText: "Version control", category: "tools", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },

    { name: "Vercel", hoverText: "Deployment platform", category: "tools", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },

    { name: "Render", hoverText: "Cloud hosting", category: "tools", iconUrl: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/render.svg" },
  ];

  const filters = [
    { label: "Frontend", value: "frontend" },
    { label: "Backend", value: "backend" },
    { label: "Tools", value: "tools" },
  ];

  const filteredSkills = skillsData.filter(
    (skill) => skill.category === activeFilter
  );

  const blackIcons = ['express.js', 'flask', 'vercel', 'render', 'socket.io', 'github'];

  return (
    <section id="skills" className="py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Skills &{" "}
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </motion.h2>

          <p className="text-muted-foreground max-w-xl mx-auto">
            Technologies I use to build scalable, high-performance applications.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-2 p-1 rounded-full bg-background/50 backdrop-blur-md border border-border">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                  ${activeFilter === filter.value
                    ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group relative p-5 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-xl
              hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >

              {/* Icon */}
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                {skill.iconUrl && (
                  <img
                    src={skill.iconUrl}
                    alt={skill.name}
                    className={`w-full h-full object-contain
                      ${blackIcons.includes(skill.name.toLowerCase()) ? "dark:invert" : ""}
                    `}
                  />
                )}
              </div>

              {/* Text Switch */}
              <div className="h-12 flex items-center justify-center text-center relative">

                <span
                  className={`absolute transition-all duration-300
                  ${hoveredSkill === skill.name ? "opacity-0 translate-y-2" : "opacity-100"}
                  `}
                >
                  {skill.name}
                </span>

                <span
                  className={`absolute text-xs text-muted-foreground px-2 transition-all duration-300
                  ${hoveredSkill === skill.name ? "opacity-100" : "opacity-0 -translate-y-2"}
                  `}
                >
                  {skill.hoverText}
                </span>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
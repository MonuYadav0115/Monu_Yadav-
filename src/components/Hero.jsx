import { Download, Handshake, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import resumeFile from "../assets/Monu_Yadav (4).pdf";

const skills = [
  { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },

  { name: "Express", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },

  { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },

  { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },

  { 
  name: "FastAPI", 
  url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" 
}
];

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >

      {/* Background Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ delay: 1.2 }}
        className="absolute inset-0 -z-20"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:60px_60px]" />
      </motion.div>

      {/* Glow Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-500/20 blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-pink-500/20 blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 text-center flex flex-col items-center">

        {/* Greeting */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground mb-2"
        >
          Hi, I'm
        </motion.h2>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4"
        >
          Monu Yadav
        </motion.h1>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            Full Stack Developer
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          I build scalable, high-performance web applications with modern technologies
          and clean user experiences.
        </motion.p>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-4 mb-10 flex-wrap"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.15, y: -4 }}
              className="w-14 h-14 p-2 rounded-xl backdrop-blur-lg 
              bg-white/10 dark:bg-white/5 border border-white/10
              shadow-md hover:shadow-orange-400/30 transition"
            >
              <img
                src={skill.url}
                alt={skill.name}
                className={`w-full h-full ${skill.name === "Express" ? "dark:invert" : ""}`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a
            href={resumeFile}
            download="Monu_Yadav(4).pdf"
            className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium
            bg-gradient-to-r from-orange-500 to-pink-500 text-white
            shadow-lg hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>

          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium
            border border-border backdrop-blur-md
            hover:bg-accent/10 hover:scale-105 transition-all duration-300"
          >
            <Handshake className="w-5 h-5" />
            Let's Work Together
          </button>
        </motion.div>

        {/*  PERFECT CENTER SCROLL FIX */}
        <div className="flex justify-center w-full">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={scrollToProjects}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent mx-auto"
          >
            <span className="text-sm">Explore</span>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <ChevronDown />
            </motion.div>
          </motion.button>
        </div>

      </div>
    </section>
  );
}
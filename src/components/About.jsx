import { motion } from "framer-motion";
import { Code2, Rocket, Users, Zap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 lg:py-24 border-y border-border/40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl lg:text-5xl font-bold">
              About{" "}
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Me
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">

              <p>
                I'm a passionate{" "}
                <span className="text-accent font-semibold">
                  Full Stack Developer
                </span>{" "}
                specializing in the{" "}
                <span className="text-accent font-semibold">MERN stack</span>.
                I enjoy building scalable and user-focused web applications that
                solve real-world problems.
              </p>

              <p>
                My journey started with curiosity about how websites work, which
                quickly turned into a strong interest in building modern digital
                experiences. I primarily work with{" "}
                <span className="text-accent font-medium">React</span> on the frontend
                and build robust backend systems using{" "}
                <span className="text-accent font-medium">Node.js</span>,{" "}
                <span className="text-accent font-medium">Express</span>, and{" "}
                <span className="text-accent font-medium">FastAPI</span>.
              </p>

              <p>
                I focus on writing clean, efficient, and maintainable code while
                continuously learning new technologies to improve my development
                skills and build impactful products.
              </p>

            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
            bg-background/50 backdrop-blur-md border border-border">
              <Rocket className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">
                Currently Learning:{" "}
                <span className="text-accent">TypeScript</span>
              </span>
            </div>
          </motion.div>

          {/* Right */}

        <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 gap-6">
{[
    {
      icon: Code2,
      title: "Clean Code",
      description: "Maintainable and scalable solutions",
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description: "Quickly adapt to new technologies",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Strong collaboration and communication",
    },
    {
      icon: Rocket,
      title: "Problem Solver",
      description: "Creative and efficient solutions",
    },

  ].map((feature, index) => (
    <motion.div
      key={feature.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group rounded-xl border border-border bg-background/60 backdrop-blur-sm 
      p-5 transition-all duration-300 hover:shadow-md"
    >

      {/* Icon */}
      <div className="w-10 h-10 flex items-center justify-center rounded-md 
      bg-accent/10 text-accent mb-4 transition group-hover:scale-105">
        <feature.icon className="w-5 h-5" />
      </div>

      {/* Title */}
      <h3 className="font-semibold text-base mb-1">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {feature.description}
      </p>

    </motion.div>
))}
    </motion.div>
        </div>
      </div>
    </section>
  );
}
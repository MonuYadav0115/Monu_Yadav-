import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart, Youtube } from "lucide-react";

export function Footer() {

  const QuickLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", Icon: Github, href: "https://github.com/MonuYadav0115" },
    { name: "LinkedIn", Icon: Linkedin, href: "https://www.linkedin.com/in/monu-yadav-0552a1229/" },
    { name: "Twitter", Icon: Twitter, href: "https://x.com/MonuYad00812722" },
    { name: "YouTube", Icon: Youtube, href: "https://www.youtube.com/@Monu__tom" },
    { name: "Email", Icon: Mail, href: "mailto:monuy7883@gmail.com?subject=Let's Connect&body=Hi Monu," },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center sm:text-left">

          {/* Brand */}
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-orange-500">
              MY
            </h2>

            <h3 className="text-lg font-semibold text-foreground">
              <a href="#home" className="hover:text-orange-500 transition">
                Monu Yadav
              </a>
            </h3>

            <p className="text-sm sm:text-base text-muted-foreground max-w-xs mx-auto sm:mx-0">
              Full-stack developer passionate about building impactful digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-foreground">
              Quick Links
            </h4>

            <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
              {QuickLinks.map((item) => (
                <li key={item.name}>
                  <motion.a
                    href={item.href}
                    whileHover={{ x: 4 }}
                    className="transition-colors hover:text-orange-500"
                  >
                    {item.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-foreground">
              Get In Touch
            </h4>

            <p className="text-sm sm:text-base text-muted-foreground">
              monuy7883@gmail.com
            </p>

            <p className="text-sm sm:text-base text-muted-foreground">
              Hyderabad, India
            </p>

            {/* Social Icons */}
            <div className="flex justify-center sm:justify-start gap-4 mt-5">
              {socialLinks.map(({ name, Icon, href }, i) => {
                const isYoutube = name === "YouTube";

                return (
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    title={name} 
                    className={`p-2 rounded-md border border-border/40 
                    transition-all duration-300
                    ${
                      isYoutube
                        ? "hover:border-red-500/50 hover:text-red-500 hover:shadow-lg hover:shadow-red-500/20"
                        : "hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-orange-500 hover:shadow-lg hover:shadow-orange-500/20"
                    }`}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/40 my-10"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs sm:text-sm text-muted-foreground text-center md:text-left">

          <p>© {currentYear} Monu Yadav. All rights reserved.</p>

          <div className="flex flex-col md:flex-row items-center gap-2">
            <p className="flex items-center gap-1">
              Built with{" "}
              <span className="text-orange-500 font-medium">React.js</span> &{" "}
              <span className="text-orange-500 font-medium">Tailwind CSS</span>
              <Heart className="w-4 h-4 text-orange-500 fill-orange-500 ml-1" />
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
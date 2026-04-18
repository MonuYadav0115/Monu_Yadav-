import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Github, Linkedin, Twitter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("projects");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.replace("#", ""));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border/40 shadow-sm"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="text-lg font-bold tracking-tight"
          >
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-2 py-1 rounded-md shadow-sm">
              Monu
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group
                    ${isActive
                      ? "text-accent"
                      : "text-muted-foreground hover:text-accent"
                    }`}
                >
                  {link.name}

                  {/* Underline */}
                  <span
                    className={`absolute left-2 right-2 -bottom-1 h-[2px] rounded-full bg-accent transition-all duration-300
                      ${isActive
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                      }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-2">

            {[{
              icon: Github,
              link: "https://github.com/MonuYadav0115"
            }, {
              icon: Linkedin,
              link: "https://www.linkedin.com/in/monu-yadav-0552a1229/"
            }, {
              icon: Twitter,
              link: "https://x.com/MonuYad00812722"
            }].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-accent/10 hover:text-accent transition-all duration-300"
              >
                <item.icon className="w-5 h-5" />
              </a>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-accent/10 hover:text-accent transition-all duration-300"
            >
              {theme === "dark"
                ? <Sun className="w-5 h-5" />
                : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-accent/10"
            >
              {theme === "dark"
                ? <Sun className="w-5 h-5" />
                : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-accent/10"
            >
              {isOpen
                ? <X className="w-6 h-6" />
                : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden backdrop-blur-xl bg-background/80 border-t border-border/40"
          >
            <div className="px-4 py-6 space-y-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300
                      ${isActive
                        ? "bg-accent/10 text-accent"
                        : "hover:bg-accent/10"
                      }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
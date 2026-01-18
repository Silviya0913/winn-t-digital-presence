import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Partners", href: "#partners" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm shadow-card">
      <div className="container-max section-padding !py-0">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="Winn-T Consulting" className="h-12 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-winn-blue transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gradient-accent px-5 py-2.5 rounded-lg text-sm font-semibold text-foreground hover:opacity-90 transition-opacity"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-winn-blue transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-gradient-accent px-5 py-2.5 rounded-lg text-sm font-semibold text-foreground text-center mt-2"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

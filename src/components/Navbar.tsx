import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        "bg-foreground"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src={logo} alt="TableHub Logo" className="w-12 h-12" />
            <span className="text-xl font-bold text-background">TableHub</span>
          </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-background hover:text-primary transition-colors"
            >
              O TableHub
            </button>
            <button
              onClick={() => scrollToSection("cms")}
              className="text-background hover:text-primary transition-colors"
            >
              Widok restauratora
            </button>
            <button
              onClick={() => scrollToSection("gamification")}
              className="text-background hover:text-primary transition-colors"
            >
              Gamifikacja
            </button>            
            <button
              onClick={() => scrollToSection("pilot")}
              className="text-background hover:text-primary transition-colors"
            >
              Pilotaż
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-background hover:text-primary transition-colors"
            >
              Kontakt
            </button>
            </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-background"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("overview")}
                className="text-background hover:text-primary transition-colors text-left"
              >
                O TableHub
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-background hover:text-primary transition-colors text-left"
              >
                Jak to działa
              </button>
              <button
                onClick={() => scrollToSection("pilot")}
                className="text-background hover:text-primary transition-colors text-left"
              >
                Pilotaż
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-background hover:text-primary transition-colors text-left"
              >
                Kontakt
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

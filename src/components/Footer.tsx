import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="TableHub Logo" className="w-8 h-8" />
            <span className="font-bold text-foreground">TableHub</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} TableHub. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

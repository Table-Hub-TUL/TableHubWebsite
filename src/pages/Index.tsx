import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import PhoneCarousel from "@/components/PhoneCarousel";
import LaptopCarousel from "@/components/LaptopCarousel";
import Gamification from "@/components/Gamification";
import Pilot from "@/components/Pilot";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Overview />
      
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Jak to <span className="gradient-text">działa</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Poznaj funkcjonalności aplikacji TableHub i zobacz, jak łatwo 
              możesz znaleźć wolny stolik w Twojej okolicy
            </p>
          </div>
          <PhoneCarousel />
        </div>
      </section>

      <section id="cms" className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Panel <span className="gradient-text">restauratora</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Panel TableHub to proste w obsłudze narzędzie, które daje Ci pełną kontrolę 
              nad obecnością Twojej restauracji w aplikacji
            </p>
          </div>
          <LaptopCarousel />
        </div>
      </section>

      <Gamification />
      <Pilot />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PhoneCarousel from "@/components/PhoneCarousel";
import LaptopCarousel from "@/components/LaptopCarousel";
import Gamification from "@/components/Gamification";
import Pilot from "@/components/Pilot";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Czym jest <span className="gradient-text">TableHub</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              TableHub to nowoczesna aplikacja, która w czasie rzeczywistym pokazuje użytkownikom, 
              gdzie w okolicy znajdują się wolne stoliki – oraz ile miejsc oferuje każdy z nich.
              Tutaj poznaj funkcjonalności aplikacji TableHub.
            </p>
          </div>
          <PhoneCarousel />
          <div>
        <Card className="p-8 md:p-12 bg-card/50 backdrop-blur border-2 border-primary/20">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Jak to działa dla użytkowników?</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Sprawdzają dostępność stolików w pobliskich restauracjach</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Widzą liczbę miejsc przy każdym stoliku</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Przeglądają podstawowe informacje o restauracji – rodzaj kuchni, adres, menu</span>
              </li>
            </ul>
          </div>
        </Card>
      </div>
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

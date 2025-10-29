import { CheckCircle2, Calendar, Users, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Users,
    title: "Zwiększenie ruchu",
    description: "Przyciągnij nowych gości szukających wolnych miejsc"
  },
  {
    icon: TrendingUp,
    title: "Lepsza widoczność",
    description: "Pojaw się na mapie dostępnych restauracji"
  },
  {
    icon: Calendar,
    title: "Proste zarządzanie",
    description: "Intuicyjny panel do aktualizacji dostępności"
  },
  {
    icon: CheckCircle2,
    title: "Bez zobowiązań",
    description: "Program pilotażowy całkowicie bezpłatny"
  }
];

const Pilot = () => {
  return (
    <section id="pilot" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Program <span className="gradient-text">pilotażowy</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Dołącz do pierwszej grupy restauracji testujących TableHub. 
            To doskonała okazja, aby zwiększyć swoją widoczność i przyciągnąć nowych gości.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-border hover:border-primary/50"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur border-2 border-primary/30">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Zainteresowany udziałem?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Chcesz być częścią pilotażu TableHub? Skontaktuj się z nami, 
              a my pomożemy Ci w całym procesie dołączenia do platformy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Skontaktuj się z nami
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Pilot;

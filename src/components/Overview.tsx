import { MapPin, Clock, Utensils, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: MapPin,
    title: "Mapa w czasie rzeczywistym",
    description: "Sprawdź dostępność stolików na interaktywnej mapie"
  },
  {
    icon: Clock,
    title: "Aktualne informacje",
    description: "Dane o wolnych stolikach aktualizowane na bieżąco"
  },
  {
    icon: Utensils,
    title: "Szczegóły restauracji",
    description: "Menu, rodzaj kuchni i podstawowe informacje"
  },
  {
    icon: Users,
    title: "Liczba miejsc",
    description: "Zobacz dokładnie ile osób zmieści się przy stoliku"
  }
];

const Overview = () => {
  return (
    <section id="overview" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Czym jest <span className="gradient-text">TableHub</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            TableHub to nowoczesna aplikacja, która w czasie rzeczywistym pokazuje użytkownikom, 
            gdzie w okolicy znajdują się wolne stoliki – oraz ile miejsc oferuje każdy z nich.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-border hover:border-primary/50"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

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
    </section>
  );
};

export default Overview;

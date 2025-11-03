import { Trophy, Star, TrendingUp, Gift } from "lucide-react";
import { Card } from "@/components/ui/card";
import gameImage from "@/assets/game.png";

const Gamification = () => {
  const features = [
    {
      icon: Star,
      title: "Zdobywaj punkty",
      description: "Oznaczaj stoliki jako wolne lub zajęte i zbieraj punkty za każde zgłoszenie"
    },
    {
      icon: Gift,
      title: "Wymieniaj nagrody",
      description: "Punkty możesz wymieniać na zniżki, vouchery lub specjalne oferty w restauracjach"
    },
    {
      icon: TrendingUp,
      title: "Buduj ranking",
      description: "Rywalizuj z innymi użytkownikami i wspinaj się na szczyty rankingów"
    },
    {
      icon: Trophy,
      title: "Odblokowuj osiągnięcia",
      description: "Zdobywaj specjalne odznaki i statusy za aktywność w aplikacji"
    }
  ];

  return (
    <section id="gamification" className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Gamifikacja</span>, która angażuje
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              TableHub wykorzystuje elementy grywalizacji, by zamienić codzienną czynność - 
              szukanie stolika - w coś przyjemnego i interaktywnego.
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Phone mockup with game screen */}
            <div className="relative order-2 lg:order-1">
              <div className="relative mx-auto max-w-sm">
                {/* Phone frame */}
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-4 shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-10"></div>
                  
                  {/* Screen */}
                  <div className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-inner" style={{ aspectRatio: '9/19.5' }}>
                    <img
                      src={gameImage}
                      alt="Gamification statistics"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-[3rem] pointer-events-none"></div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-6 order-1 lg:order-2">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Bottom info card */}
          <Card className="mt-16 p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Co to oznacza dla restauracji?
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-left mt-8">
                <div>
                  <div className="w-2 h-2 rounded-full bg-primary inline-block mr-3"></div>
                  <span className="text-muted-foreground">Dostęp do aktualnych danych o obłożeniu</span>
                </div>
                <div>
                  <div className="w-2 h-2 rounded-full bg-primary inline-block mr-3"></div>
                  <span className="text-muted-foreground">Lojalni i zaangażowani klienci</span>
                </div>
                <div>
                  <div className="w-2 h-2 rounded-full bg-primary inline-block mr-3"></div>
                  <span className="text-muted-foreground">Goście chętnie wracają po kolejne nagrody</span>
                </div>
                <div>
                  <div className="w-2 h-2 rounded-full bg-primary inline-block mr-3"></div>
                  <span className="text-muted-foreground">Nowoczesny i interaktywny wizerunek</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Gamification;
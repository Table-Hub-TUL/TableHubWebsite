import { Card } from "@/components/ui/card";
import GamePhoneCarousel from "./GamePhoneCarousel";

const Gamification = () => {

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

          {/* Phone carousel */}
          <GamePhoneCarousel />

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
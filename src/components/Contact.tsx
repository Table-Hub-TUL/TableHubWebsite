import { Mail, Phone, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Skontaktuj się z <span className="gradient-text">nami</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Masz pytania? Chcesz dołączyć do pilotażu? Napisz do nas!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-border hover:border-primary/50">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <a
                  href="mailto:kontakt@tablehub.pl"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  tablehub.contact@gmail.com
                </a>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-border hover:border-primary/50">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Telefon</h3>
                <a
                  href="tel:+48123456789"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +48 722 170 541
                </a>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-border hover:border-primary/50">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Siedziba</h3>
                <p className="text-muted-foreground">
                  Wólczańska 221, Łódź, Polska
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

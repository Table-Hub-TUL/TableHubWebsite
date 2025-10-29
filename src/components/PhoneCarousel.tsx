import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import appMap from "@/assets/app-map.jpg";
import appFilter from "@/assets/app-filter.jpg";
import appList from "@/assets/app-list.jpg";
import appPopup from "@/assets/app-popup.jpg";

const slides = [
  {
    id: 1,
    image: appMap,
    title: "Mapa z restauracjami",
    description: "Zobacz wszystkie restauracje w okolicy na interaktywnej mapie Mapbox. Liczby pokazują dostępność wolnych miejsc."
  },
  {
    id: 2,
    image: appFilter,
    title: "Zaawansowane filtry",
    description: "Filtruj restauracje według ratingu, rodzaju kuchni i minimalnej liczby wolnych miejsc przy stoliku."
  },
  {
    id: 3,
    image: appList,
    title: "Lista restauracji",
    description: "Przeglądaj listę restauracji z odległością, adresem i rodzajem kuchni. Szybkie wyszukiwanie po nazwie."
  },
  {
    id: 4,
    image: appPopup,
    title: "Szczegóły restauracji",
    description: "Kliknij pin na mapie, aby zobaczyć szczegóły: adres, oceny, dostępne stoliki i możliwość zgłoszenia zmian."
  }
];

const PhoneCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setActiveSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8 items-center max-w-7xl mx-auto">
          {/* Left Side Cards */}
          <div className="hidden lg:flex flex-col gap-6">
            {slides.slice(0, 2).map((slide, index) => (
              <Card
                key={slide.id}
                className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-xl border-2 ${
                  activeSlide === index
                    ? "border-primary shadow-[0_0_30px_rgba(239,106,26,0.3)] scale-105"
                    : "border-border hover:border-primary/50"
                }`}
                onClick={() => goToSlide(index)}
              >
                <div className="flex items-start gap-4">
                  <div className="w-20 h-36 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{slide.title}</h3>
                    <p className="text-sm text-muted-foreground">{slide.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Center Phone Mockup */}
          <div className="relative flex flex-col items-center">
            <div className="relative w-[280px] h-[570px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10" />
              
              {/* Phone Screen */}
              <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                <img
                  src={slides[activeSlide].image}
                  alt={slides[activeSlide].title}
                  className="w-full h-full object-cover transition-opacity duration-500"
                  key={activeSlide}
                />
              </div>
            </div>

            {/* Slide Info Below Phone */}
            <div className="mt-8 text-center max-w-md">
              <h3 className="text-2xl font-bold mb-3">{slides[activeSlide].title}</h3>
              <p className="text-muted-foreground">{slides[activeSlide].description}</p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-4 mt-6">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full border-2 border-primary hover:bg-primary/10"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full border-2 border-primary hover:bg-primary/10"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex gap-2 mt-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeSlide
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="hidden lg:flex flex-col gap-6">
            {slides.slice(2, 4).map((slide, index) => (
              <Card
                key={slide.id}
                className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-xl border-2 ${
                  activeSlide === index + 2
                    ? "border-primary shadow-[0_0_30px_rgba(239,106,26,0.3)] scale-105"
                    : "border-border hover:border-primary/50"
                }`}
                onClick={() => goToSlide(index + 2)}
              >
                <div className="flex items-start gap-4">
                  <div className="w-20 h-36 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{slide.title}</h3>
                    <p className="text-sm text-muted-foreground">{slide.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Mobile Cards - Below Phone */}
        <div className="lg:hidden grid sm:grid-cols-2 gap-4 mt-8">
          {slides.filter((_, index) => index !== activeSlide).map((slide) => (
            <Card
              key={slide.id}
              className="p-4 cursor-pointer hover:shadow-lg border-2 border-border hover:border-primary/50 transition-all"
              onClick={() => goToSlide(slides.indexOf(slide))}
            >
              <div className="flex gap-3">
                <div className="w-16 h-28 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{slide.title}</h4>
                  <p className="text-xs text-muted-foreground">{slide.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhoneCarousel;

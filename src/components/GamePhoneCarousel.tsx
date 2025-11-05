import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import gameMain from "@/assets/gamemain.png";
import gameAchievements from "@/assets/gameachive.png";
import gameRanking from "@/assets/gameranking.png";
import gameRewards from "@/assets/gamerewards.png";

const slides = [
  {
    id: 1,
    image: gameMain,
    title: "Zdobywaj punkty",
    description: "Oznaczaj stoliki jako wolne lub zajęte i zbieraj punkty za każde zgłoszenie"
  },
  {
    id: 2,
    image: gameRewards,
    title: "Wymieniaj nagrody",
    description: "Punkty możesz wymieniać na zniżki, vouchery lub specjalne oferty w restauracjach"
  },
  {
    id: 3,
    image: gameRanking,
    title: "Buduj ranking",
    description: "Rywalizuj z innymi użytkownikami i wspinaj się na szczyty rankingów"
  },
  {
    id: 4,
    image: gameAchievements,
    title: "Odblokowuj osiągnięcia",
    description: "Zdobywaj specjalne odznaki i statusy za aktywność w aplikacji"
  }
];

const GamePhoneCarousel = () => {
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
    <div className="relative py-12">
      {/* Main phone mockup with navigation */}
      <div className="relative max-w-sm mx-auto">
        {/* Navigation buttons */}
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10 hidden md:flex"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10 hidden md:flex"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>

        {/* Phone frame */}
        <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-4 shadow-2xl">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-10"></div>
          
          {/* Screen */}
          <div className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-inner" style={{ aspectRatio: '9/19.5' }}>
            <img
              src={slides[activeSlide].image}
              alt={slides[activeSlide].title}
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

      {/* Slide info - below phone */}
      <div className="max-w-2xl mx-auto mt-12 text-center px-4">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
          {slides[activeSlide].title}
        </h3>
        <p className="text-lg text-muted-foreground">
          {slides[activeSlide].description}
        </p>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeSlide
                ? "bg-primary w-8"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Side preview cards - hidden on mobile */}
      <div className="hidden lg:block">
        {slides.map((slide, index) => {
          if (index === activeSlide) return null;
          
          const position = index < activeSlide ? "left" : "right";
          const offset = Math.abs(index - activeSlide);
          
          return (
            <Card
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`absolute top-1/2 -translate-y-1/2 w-32 cursor-pointer transition-all duration-300 hover:scale-105 ${
                position === "left" ? `-left-${offset * 12}` : `-right-${offset * 12}`
              } opacity-60 hover:opacity-100`}
            >
              <div className="p-2">
                <div className="relative rounded-lg overflow-hidden bg-white mb-2" style={{ aspectRatio: '9/19.5' }}>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xs font-semibold text-foreground line-clamp-2">
                  {slide.title}
                </h4>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};


export default GamePhoneCarousel;

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import cmsList from "@/assets/cmsmainview.png";
import cmsRestaurant from "@/assets/cmslayout.png";
import cmsAd from "@/assets/cmsad.png";
import { motion, AnimatePresence } from "framer-motion"; // <-- 1. Import

const slides = [
  {
    id: 1,
    image: cmsList,
    title: "Zarządzanie restauracjami",
    description: "Dodawaj nowe restauracje, edytuj podstawowe informacje jak nazwa, adres, rodzaj kuchni. Wszystko w intuicyjnym interfejsie."
  },
  {
    id: 2,
    image: cmsRestaurant,
    title: "Plan sali restauracji",
    description: "Twórz interaktywny plan sali - dodawaj sekcje, stoliki i punkty POI. Rysuj ściany i drzwi, aby odwzorować rzeczywisty układ."
  },
  {
    id: 3,
    image: cmsAd,
    title: "Zarządzanie reklamami",
    description: "Dodaj reklamy swojego biznesu, za pomocą paru kliknięć, do aplikacji w wybranych miejscach."
  }
];

const LaptopCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

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
      {/* Main laptop mockup */}
      <div className="relative max-w-5xl mx-auto">
        {/* Navigation buttons */}
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>

        {/* Laptop mockup */}
        <div className="relative mx-auto" style={{ maxWidth: '900px' }}>
          {/* Laptop screen */}
          <div className="relative rounded-t-xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 p-3 shadow-2xl">
            {/* Screen bezel */}
            <div className="relative bg-black rounded-lg overflow-hidden shadow-inner" style={{ aspectRatio: '16/10' }}>
              {/* Screen content */}
              <div className="absolute inset-0 bg-gradient-to-br from-background to-muted">
                {/* 2. ADDED IMAGE TRANSITION */}
                <AnimatePresence>
                  <motion.img
                    key={activeSlide}
                    src={slides[activeSlide].image}
                    alt={slides[activeSlide].title}
                    className="absolute inset-0 w-full h-full object-contain"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
          
          {/* Laptop base */}
          <div className="relative h-4 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-xl shadow-lg">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-1 bg-gray-600 rounded-full"></div>
          </div>
          
          {/* Laptop shadow */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[95%] h-4 bg-black/20 blur-xl rounded-full"></div>
        </div>
      </div>

      {/* Slide info - below laptop */}
      <div className="max-w-2xl mx-auto mt-12 text-center px-4 min-h-[120px]">
        {/* 3. ADDED TEXT TRANSITION */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
              {slides[activeSlide].title}
            </h3>
            <p className="text-lg text-muted-foreground">
              {slides[activeSlide].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
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
          
          return (
            <Card
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`absolute top-1/2 -translate-y-1/2 w-48 cursor-pointer transition-all duration-500 hover:scale-105 ${ // <-- CARD SPEED
                position === "left" ? "-left-16" : "-right-16"
              } opacity-60 hover:opacity-100`}
            >
              <div className="p-3">
                <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-background to-muted mb-2" style={{ aspectRatio: '16/10' }}>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-contain"
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

export default LaptopCarousel;

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/lovable-uploads/ae139fdd-c90a-4407-b79f-1f8ebad5dc67.png",
    "/lovable-uploads/1cb96b82-31c8-4f79-9365-eb23a4bfc4c8.png",
    "/lovable-uploads/dd473452-7149-47a4-856e-075831b4b5a1.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Background Images */}
      <div className="absolute inset-0 overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt="Hero Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            <span className="block mb-2">Two Worlds.</span>
            <span className="block">One Passion.</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Where fashion modeling meets data analysis. A unique blend of creativity
            and analytical precision for a dual-career portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-fashion-beige text-fashion-charcoal hover:bg-fashion-taupe">
              <Link to="/fashion">Explore Fashion</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-data-navy/80 border-data-lightblue text-white hover:bg-data-navy">
              <Link to="/data">View Data Projects</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10"
        >
          <div className="animate-bounce flex flex-col items-center">
            <div className="h-10 w-px bg-white/50"></div>
            <p className="text-white/80 text-sm mt-2">Scroll Down</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/About";
import DataPreview from "@/components/home/DataPreview";
import FashionPreview from "@/components/home/FashionPreview";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Sparkles, ArrowRight, Layers } from "lucide-react";

export default function Index() {
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [modalOpened, setModalOpened] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem("seenEntryModal");
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setShowModal(true);
        setModalOpened(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChoice = (route: string) => {
    setSelectedOption(route === "/fashion" ? "fashion" : "data");
    
    setTimeout(() => {
      sessionStorage.setItem("seenEntryModal", "true");
      setShowModal(false);
      navigate(route);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-fashion-cream/10">
      <Navbar />
      
      <AnimatePresence>
        {showModal && (
          <Dialog 
            open={showModal} 
            onOpenChange={(open) => {
              setShowModal(open);
              if (!open) {
                sessionStorage.setItem("seenEntryModal", "true");
              }
            }}
          >
            <DialogContent className="max-w-md sm:max-w-lg p-0 rounded-2xl border-none overflow-hidden bg-gradient-to-br from-background to-fashion-cream/30 backdrop-blur-lg shadow-[0_0_25px_rgba(0,0,0,0.1)]">
              <div className="p-6 sm:p-10 relative">
                <motion.div 
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fashion-beige via-data-teal to-fashion-beige"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 1 }}
                />
                
                <DialogHeader>
                  <DialogTitle className="text-3xl sm:text-4xl text-center font-serif mb-4 relative">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="inline-block"
                    >
                      <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-fashion-charcoal via-data-navy to-data-teal">
                        Choose Your Journey
                        <motion.div 
                          className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-fashion-charcoal via-data-navy to-data-teal"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: 0.6, duration: 0.8 }}
                        />
                      </span>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="absolute -top-6 -right-6 text-data-teal"
                      >
                        <Sparkles className="h-5 w-5" />
                      </motion.div>
                    </motion.div>
                  </DialogTitle>
                  <DialogDescription className="text-center mb-8 text-base text-gray-600">
                    Explore a unique blend of creativity and analytics
                  </DialogDescription>
                </DialogHeader>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col gap-6"
                >
                  <motion.div
                    whileHover={{ scale: 1.02, translateY: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative group overflow-hidden rounded-xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-fashion-beige/20 to-fashion-taupe/20 group-hover:opacity-80 transition-opacity duration-300" />
                    <Button
                      className={`w-full bg-gradient-to-r from-fashion-beige to-fashion-taupe text-fashion-charcoal hover:text-fashion-charcoal/90 font-serif text-lg py-7 shadow-lg hover:shadow-xl rounded-xl border border-fashion-beige/50 transition-all duration-300 relative z-10 ${
                        selectedOption === "fashion" ? "ring-2 ring-fashion-charcoal" : ""
                      }`}
                      size="lg"
                      onClick={() => handleChoice("/fashion")}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        <span>Fashion Portfolio</span>
                        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                        {selectedOption === "fashion" && (
                          <motion.span
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            className="absolute -bottom-1 left-0 h-0.5 bg-fashion-charcoal"
                          />
                        )}
                      </span>
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02, translateY: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative group overflow-hidden rounded-xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-data-lightblue/20 to-data-blue/20 group-hover:opacity-80 transition-opacity duration-300" />
                    <Button
                      className={`w-full bg-gradient-to-r from-data-lightblue/30 to-data-blue/20 text-data-navy hover:text-data-navy/90 border border-data-lightblue/50 font-serif text-lg py-7 shadow-lg hover:shadow-xl rounded-xl transition-all duration-300 relative z-10 ${
                        selectedOption === "data" ? "ring-2 ring-data-navy" : ""
                      }`}
                      variant="outline"
                      size="lg"
                      onClick={() => handleChoice("/data")}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        <span>Data Analytics</span>
                        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                        {selectedOption === "data" && (
                          <motion.span
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            className="absolute -bottom-1 left-0 h-0.5 bg-data-navy"
                          />
                        )}
                      </span>
                    </Button>
                  </motion.div>
                </motion.div>
                
                {modalOpened && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-center mt-8 text-sm text-muted-foreground"
                  >
                    <p className="flex items-center justify-center gap-2">
                      <Layers className="h-4 w-4 text-muted-foreground/70" />
                      <span>Both worlds are always accessible through the navigation menu</span>
                    </p>
                  </motion.div>
                )}
                
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-data-teal via-fashion-beige to-data-teal"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 1 }}
                />
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
      
      <Hero />
      <AboutPreview />
      <DataPreview />
      <FashionPreview />

      <section className="relative overflow-hidden section-padding bg-gradient-to-r from-fashion-beige via-background to-data-lightblue/30">
        <motion.div 
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fashion-beige via-data-teal to-fashion-beige"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center px-4"
        >
          <h2 className="text-3xl sm:text-5xl font-serif mb-6 relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fashion-charcoal to-data-navy">
              Let's Create Something Amazing
            </span>
            <motion.div 
              className="absolute -top-6 right-0 text-data-teal"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Sparkles className="h-5 w-5" />
            </motion.div>
          </h2>
          
          <p className="text-gray-700 mb-10 max-w-2xl mx-auto text-lg">
            Whether it's fashion projects or data analysis, I'm ready to bring your vision to life with creativity and precision.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-fashion-charcoal to-data-navy hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-10 py-7 text-lg rounded-xl relative overflow-hidden group"
            >
              <Link to="/contact" className="flex items-center gap-2">
                <span>Start a Conversation</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-data-teal/10 to-fashion-beige/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-data-teal via-fashion-beige to-data-teal"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
      </section>

      <Footer />
    </div>
  );
}

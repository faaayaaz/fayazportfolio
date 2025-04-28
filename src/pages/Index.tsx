
import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/About";
import FashionPreview from "@/components/home/FashionPreview";
import DataPreview from "@/components/home/DataPreview";
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
            <DialogContent className="max-w-md sm:max-w-lg p-0 rounded-2xl border-2 overflow-hidden bg-gradient-to-br from-background to-fashion-cream/30 backdrop-blur-sm">
              <div className="p-6 sm:p-10">
                <DialogHeader>
                  <DialogTitle className="text-2xl sm:text-3xl text-center font-serif mb-2">
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-fashion-charcoal via-data-navy to-data-teal"
                    >
                      Choose Your Journey
                    </motion.span>
                  </DialogTitle>
                  <DialogDescription className="text-center mb-8 text-base">
                    Step into a world where creativity meets analytics.
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
                    className="relative group"
                  >
                    <Button
                      className={`w-full bg-gradient-to-r from-fashion-beige to-fashion-taupe text-fashion-charcoal hover:text-fashion-charcoal/90 font-serif text-lg py-6 shadow-lg hover:shadow-xl rounded-lg border border-fashion-beige/50 transition-all duration-300 ${
                        selectedOption === "fashion" ? "ring-2 ring-fashion-charcoal" : ""
                      }`}
                      size="lg"
                      onClick={() => handleChoice("/fashion")}
                    >
                      <span className="relative z-10">
                        Fashion Portfolio
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
                    className="relative group"
                  >
                    <Button
                      className={`w-full bg-gradient-to-r from-data-lightblue/30 to-data-blue/20 text-data-navy hover:text-data-navy/90 border border-data-lightblue/50 font-serif text-lg py-6 shadow-lg hover:shadow-xl rounded-lg transition-all duration-300 ${
                        selectedOption === "data" ? "ring-2 ring-data-navy" : ""
                      }`}
                      variant="outline"
                      size="lg"
                      onClick={() => handleChoice("/data")}
                    >
                      <span className="relative z-10">
                        Data Analytics
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
                    className="text-center mt-6 text-sm text-muted-foreground"
                  >
                    <p>Both worlds are always accessible through the navigation menu.</p>
                  </motion.div>
                )}
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
      
      <Hero />
      <AboutPreview />
      <DataPreview />
      <FashionPreview />

      <section className="section-padding bg-gradient-to-r from-fashion-beige via-background to-data-lightblue/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center px-4"
        >
          <h2 className="text-3xl sm:text-4xl font-serif mb-6">Let's Create Something Amazing</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-lg">
            Whether it's fashion projects or data analysis, I'm ready to bring your vision to life with creativity and precision.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-gradient-to-r from-fashion-charcoal to-data-navy hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link to="/contact">Start a Conversation</Link>
          </Button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

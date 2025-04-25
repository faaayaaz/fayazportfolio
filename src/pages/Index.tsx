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
    <div className="min-h-screen">
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
            <DialogContent className="max-w-md sm:max-w-lg px-6 py-10 sm:px-10 md:px-12 sm:py-12 rounded-xl border-2">
              <DialogHeader>
                <DialogTitle className="text-2xl sm:text-3xl text-center font-serif mb-2">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-fashion-charcoal to-data-navy">
                    What would you like to explore first?
                  </span>
                </DialogTitle>
                <DialogDescription className="text-center mb-8 text-base">
                  Choose your journey — Fashion Portfolio or Data Analytics Projects.
                </DialogDescription>
              </DialogHeader>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col gap-6"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    className={`w-full bg-gradient-to-r from-fashion-beige to-fashion-taupe text-fashion-charcoal hover:text-fashion-charcoal/90 font-serif text-lg py-6 shadow-md rounded-lg border border-fashion-beige/50 transition-all duration-300 ${
                      selectedOption === "fashion" ? "ring-2 ring-fashion-charcoal" : ""
                    }`}
                    size="lg"
                    onClick={() => handleChoice("/fashion")}
                  >
                    <span className="relative">
                      Fashion Projects
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
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    className={`w-full bg-gradient-to-r from-data-lightblue/30 to-data-blue/20 text-data-navy hover:text-data-navy/90 border border-data-lightblue/50 font-serif text-lg py-6 shadow-md hover:shadow-lg rounded-lg transition-all duration-300 ${
                      selectedOption === "data" ? "ring-2 ring-data-navy" : ""
                    }`}
                    variant="outline"
                    size="lg"
                    onClick={() => handleChoice("/data")}
                  >
                    <span className="relative">
                      Data Analytics Projects
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
                  <p>Don't worry, you can explore both sections anytime from the navigation menu.</p>
                </motion.div>
              )}
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
      
      <Hero />
      <AboutPreview />
      <DataPreview />
      <FashionPreview />

      <section className="section-padding bg-gradient-to-r from-fashion-beige to-data-lightblue/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center px-4"
        >
          <h2 className="text-3xl font-serif mb-6">Let's Work Together</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Interested in collaborating on fashion projects or data analysis? 
            Get in touch to discuss how we can bring your vision to life.
          </p>
          <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-all duration-300">
            <Link to="/contact">Contact Me</Link>
          </Button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

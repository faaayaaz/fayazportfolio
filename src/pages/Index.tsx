
import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/About";
import FashionPreview from "@/components/home/FashionPreview";
import DataPreview from "@/components/home/DataPreview";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function Index() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Only show the modal if user hasn't chosen before in this tab
    if (!sessionStorage.getItem("seenEntryModal")) {
      setShowModal(true);
    }
  }, []);

  const handleChoice = (route: string) => {
    sessionStorage.setItem("seenEntryModal", "true");
    setShowModal(false);
    navigate(route);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Dialog open={showModal} onOpenChange={() => setShowModal(false)}>
        <DialogContent className="max-w-md px-8 py-8 sm:px-12 sm:py-10">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center font-serif mb-1">
              What would you like to explore first?
            </DialogTitle>
            <DialogDescription className="text-center mb-6">
              Choose your domain — Fashion Portfolio or Data Analytics Projects.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 mt-2">
            <Button
              className="bg-fashion-beige text-fashion-charcoal hover:bg-fashion-taupe text-lg py-6"
              size="lg"
              onClick={() => handleChoice("/fashion")}
            >
              Fashion Projects
            </Button>
            <Button
              className="bg-data-navy/80 border border-data-lightblue text-white hover:bg-data-navy text-lg py-6"
              variant="outline"
              size="lg"
              onClick={() => handleChoice("/data")}
            >
              Data Analytics Projects
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <Hero />
      <AboutPreview />
      <FashionPreview />
      <DataPreview />

      {/* Contact CTA */}
      <section className="section-padding bg-gradient-to-r from-fashion-beige to-data-lightblue/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-serif mb-6">Let's Work Together</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Interested in collaborating on fashion projects or data analysis? 
            Get in touch to discuss how we can bring your vision to life.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Contact Me</Link>
          </Button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

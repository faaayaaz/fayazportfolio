
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/About";
import FashionPreview from "@/components/home/FashionPreview";
import DataPreview from "@/components/home/DataPreview";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
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

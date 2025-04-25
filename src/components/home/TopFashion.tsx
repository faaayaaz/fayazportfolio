
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GalleryHorizontal } from "lucide-react";

export default function TopFashion() {
  const fashionHighlights = [
    {
      title: "Latest Collection",
      image: "/lovable-uploads/ae139fdd-c90a-4407-b79f-1f8ebad5dc67.png",
      description: "Exploring contemporary fashion through artistic expression"
    },
    {
      title: "Editorial Series",
      image: "/lovable-uploads/dd473452-7149-47a4-856e-075831b4b5a1.png",
      description: "A journey through seasonal trends and timeless style"
    },
    {
      title: "Campaign Highlight",
      image: "/lovable-uploads/1cb96b82-31c8-4f79-9365-eb23a4bfc4c8.png",
      description: "Showcasing the essence of modern fashion narratives"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-fashion-cream/50 to-fashion-beige/30">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <GalleryHorizontal className="w-6 h-6 text-fashion-charcoal" />
            <h2 className="text-3xl font-serif text-fashion-charcoal">Featured Collections</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our latest works and artistic collaborations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {fashionHighlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border-fashion-taupe/20 hover:border-fashion-taupe/40 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-serif text-fashion-charcoal mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            className="bg-fashion-taupe hover:bg-fashion-taupe/90 text-white"
          >
            <Link to="/fashion">View All Collections</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

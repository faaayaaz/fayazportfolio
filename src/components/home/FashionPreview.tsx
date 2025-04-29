
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, ArrowRight } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";

export default function FashionPreview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const fashionProjects = [
    {
      title: "Urban Collection",
      image: "/lovable-uploads/1cb96b82-31c8-4f79-9365-eb23a4bfc4c8.png",
      description: "City-inspired fashion shoot featuring contemporary urban styles.",
    },
    {
      title: "Winter Campaign",
      image: "/lovable-uploads/26d9f84d-93af-4f3f-935d-21c6ebdf937f.png",
      description: "Seasonal collection highlighting elegant winter fashion.",
    },
    {
      title: "Spring Editorial",
      image: "/lovable-uploads/357ea9c5-6a81-4980-afb3-0dda40df4919.png",
      description: "Fresh and vibrant spring styles in an artistic setting.",
    },
    {
      title: "Summer Vibes",
      image: "/lovable-uploads/7e04893a-ef02-44c6-96ad-5e68880373bb.png",
      description: "Capturing the essence of summer fashion and lifestyle.",
    },
    {
      title: "Artistic Series",
      image: "/lovable-uploads/ae139fdd-c90a-4407-b79f-1f8ebad5dc67.png",
      description: "An artistic interpretation of contemporary fashion.",
    },
    {
      title: "Spring Dreams",
      image: "/lovable-uploads/dd473452-7149-47a4-856e-075831b4b5a1.png",
      description: "A dreamy spring campaign featuring light fabrics and natural settings.",
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative overflow-hidden py-20 px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-fashion-cream via-background to-fashion-beige/30 -z-10" />
      
      {/* Decorative elements */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-fashion-beige via-fashion-taupe to-fashion-beige"
      />
      
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <div className="inline-block relative">
            <h2 className="text-4xl font-serif mb-3 relative">
              Fashion Portfolio
              <motion.div 
                className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-fashion-charcoal via-fashion-taupe to-fashion-charcoal"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </h2>
          </div>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg mt-4 italic">
            Showcasing a curated selection of modeling work across diverse styles,
            brands, and creative concepts.
          </p>
        </div>
        
        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-xl h-[500px]">
            <img 
              src="/lovable-uploads/1cb96b82-31c8-4f79-9365-eb23a4bfc4c8.png" 
              alt="Featured Fashion" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-8 md:p-10">
              <h3 className="text-white text-3xl font-serif mb-2">Urban Collection</h3>
              <p className="text-white/80 mb-4 max-w-lg">
                Explore the latest urban fashion styles captured in this stunning editorial series.
              </p>
              <Button 
                asChild
                variant="outline" 
                className="w-fit bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 group transition-all duration-300"
              >
                <Link to="/fashion" className="flex items-center gap-2">
                  Explore Collection
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Carousel of fashion projects */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full mt-8"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-serif">Featured Projects</h3>
            <div className="flex space-x-2">
              <CarouselPrevious className="relative left-0" />
              <CarouselNext className="relative right-0" />
            </div>
          </div>
          <Separator className="mb-6 bg-gradient-to-r from-fashion-beige via-fashion-taupe to-fashion-beige h-0.5 rounded-full" />
          <CarouselContent>
            {fashionProjects.map((project, index) => (
              <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3 pl-4">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <motion.div 
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                      className="fashion-card relative rounded-xl overflow-hidden shadow-lg transition-all duration-300"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <div className="h-[300px] overflow-hidden relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                          style={{
                            transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)"
                          }}
                        />
                        <div 
                          className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end opacity-0 transition-opacity duration-300 ${
                            hoveredIndex === index ? 'opacity-100' : ''
                          }`}
                        >
                          <div className="p-4">
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20"
                            >
                              <Eye className="h-4 w-4 mr-1" /> View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-white to-fashion-cream/80">
                        <h3 className="text-xl font-serif mb-2">{project.title}</h3>
                        <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
                      </div>
                    </motion.div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-72 p-0 overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold font-serif">{project.title}</h4>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Button 
            asChild
            size="lg"
            className="bg-gradient-to-r from-fashion-charcoal to-fashion-taupe text-white hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link to="/fashion" className="flex items-center gap-2 px-6 py-6 text-lg">
              View All Fashion Projects
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-fashion-taupe via-fashion-beige to-fashion-taupe"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
    </section>
  );
}


import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function Fashion() {
  const [selectedProject, setSelectedProject] = useState<FashionProject | null>(null);
  
  // Categories for filtering
  const categories = ["All", "Editorial", "Commercial", "Runway", "Campaign"];
  const [activeCategory, setActiveCategory] = useState("All");

  interface FashionProject {
    id: number;
    title: string;
    category: string;
    description: string;
    client: string;
    year: string;
    image: string;
    photographer?: string;
  }

  const projects: FashionProject[] = [
    {
      id: 1,
      title: "Urban Night Collection",
      category: "Editorial",
      description: "A fashion editorial showcasing urban nightlife style elements with contemporary cuts and textures. Shot against the backdrop of a vibrant city at night, highlighting the contrast between dark urban environments and fashion-forward styling.",
      client: "Fashion Magazine",
      year: "2023",
      photographer: "J. Williams",
      image: "/lovable-uploads/ae139fdd-c90a-4407-b79f-1f8ebad5dc67.png"
    },
    {
      id: 2,
      title: "City Lights",
      category: "Editorial",
      description: "Editorial shoot featuring elegant evening wear in an urban setting. The city lights create a stunning backdrop for showcasing sophisticated attire designed for urban professionals.",
      client: "Urban Style Magazine",
      year: "2023",
      photographer: "A. Reynolds",
      image: "/lovable-uploads/1cb96b82-31c8-4f79-9365-eb23a4bfc4c8.png"
    },
    {
      id: 3,
      title: "Winter Essentials",
      category: "Commercial",
      description: "Commercial campaign for winter collection featuring practical yet stylish cold-weather essentials. Demonstrating the functionality and fashion appeal of winter clothing in real-world environments.",
      client: "Northern Apparel",
      year: "2022",
      photographer: "C. Morgan",
      image: "/lovable-uploads/26d9f84d-93af-4f3f-935d-21c6ebdf937f.png"
    },
    {
      id: 4,
      title: "Sunset Boulevard",
      category: "Campaign",
      description: "A sunset-themed campaign highlighting summer fashion with warm tones and casual silhouettes. The golden hour lighting accentuates the seasonal color palette and relaxed styling.",
      client: "Summer Trends",
      year: "2023",
      photographer: "L. Thompson",
      image: "/lovable-uploads/dd473452-7149-47a4-856e-075831b4b5a1.png"
    },
    {
      id: 5,
      title: "Mountain Retreat",
      category: "Commercial",
      description: "Commercial project showcasing outdoor apparel in a mountain setting. Functional fashion that combines performance with style for the adventure enthusiast.",
      client: "Outdoor Living",
      year: "2022",
      photographer: "R. Blake",
      image: "/lovable-uploads/26d9f84d-93af-4f3f-935d-21c6ebdf937f.png"
    },
    {
      id: 6,
      title: "Elegant Evening",
      category: "Editorial",
      description: "Editorial spread featuring formal and semi-formal attire for upscale evening events. Classic silhouettes with modern touches create a timeless yet contemporary collection.",
      client: "Elegance Magazine",
      year: "2023",
      photographer: "E. Davis",
      image: "/lovable-uploads/effb464c-46e9-4f0e-9149-8adb1d3b1d22.png"
    },
    {
      id: 7,
      title: "Spring Collection Runway",
      category: "Runway",
      description: "Runway show featuring the latest spring collection with fresh colors and innovative designs. A showcase of upcoming trends for the fashion-forward consumer.",
      client: "Fashion Week",
      year: "2023",
      photographer: "T. Wilson",
      image: "/lovable-uploads/7e04893a-ef02-44c6-96ad-5e68880373bb.png"
    }
  ];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[50vh] bg-fashion-beige/30">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/lovable-uploads/1cb96b82-31c8-4f79-9365-eb23a4bfc4c8.png"
              alt="Fashion Hero"
              className="w-full h-full object-cover object-center opacity-40"
            />
          </div>
          <div className="relative h-full flex items-center justify-center px-4">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-serif font-bold mb-4"
              >
                Fashion Portfolio
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg max-w-2xl mx-auto"
              >
                A curated collection of editorial, commercial, and runway projects
                showcasing versatility and creative vision.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className={`${
                    activeCategory === category 
                      ? "bg-fashion-taupe text-white hover:bg-fashion-taupe/90" 
                      : "text-gray-700 hover:text-fashion-charcoal"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            {/* Gallery Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="gallery-grid"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="gallery-item rounded-lg overflow-hidden"
                  onClick={() => setSelectedProject(project)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="gallery-overlay">
                    <h3 className="text-white text-xl font-serif">{project.title}</h3>
                    <p className="text-white/80 text-sm mt-1">{project.category}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      
      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-serif">{selectedProject.title}</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Category</h4>
                    <p>{selectedProject.category}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Description</h4>
                    <p className="text-gray-700">{selectedProject.description}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Client</h4>
                    <p>{selectedProject.client}</p>
                  </div>
                  {selectedProject.photographer && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Photographer</h4>
                      <p>{selectedProject.photographer}</p>
                    </div>
                  )}
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Year</h4>
                    <p>{selectedProject.year}</p>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
      
      <Footer />
    </div>
  );
}

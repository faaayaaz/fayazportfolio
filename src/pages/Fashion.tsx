import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FashionAdminControls } from "@/components/admin/FashionAdminControls";

interface FashionProject {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  client: string;
  photographer?: string;
  year: number;
}

const Fashion = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<FashionProject | null>(null);

  const categories = ["All", "Editorial", "Commercial", "Runway", "Campaign"];

  const fashionProjects: FashionProject[] = [
    {
      id: 1,
      title: "Urban Collection",
      category: "Editorial",
      image: "/lovable-uploads/1cb96b82-31c8-4f79-9365-eb23a4bfc4c8.png",
      description: "A vibrant editorial shoot showcasing the latest urban trends with modern silhouettes.",
      client: "Fashion Magazine",
      photographer: "Jane Smith",
      year: 2023
    },
    {
      id: 2,
      title: "Winter Elegance",
      category: "Commercial",
      image: "/lovable-uploads/26d9f84d-93af-4f3f-935d-21c6ebdf937f.png",
      description: "Commercial campaign highlighting luxury winter wear and accessories.",
      client: "Luxury Brand Co.",
      year: 2023
    },
    {
      id: 3,
      title: "Runway Moments",
      category: "Runway",
      image: "/lovable-uploads/357ea9c5-6a81-4980-afb3-0dda40df4919.png",
      description: "Capturing the essence of haute couture on the runway.",
      client: "Designer House",
      year: 2023
    },
    {
      id: 4,
      title: "Summer Collection",
      category: "Campaign",
      image: "/lovable-uploads/7e04893a-ef02-44c6-96ad-5e68880373bb.png",
      description: "A vibrant summer campaign showcasing seasonal trends.",
      client: "Summer Fashion Ltd.",
      photographer: "Michael Brown",
      year: 2023
    },
    {
      id: 5,
      title: "Artistic Series",
      category: "Editorial",
      image: "/lovable-uploads/ae139fdd-c90a-4407-b79f-1f8ebad5dc67.png",
      description: "An artistic interpretation of contemporary fashion.",
      client: "Art & Fashion Magazine",
      photographer: "Sarah Wilson",
      year: 2023
    },
    {
      id: 6,
      title: "Spring Dreams",
      category: "Campaign",
      image: "/lovable-uploads/dd473452-7149-47a4-856e-075831b4b5a1.png",
      description: "A dreamy spring campaign featuring floral motifs and light fabrics.",
      client: "Spring Fashion Ltd.",
      year: 2023
    },
    {
      id: 7,
      title: "Accessories Edit",
      category: "Commercial",
      image: "/lovable-uploads/effb464c-46e9-4f0e-9149-8adb1d3b1d22.png",
      description: "Showcasing premium accessories and jewelry pieces.",
      client: "Luxe Accessories",
      photographer: "David Lee",
      year: 2023
    },
    {
      id: 8,
      title: "Autumn Vibes",
      category: "Editorial",
      image: "/lovable-uploads/4bdd5663-8cc1-4492-bc0b-e137ad9812ad.png",
      description: "An editorial exploring autumn fashion and textures.",
      client: "Style Magazine",
      year: 2023
    },
    {
      id: 9,
      title: "Modern Minimalism",
      category: "Campaign",
      image: "/lovable-uploads/83c8a021-5998-44ec-ad17-1c9a1d09695a.png",
      description: "A minimalist approach to modern fashion.",
      client: "Minimalist Fashion Co.",
      photographer: "Emma White",
      year: 2023
    }
  ];

  const filteredProjects = activeCategory === "All"
    ? fashionProjects
    : fashionProjects.filter(project => project.category === activeCategory);

  useEffect(() => {
    const checkAdmin = () => {
      const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
      setIsAdmin(isLoggedIn);
    };

    checkAdmin();
    window.addEventListener("storage", checkAdmin);
    
    return () => {
      window.removeEventListener("storage", checkAdmin);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
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

        <section className="py-12 px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
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
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group relative rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-4">
                      <h3 className="text-white text-xl font-serif">{project.title}</h3>
                      <p className="text-white/80 text-sm mt-1">{project.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      
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
      
      {isAdmin && <FashionAdminControls />}
      <Footer />
    </div>
  );
};

export default Fashion;

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BarChart, PieChart, LineChart, ArrowRight, Cuboid } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Text } from "@react-three/drei";
import * as THREE from 'three';

// 3D Data Cube Component
const DataCube = ({ position = [0, 0, 0], color = "#3E78B2", size = 1.5 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.003;
    meshRef.current.rotation.y += 0.005;
  });
  
  return (
    <mesh position={position as any} ref={meshRef}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.8} 
        roughness={0.3}
        metalness={0.5}
      />
    </mesh>
  );
};

// 3D Floating Chart Component
const FloatingChart = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      
      <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.6}>
        <DataCube position={[-2, -0.5, 0]} color="#2A9D8F" size={1.2} />
        <DataCube position={[1.5, 0.5, -1]} color="#3E78B2" size={0.9} />
        <DataCube position={[0, 1, 1]} color="#1A2B49" size={1.5} />
        
        <Text
          position={[0, -2, 0]}
          color="#2A9D8F"
          fontSize={0.5}
          font="/Playfair_Display/PlayfairDisplay-Bold.ttf"
          anchorX="center"
          anchorY="middle"
        >
          Data Analytics
        </Text>
      </Float>
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.7}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
};

export default function DataPreview() {
  const featuredProjects = [
    {
      title: "E-commerce Analytics Dashboard",
      metric: "+24% Revenue",
      highlight: "Leveraging data to boost online sales performance.",
      tech: "Python · Pandas · SQL · Tableau",
      description: "Built a comprehensive analytics dashboard that helped increase e-commerce revenue by identifying key customer behavior patterns and optimizing product recommendations.",
      url: "/data",
      color: "from-data-lightblue/20 to-data-teal/20",
      icon: <BarChart className="h-6 w-6 text-data-teal opacity-80" />
    },
    {
      title: "Predictive Inventory System",
      metric: "-30% Waste",
      highlight: "AI-powered inventory management.",
      tech: "Python · TensorFlow · scikit-learn",
      description: "Developed a machine learning model that predicts optimal inventory levels, reducing waste by 30% while maintaining stock availability.",
      url: "/data",
      color: "from-data-blue/20 to-data-navy/20",
      icon: <LineChart className="h-6 w-6 text-data-blue opacity-80" />
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-tr from-data-lightblue/20 via-data-teal/5 to-white/90 dark:from-data-navy/30 dark:via-data-blue/10 dark:to-slate-900/90">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12 relative">
            <motion.div 
              className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-data-teal via-data-blue to-data-navy opacity-70"
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            />
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-data-navy via-data-blue to-data-teal">
              Data-Driven Solutions
            </h2>
            
            <p className="text-lg md:text-xl font-medium text-data-blue/90 dark:text-data-lightblue/90 max-w-2xl mx-auto">
              Transforming complex data into actionable insights
            </p>

            <motion.div 
              className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-data-navy via-data-blue to-data-teal opacity-70"
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            />
          </div>
          
          {/* 3D Data Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl h-[300px] mx-auto mb-16 rounded-xl overflow-hidden shadow-xl border border-data-lightblue/30 dark:border-data-blue/30"
          >
            <Canvas>
              <FloatingChart />
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-t from-data-navy/10 to-transparent pointer-events-none" />
            <div className="absolute top-4 left-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-lg text-data-navy dark:text-data-lightblue text-sm">
              <div className="flex items-center gap-2">
                <Cuboid className="h-5 w-5" />
                <span>Interactive 3D Data Visualization</span>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 px-4 mb-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className={`h-full bg-gradient-to-br ${project.color} backdrop-blur-sm border-2 border-data-lightblue/20 dark:border-data-blue/20 hover:border-data-teal/40 dark:hover:border-data-teal/40 transition-all duration-300`}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <motion.div 
                          animate={{ rotate: [0, 10, 0] }} 
                          transition={{ duration: 5, repeat: Infinity }}
                          className="p-2 bg-white/80 dark:bg-slate-800/80 rounded-lg shadow-sm"
                        >
                          {project.icon}
                        </motion.div>
                        <motion.div 
                          animate={{ rotate: [0, -5, 0] }} 
                          transition={{ duration: 6, delay: 0.5, repeat: Infinity }}
                          className="p-2 bg-white/80 dark:bg-slate-800/80 rounded-lg shadow-sm"
                        >
                          <PieChart className="h-6 w-6 text-data-blue opacity-80" />
                        </motion.div>
                      </div>
                      <span className="text-2xl font-bold text-data-teal bg-white/60 dark:bg-slate-800/60 px-3 py-1 rounded-md">{project.metric}</span>
                    </div>
                    <CardTitle className="text-xl font-bold text-data-navy dark:text-data-lightblue mb-2 group-hover:text-data-teal transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base text-gray-600 dark:text-gray-300 line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.split('·').map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 text-sm rounded-full bg-white/70 dark:bg-slate-800/70 border border-data-lightblue/30 text-data-navy/90 dark:border-data-blue/40 dark:text-data-lightblue/90"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                    
                    <motion.div 
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link 
                        to={project.url} 
                        className="inline-flex items-center gap-2 text-data-blue hover:text-data-teal dark:text-data-lightblue dark:hover:text-data-teal transition-colors duration-200"
                      >
                        <span>Explore this project</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-data-navy to-data-blue hover:from-data-blue hover:to-data-teal dark:from-data-blue dark:to-data-teal dark:hover:from-data-teal dark:hover:to-data-blue px-8 py-6 text-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Link to="/data" className="flex items-center gap-2">
                  <span>Explore All Data Projects</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

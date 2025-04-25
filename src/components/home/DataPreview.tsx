
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BarChart, PieChart } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function DataPreview() {
  const featuredProjects = [
    {
      title: "E-commerce Analytics Dashboard",
      metric: "+24% Revenue",
      highlight: "Leveraging data to boost online sales performance.",
      tech: "Python · Pandas · SQL · Tableau",
      description: "Built a comprehensive analytics dashboard that helped increase e-commerce revenue by identifying key customer behavior patterns and optimizing product recommendations.",
      url: "/data"
    },
    {
      title: "Predictive Inventory System",
      metric: "-30% Waste",
      highlight: "AI-powered inventory management.",
      tech: "Python · TensorFlow · scikit-learn",
      description: "Developed a machine learning model that predicts optimal inventory levels, reducing waste by 30% while maintaining stock availability.",
      url: "/data"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-tr from-data-lightblue/20 to-white/90 dark:from-data-navy/20 dark:to-slate-900/90">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 text-data-navy dark:text-data-lightblue">
              Data-Driven Solutions
            </h2>
            <p className="text-lg md:text-xl font-medium text-data-blue/90 dark:text-data-lightblue/90 max-w-2xl mx-auto">
              Transforming complex data into actionable insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 px-4 mb-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-2 border-data-lightblue/20 dark:border-data-blue/20 hover:border-data-lightblue/40 dark:hover:border-data-blue/40 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <motion.div 
                          animate={{ rotate: [0, 10, 0] }} 
                          transition={{ duration: 5, repeat: Infinity }}
                        >
                          <PieChart className="h-6 w-6 text-data-teal opacity-80" />
                        </motion.div>
                        <motion.div 
                          animate={{ rotate: [0, -5, 0] }} 
                          transition={{ duration: 6, delay: 0.5, repeat: Infinity }}
                        >
                          <BarChart className="h-6 w-6 text-data-blue opacity-80" />
                        </motion.div>
                      </div>
                      <span className="text-2xl font-bold text-data-teal">{project.metric}</span>
                    </div>
                    <CardTitle className="text-xl font-bold text-data-navy dark:text-data-lightblue mb-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base text-gray-600 dark:text-gray-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.split('·').map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 text-sm rounded-full bg-data-lightblue/20 border border-data-lightblue/30 text-data-navy/90 dark:bg-data-blue/20 dark:border-data-blue/40 dark:text-data-lightblue/90"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-data-navy hover:bg-data-navy/90 dark:bg-data-blue dark:hover:bg-data-blue/90 px-8 py-6 text-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Link to="/data">
                <span className="mr-1">Explore All Data Projects</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BarChart, PieChart } from "lucide-react";

export default function DataPreview() {
  const keyProject = {
    title: "E-commerce Data Magic",
    metric: "+24% Conversions",
    highlight: "Analytics that move the needle.",
    tech: "Python · Pandas · SQL",
    url: "/data",
  };

  return (
    <section className="section-padding bg-gradient-to-tr from-data-lightblue/20 to-white/90">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-2 text-data-navy">
              Real Results. Real Impact.
            </h2>
            <p className="text-lg md:text-xl font-medium text-data-blue/90 max-w-2xl mx-auto">
              Transforming complex data into sharp, actionable strategies.
            </p>
          </div>
          <div className="flex justify-center mb-8 px-4">
            <motion.div
              initial={{ scale: 0.96, opacity: 0.7 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 170, damping: 15 }}
              className="relative bg-white rounded-xl border-2 border-data-lightblue/60 shadow-lg overflow-hidden w-full max-w-md flex flex-col items-center"
            >
              {/* Animated accent bar */}
              <motion.div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-1.5 rounded-b bg-gradient-to-r from-data-blue via-data-teal to-data-blue" 
                animate={{ width: ["30%", "50%", "30%"], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
              />
              
              {/* Card content */}
              <div className="p-8 flex flex-col items-center w-full">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <motion.div animate={{ rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }}>
                    <PieChart className="h-6 w-6 text-data-teal opacity-80" />
                  </motion.div>
                  <motion.div animate={{ rotate: [0, -5, 0] }} transition={{ duration: 6, delay: 0.5, repeat: Infinity }}>
                    <BarChart className="h-6 w-6 text-data-blue opacity-80" />
                  </motion.div>
                </div>
                
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-data-teal mb-3"
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.05, 1], color: ["#2A9D8F", "#3E78B2", "#2A9D8F"] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  {keyProject.metric}
                </motion.div>
                
                <div className="text-[1.12rem] mb-2 font-semibold text-data-navy">{keyProject.title}</div>
                <p className="text-gray-700 text-base mb-4 text-center">{keyProject.highlight}</p>
                
                <div className="flex flex-wrap justify-center gap-2 mb-2">
                  {keyProject.tech.split('·').map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-sm rounded-full bg-data-lightblue/20 border border-data-lightblue/30 text-data-navy/90">
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          <div className="mt-6 text-center px-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-data-navy hover:bg-data-navy/90 px-8 py-5 text-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Link to={keyProject.url}>
                <span className="mr-1">See All Data Projects</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

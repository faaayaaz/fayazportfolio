
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2 text-data-navy">
              Real Results. Real Impact.
            </h2>
            <p className="text-lg font-medium text-data-blue/90">
              Transforming data into sharp strategies.
            </p>
          </div>
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ scale: 0.96, opacity: 0.7 }}
              whileHover={{ scale: 1.02, boxShadow: "0 12px 36px 0 rgba(30,44,69,0.09)" }}
              transition={{ type: "spring", stiffness: 170, damping: 15 }}
              className="relative bg-white rounded-xl border-2 border-data-lightblue/60 shadow-lg p-8 max-w-md w-full flex flex-col items-center"
            >
              {/* Animated accent bar */}
              <motion.div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 rounded bg-gradient-to-r from-data-blue to-data-teal" 
                animate={{ opacity: [0, 1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
              />
              <motion.div
                className="text-3xl md:text-4xl font-bold text-data-teal mb-4"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.1, 1], color: ["#2A9D8F", "#3E78B2", "#2A9D8F"] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {keyProject.metric}
              </motion.div>
              <div className="text-[1.12rem] mb-3 font-semibold text-data-navy">{keyProject.title}</div>
              <p className="text-gray-700 text-base mb-4 text-center">{keyProject.highlight}</p>
              <span className="inline-block px-3 py-1 text-sm rounded-full bg-data-lightblue text-data-navy/90 mb-2">{keyProject.tech}</span>
            </motion.div>
          </div>
          <div className="mt-2 text-center">
            <Button asChild size="lg" className="bg-data-navy hover:bg-data-navy/90 px-8 py-5 text-lg transition-all duration-200 shadow">
              <Link to={keyProject.url}>See All Data Projects &rarr;</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

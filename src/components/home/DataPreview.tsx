
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function DataPreview() {
  // Highlight one main project or summary with a punchy headline
  const keyProject = {
    title: "E-commerce Customer Analysis",
    metric: "24% increase in conversions",
    highlight: "Drove real business impact with data insights.",
    technologies: "Python, Pandas, SQL",
    url: "/data",
  };

  return (
    <section className="section-padding bg-data-lightblue/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif mb-3">Data Analytics That Drive Results</h2>
            <p className="text-data-navy font-semibold text-lg mb-4">
              Turning complex datasets into clear, actionable strategies.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-10">
            <div className="bg-white rounded-xl shadow-lg p-8 flex-1 max-w-xl border border-data-lightblue/30">
              <h3 className="text-xl font-serif mb-3">{keyProject.title}</h3>
              <div className="text-sm text-data-blue mb-2">{keyProject.technologies}</div>
              <p className="text-gray-700 font-medium mb-3">{keyProject.highlight}</p>
              <div className="text-lg font-bold text-data-navy mb-2">{keyProject.metric}</div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <Button asChild size="lg" className="bg-data-navy hover:bg-data-navy/90 px-8 py-6 text-lg">
              <Link to="/data">See More Data Projects</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

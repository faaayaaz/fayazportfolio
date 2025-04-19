
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

export default function DataPreview() {
  const chartRef = useRef<HTMLDivElement>(null);
  
  const data = [
    { name: "Project A", value: 87 },
    { name: "Project B", value: 63 },
    { name: "Project C", value: 92 },
    { name: "Project D", value: 71 },
    { name: "Project E", value: 55 },
  ];
  
  const dataProjects = [
    {
      title: "E-commerce Customer Analysis",
      technologies: "Python, Pandas, SQL",
      description: "Analyzed customer behavior to optimize user journey and increase conversions by 24%."
    },
    {
      title: "Fashion Inventory Prediction",
      technologies: "R, Time Series Analysis",
      description: "Built a prediction model for fashion inventory management with 92% accuracy."
    },
    {
      title: "Market Research Dashboard",
      technologies: "Tableau, SQL, Python",
      description: "Created an interactive dashboard to visualize market research data for a major fashion brand."
    }
  ];

  return (
    <section className="section-padding bg-data-lightblue/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif mb-3">Data Analysis Projects</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Leveraging data science and analytical skills to extract insights and
              solve complex business problems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            <div ref={chartRef} className="chart-container">
              <h3 className="text-xl font-serif mb-4">Project Success Metrics</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#3E78B2" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-serif mb-2">My Analytical Approach</h3>
              <p className="text-gray-700">
                I combine statistical methods with modern data science techniques to 
                derive actionable insights from complex datasets.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Python & Data Science</span>
                    <span className="text-sm font-medium">95%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress bg-data-blue"
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">SQL & Database</span>
                    <span className="text-sm font-medium">90%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress bg-data-teal"
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      transition={{ duration: 1, delay: 0.3 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Data Visualization</span>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress bg-data-navy"
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1, delay: 0.4 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dataProjects.map((project, index) => (
              <motion.div
                key={index}
                className="data-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-serif mb-2">{project.title}</h3>
                <div className="text-sm text-data-blue mb-3">{project.technologies}</div>
                <p className="text-gray-600">{project.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button asChild size="lg" className="bg-data-navy hover:bg-data-navy/90">
              <Link to="/data">Explore Data Projects</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

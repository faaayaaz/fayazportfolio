
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    {
      category: "Fashion",
      items: [
        { name: "Editorial Modeling", level: 95 },
        { name: "Commercial Modeling", level: 90 },
        { name: "Fashion Photography", level: 85 },
        { name: "Runway", level: 80 },
      ]
    },
    {
      category: "Data Analysis",
      items: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 90 },
        { name: "R", level: 85 },
        { name: "Tableau", level: 80 },
        { name: "Machine Learning", level: 75 },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[50vh] bg-gradient-to-r from-fashion-beige to-data-lightblue/30">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/lovable-uploads/7e04893a-ef02-44c6-96ad-5e68880373bb.png"
              alt="About Hero"
              className="w-full h-full object-cover object-center opacity-20"
            />
          </div>
          <div className="relative h-full flex items-center justify-center px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold">About Me</h1>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="/lovable-uploads/effb464c-46e9-4f0e-9149-8adb1d3b1d22.png"
                  alt="Portrait"
                  className="rounded-lg w-full max-w-md shadow-lg mx-auto"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-3xl font-serif mb-6">My Story</h2>
                <p className="mb-4 text-gray-700">
                  With an unusual combination of fashion modeling and data analysis expertise,
                  I've built a career that bridges the creative and analytical worlds.
                </p>
                <p className="mb-4 text-gray-700">
                  My journey began in the modeling industry 6 years ago, collaborating with diverse
                  brands and photographers across editorial, commercial, and runway projects. This
                  experience cultivated my eye for aesthetics and visual storytelling.
                </p>
                <p className="mb-4 text-gray-700">
                  Simultaneously, I pursued my passion for data science, specializing in Python,
                  SQL, and R. I've leveraged these skills to help companies make data-driven
                  decisions and uncover valuable insights hidden in complex datasets.
                </p>
                <p className="text-gray-700">
                  This dual career path has given me a unique perspective that allows me to approach
                  problems with both creative intuition and analytical precision.
                </p>
              </motion.div>
            </div>
            
            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl font-serif mb-8 text-center">Skills & Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {skills.map((skillGroup, groupIndex) => (
                  <div key={groupIndex}>
                    <h3 className="text-2xl font-serif mb-6">{skillGroup.category}</h3>
                    <div className="space-y-6">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-sm font-medium">{skill.level}%</span>
                          </div>
                          <div className="skill-bar">
                            <motion.div 
                              className={`skill-progress ${
                                skillGroup.category === "Fashion" 
                                  ? "bg-fashion-taupe" 
                                  : "bg-data-blue"
                              }`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.1 * skillIndex }}
                              viewport={{ once: true }}
                            ></motion.div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Education & Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <h2 className="text-3xl font-serif mb-8 text-center">Education & Experience</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Education */}
                <div>
                  <h3 className="text-2xl font-serif mb-6">Education</h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-fashion-taupe pl-4 py-2">
                      <h4 className="font-medium">MSc in Data Science</h4>
                      <p className="text-gray-600">University of Technology, 2019-2021</p>
                      <p className="text-sm text-gray-700 mt-2">
                        Specialized in predictive modeling and data visualization
                      </p>
                    </div>
                    <div className="border-l-4 border-fashion-taupe pl-4 py-2">
                      <h4 className="font-medium">BSc in Computer Science</h4>
                      <p className="text-gray-600">State University, 2015-2019</p>
                      <p className="text-sm text-gray-700 mt-2">
                        Minor in Fashion Marketing
                      </p>
                    </div>
                    <div className="border-l-4 border-fashion-taupe pl-4 py-2">
                      <h4 className="font-medium">Professional Modeling Course</h4>
                      <p className="text-gray-600">International Modeling Academy, 2016</p>
                      <p className="text-sm text-gray-700 mt-2">
                        Comprehensive training in runway, editorial, and commercial modeling
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Experience */}
                <div>
                  <h3 className="text-2xl font-serif mb-6">Experience</h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-data-teal pl-4 py-2">
                      <h4 className="font-medium">Senior Data Analyst</h4>
                      <p className="text-gray-600">Fashion Analytics Inc., 2022-Present</p>
                      <p className="text-sm text-gray-700 mt-2">
                        Leading data analysis for major fashion brands, optimizing marketing strategies
                      </p>
                    </div>
                    <div className="border-l-4 border-data-teal pl-4 py-2">
                      <h4 className="font-medium">Professional Model</h4>
                      <p className="text-gray-600">Elite Model Agency, 2017-Present</p>
                      <p className="text-sm text-gray-700 mt-2">
                        Editorial, commercial and runway modeling for international brands
                      </p>
                    </div>
                    <div className="border-l-4 border-data-teal pl-4 py-2">
                      <h4 className="font-medium">Data Visualization Specialist</h4>
                      <p className="text-gray-600">Tech Solutions Co., 2019-2022</p>
                      <p className="text-sm text-gray-700 mt-2">
                        Created interactive dashboards for business intelligence
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

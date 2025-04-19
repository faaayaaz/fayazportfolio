
import { motion } from "framer-motion";

export default function AboutPreview() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <img
              src="/lovable-uploads/357ea9c5-6a81-4980-afb3-0dda40df4919.png"
              alt="Profile"
              className="rounded-lg w-full max-w-md shadow-lg mx-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl font-serif mb-4">About Me</h2>
            <p className="mb-4 text-gray-700">
              I am a fashion model and data analyst with over 5 years of
              experience in both fields. My unique career path has allowed me to
              develop a rare combination of creative and analytical skills.
            </p>
            <p className="mb-6 text-gray-700">
              In the fashion industry, I've worked with renowned brands and
              photographers, while my data analysis expertise spans Python, SQL,
              and R, delivering insights that drive business decisions.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-fashion-beige text-fashion-charcoal rounded-full text-sm">
                Fashion Modeling
              </span>
              <span className="px-3 py-1 bg-data-lightblue text-data-navy rounded-full text-sm">
                Data Analysis
              </span>
              <span className="px-3 py-1 bg-fashion-beige text-fashion-charcoal rounded-full text-sm">
                Photography
              </span>
              <span className="px-3 py-1 bg-data-lightblue text-data-navy rounded-full text-sm">
                Python
              </span>
              <span className="px-3 py-1 bg-data-lightblue text-data-navy rounded-full text-sm">
                SQL
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

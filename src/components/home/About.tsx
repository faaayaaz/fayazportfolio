
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
            {/* Changed main About image! */}
            <img
              src="/lovable-uploads/4bdd5663-8cc1-4492-bc0b-e137ad9812ad.png"
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
            {/* Additional Preview Images for About */}
            <div className="flex gap-4 mt-8">
              <img src="/lovable-uploads/ec60566c-f4b9-4a91-ad34-b3a8294c1ef6.png" alt="Profile" className="rounded-md w-20 h-20 object-cover shadow" />
              <img src="/lovable-uploads/ec44a1a0-5b5b-4869-8f36-4b0c37e340f2.png" alt="Profile" className="rounded-md w-20 h-20 object-cover shadow" />
              <img src="/lovable-uploads/83c8a021-5998-44ec-ad17-1c9a1d09695a.png" alt="Profile" className="rounded-md w-20 h-20 object-cover shadow" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

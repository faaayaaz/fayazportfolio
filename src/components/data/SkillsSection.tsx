
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";

interface SkillsProps {
  skills: {
    languages: string[];
    methods: string[];
    tools: string[];
  };
  isAdmin: boolean;
  onEdit: () => void;
}

export const SkillsSection = ({ skills, isAdmin, onEdit }: SkillsProps) => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-serif text-foreground"
        >
          Data Analysis Toolkit
        </motion.h2>
        {isAdmin && (
          <Button 
            onClick={onEdit} 
            variant="outline"
            className="bg-accent hover:bg-accent/80 hover:scale-105 transition-all duration-300"
          >
            <Edit className="h-4 w-4 mr-2" />
            Edit Skills
          </Button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <SkillCard
          title="Programming Languages"
          items={skills.languages}
          gradient="from-primary/5 to-primary/10"
        />
        <SkillCard
          title="Analysis Methods"
          items={skills.methods}
          gradient="from-primary/5 to-primary/10"
        />
        <SkillCard
          title="Visualization Tools"
          items={skills.tools}
          gradient="from-primary/5 to-primary/10"
        />
      </div>
    </div>
  );
};

const SkillCard = ({ 
  title, 
  items, 
  gradient 
}: { 
  title: string; 
  items: string[]; 
  gradient: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`p-6 rounded-xl bg-gradient-to-br ${gradient} backdrop-blur-sm border border-accent/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
    >
      <h3 className="text-xl font-serif mb-4 text-foreground">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li className="flex items-center" key={idx}>
            <div className="mr-3 h-2 w-2 bg-primary rounded-full"></div>
            <span className="text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

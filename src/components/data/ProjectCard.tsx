
import { motion } from "framer-motion";
import { Link2, Image as ImageIcon, ChevronDown, ChevronUp } from "lucide-react";
import { DataAdminControls } from "../admin/DataAdminControls";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  project: any;
  isAdmin: boolean;
  onUpdate: (data: any) => void;
  index: number;
}

export const ProjectCard = ({ project, isAdmin, onUpdate, index }: ProjectCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-gradient-to-br from-white via-white to-data-lightblue/5 dark:from-slate-800/90 dark:via-slate-800/80 dark:to-data-navy/20 border border-data-lightblue/30 dark:border-data-blue/30 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-visible hover:-translate-y-1"
    >
      {project.image_url ? (
        <div className="relative w-full h-52 overflow-hidden rounded-t-xl">
          <img
            src={project.image_url}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ) : (
        <div className="relative w-full h-36 bg-data-lightblue/20 dark:bg-data-navy/30 rounded-t-xl flex items-center justify-center">
          <ImageIcon className="h-12 w-12 text-data-blue/30 dark:text-data-lightblue/30" />
        </div>
      )}
      
      {isAdmin && (
        <DataAdminControls 
          project={project}
          onUpdate={onUpdate}
        />
      )}

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-serif text-data-navy dark:text-data-lightblue group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <span className="text-xs uppercase tracking-wider bg-data-lightblue/30 dark:bg-data-blue/30 text-data-navy dark:text-data-lightblue px-3 py-1.5 rounded-full">
            {project.category}
          </span>
        </div>
        
        <div className="relative">
          <p className={`text-muted-foreground mb-2 ${expanded ? '' : 'line-clamp-3'}`}>
            {project.description}
          </p>
          {project.description && project.description.length > 150 && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setExpanded(!expanded)}
              className="text-data-blue dark:text-data-lightblue hover:text-data-teal dark:hover:text-data-teal flex items-center gap-1 p-0 h-auto mt-1"
            >
              {expanded ? (
                <>
                  Show less <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  Read more <ChevronDown className="h-4 w-4" />
                </>
              )}
            </Button>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2 my-4">
          {project.tools.split(',').map((tool: string, i: number) => (
            <span 
              key={i}
              className="px-2.5 py-1 text-xs rounded-full bg-data-teal/10 border border-data-teal/30 text-data-navy/90 dark:bg-data-teal/20 dark:border-data-teal/40 dark:text-data-lightblue/90"
            >
              {tool.trim()}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap items-center justify-between mt-6 gap-4">
          <div className="text-sm text-muted-foreground">
            <span className="font-medium text-data-navy/80 dark:text-data-lightblue/80">Year:</span> {project.year}
          </div>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-data-blue hover:text-data-teal transition-colors"
            >
              <Link2 className="h-4 w-4" />
              {project.urlMask || 'View Project'}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

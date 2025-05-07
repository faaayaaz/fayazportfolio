
import { motion } from "framer-motion";
import { Link2, Image as ImageIcon, ChevronDown, ChevronUp } from "lucide-react";
import { DataAdminControls } from "../admin/DataAdminControls";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
      className="group relative bg-gradient-to-br from-white via-white to-primary/5 dark:from-slate-800/90 dark:via-slate-800/80 dark:to-primary/20 border border-border rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-visible hover:-translate-y-1"
    >
      {project.image_url ? (
        <div className="relative w-full overflow-hidden rounded-t-xl">
          <AspectRatio ratio={16 / 9}>
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/5 to-background/5">
              <img
                src={project.image_url}
                alt={project.title}
                className="object-contain max-w-[90%] max-h-[90%]"
              />
            </div>
          </AspectRatio>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ) : (
        <div className="relative w-full aspect-video bg-accent/20 rounded-t-xl flex items-center justify-center">
          <ImageIcon className="h-12 w-12 text-muted-foreground/50" />
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
          <h3 className="text-xl font-serif text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <span className="text-xs uppercase tracking-wider bg-accent/40 px-3 py-1.5 rounded-full text-foreground/80">
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
              className="text-primary hover:text-primary/80 flex items-center gap-1 p-0 h-auto mt-1"
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
              className="px-2.5 py-1 text-xs rounded-full bg-primary/10 border border-primary/30 text-foreground/90"
            >
              {tool.trim()}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap items-center justify-between mt-6 gap-4">
          <div className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground/80">Year:</span> {project.year}
          </div>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
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

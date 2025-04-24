
import { motion } from "framer-motion";
import { Link2, Image as ImageIcon } from "lucide-react";
import { DataAdminControls } from "../admin/DataAdminControls";

interface ProjectCardProps {
  project: any;
  isAdmin: boolean;
  onUpdate: (data: any) => void;
  index: number;
}

export const ProjectCard = ({ project, isAdmin, onUpdate, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-card hover:bg-accent/5 border border-border rounded-xl shadow-md transition-all duration-300 overflow-visible hover:-translate-y-1"
    >
      {project.image_url && (
        <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
          <img
            src={project.image_url}
            alt={project.title}
            className="w-full h-full object-cover"
          />
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
          <span className="text-xs uppercase tracking-wider bg-accent/30 text-accent-foreground px-3 py-1.5 rounded-full">
            {project.category}
          </span>
        </div>
        <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap items-center justify-between mt-6 gap-4">
          <div className="text-sm text-muted-foreground">
            <span className="font-medium">Tools:</span> {project.tools}
          </div>
          <div className="flex items-center gap-4">
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
            <div className="text-sm text-muted-foreground">
              <span className="font-medium">Year:</span> {project.year}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};


import { ProjectCard } from "./ProjectCard";

interface ProjectGridProps {
  projects: any[];
  isAdmin: boolean;
  onUpdate: (data: any) => void;
}

export const ProjectGrid = ({ projects, isAdmin, onUpdate }: ProjectGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          isAdmin={isAdmin}
          onUpdate={onUpdate}
          index={index}
        />
      ))}
    </div>
  );
};


import { Card } from "@/components/ui/card";
import { ProjectCard } from "./ProjectCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface ProjectCarouselProps {
  projects: any[];
  isAdmin: boolean;
  onUpdate: (data: any) => void;
}

export const ProjectCarousel = ({ projects, isAdmin, onUpdate }: ProjectCarouselProps) => {
  return (
    <div className="px-4 md:px-12 max-w-5xl mx-auto">
      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {projects.map((project, index) => (
            <CarouselItem key={project.id} className="pl-2 md:pl-4 basis-full md:basis-9/10 lg:basis-4/5">
              <div className="p-1">
                <Card className="border-primary/10 shadow-lg">
                  <ProjectCard
                    project={project}
                    isAdmin={isAdmin}
                    onUpdate={onUpdate}
                    index={index}
                  />
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="relative h-0">
          <CarouselPrevious className="left-0 md:-left-12" />
          <CarouselNext className="right-0 md:-right-12" />
        </div>
      </Carousel>
      <div className="mt-6 flex flex-col items-center justify-center md:hidden">
        <div className="text-sm text-muted-foreground text-center">
          Swipe left or right to navigate through projects
        </div>
      </div>
    </div>
  );
};

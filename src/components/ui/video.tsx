
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface VideoProps {
  src: string;
  poster?: string;
  aspectRatio?: number;
  className?: string;
}

const Video = ({ src, poster, aspectRatio = 16 / 9, className = "" }: VideoProps) => {
  return (
    <AspectRatio ratio={aspectRatio} className={className}>
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </AspectRatio>
  );
};

export default Video;


import { useState, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ImageUpload } from "../common/ImageUpload";

interface EditAboutProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  aboutData: {
    title: string;
    paragraphs: string[];
    tags: string[];
    image: string;
  };
  onSave: (data: { title: string; paragraphs: string[]; tags: string[]; image: string; }) => void;
}

export default function EditAbout({
  open,
  onOpenChange,
  aboutData,
  onSave
}: EditAboutProps) {
  const [title, setTitle] = useState(aboutData.title);
  const [paragraphs, setParagraphs] = useState(aboutData.paragraphs.join("\n\n"));
  const [tags, setTags] = useState(aboutData.tags.join(", "));
  const [image, setImage] = useState(aboutData.image);

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      title,
      paragraphs: paragraphs.split("\n").map(p => p.trim()).filter(Boolean),
      tags: tags.split(",").map(t => t.trim()).filter(Boolean),
      image
    });
    toast({
      title: "About Info Updated",
      description: "The about section has been updated!"
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit About Section</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Title</label>
            <Input value={title} onChange={e => setTitle(e.target.value)} />
          </div>
          <div>
            <label className="block mb-1 font-medium">Paragraphs (separate by blank line)</label>
            <Textarea value={paragraphs} onChange={e => setParagraphs(e.target.value)} rows={6} />
          </div>
          <div>
            <label className="block mb-1 font-medium">Tags (comma separated)</label>
            <Input value={tags} onChange={e => setTags(e.target.value)} />
          </div>
          <ImageUpload value={image} onChange={setImage} label="Profile Image" />
          <div className="flex justify-end">
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

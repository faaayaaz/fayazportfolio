
import React, { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash2, Upload, Image } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type ImageUploadProps = {
  value: string;
  onChange: (val: string) => void;
  label?: string;
  className?: string;
  maxSizeMB?: number;
  allowedTypes?: string[];
};

export const ImageUpload: React.FC<ImageUploadProps> = ({
  value,
  onChange,
  label = "Image",
  className = "",
  maxSizeMB = 5,
  allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"]
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    
    // Validate file type
    if (!allowedTypes.includes(file.type)) {
      setError(`Invalid file type. Allowed types: ${allowedTypes.map(t => t.replace('image/', '')).join(', ')}`);
      toast({
        title: "Invalid file type",
        description: `Please upload ${allowedTypes.map(t => t.replace('image/', '')).join(', ')} files only.`,
        variant: "destructive"
      });
      return;
    }
    
    // Validate file size
    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > maxSizeMB) {
      setError(`File size should be less than ${maxSizeMB}MB.`);
      toast({
        title: "File too large",
        description: `The image should be smaller than ${maxSizeMB}MB.`,
        variant: "destructive"
      });
      return;
    }
    
    // Clear previous errors
    setError(null);
    
    // Create object URL for preview
    const url = URL.createObjectURL(file);
    onChange(url);
    
    toast({
      title: "Image uploaded",
      description: "Your image has been attached successfully."
    });
  };

  const handleRemoveImage = () => {
    onChange("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    toast({
      title: "Image removed",
      description: "The image has been removed."
    });
  };

  return (
    <div className={`space-y-3 ${className}`}>
      <label className="block text-sm font-medium">{label}</label>
      
      {!value ? (
        <div 
          className="border-2 border-dashed border-input hover:border-primary/50 rounded-lg p-6 transition-colors cursor-pointer flex flex-col items-center justify-center gap-2"
          onDragOver={(e) => {
            e.preventDefault();
            setIsHovering(true);
          }}
          onDragLeave={() => setIsHovering(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsHovering(false);
            if (e.dataTransfer.files && e.dataTransfer.files[0]) {
              const file = e.dataTransfer.files[0];
              const input = inputRef.current;
              if (input) {
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(file);
                input.files = dataTransfer.files;
                input.dispatchEvent(new Event('change', { bubbles: true }));
              }
            }
          }}
          onClick={() => inputRef.current?.click()}
          style={{
            backgroundColor: isHovering ? "rgba(0,0,0,0.03)" : "transparent"
          }}
        >
          <Upload className="h-10 w-10 text-muted-foreground/50" />
          <div className="text-center space-y-1">
            <p className="text-sm font-medium">Drop an image here or click to browse</p>
            <p className="text-xs text-muted-foreground">
              Supported formats: {allowedTypes.map(t => t.replace('image/', '')).join(', ')}
            </p>
            <p className="text-xs text-muted-foreground">Max size: {maxSizeMB}MB</p>
          </div>
          <Input
            type="file"
            accept={allowedTypes.join(',')}
            ref={inputRef}
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      ) : (
        <div className="relative group">
          <img 
            src={value} 
            alt="Preview" 
            className="w-full h-auto object-contain rounded-lg border border-border shadow-sm max-h-64" 
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-background/80 hover:bg-background"
              onClick={() => inputRef.current?.click()}
            >
              Replace
            </Button>
            <Button 
              variant="destructive" 
              size="sm" 
              className="bg-destructive/80 hover:bg-destructive"
              onClick={handleRemoveImage}
            >
              <Trash2 className="h-4 w-4 mr-1" />
              Remove
            </Button>
          </div>
          <Input
            type="file"
            accept={allowedTypes.join(',')}
            ref={inputRef}
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      )}
      
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
    </div>
  );
};

import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, Trash2 } from "lucide-react";

interface ImageUploadProps {
  value: string | undefined;
  onChange: (value: string) => void;
  disabled?: boolean;
  label?: string;
  allowedTypes?: string[];
  maxSizeMB?: number;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  value,
  onChange,
  disabled,
  label = "Image",
  allowedTypes = ["image/jpeg", "image/png", "image/webp"],
  maxSizeMB = 2,
}) => {
  const [isOver, setIsOver] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsOver(true);
  };

  const handleDragLeave = () => {
    setIsOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsOver(false);

    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    handleFile(file);
  };

  const handleFile = (file: File | undefined) => {
    if (!file) return;

    if (!allowedTypes.includes(file.type)) {
      setError(`File type not supported. Allowed types: ${allowedTypes.join(", ")}`);
      return;
    }

    if (file.size > maxSizeMB * 1024 * 1024) {
      setError(`File size exceeds ${maxSizeMB}MB`);
      return;
    }

    setError(null);

    const reader = new FileReader();
    reader.onloadend = () => {
      onChange(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleRemove = () => {
    onChange("");
  };
  
  return (
    <div className="space-y-2">
      {label && <label className="block font-medium mb-2">{label}</label>}
      
      {value ? (
        <div className="relative">
          <div className="relative aspect-video border rounded-md overflow-hidden">
            <img
              src={value}
              alt="Selected"
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          {!disabled && (
            <div className="absolute top-2 right-2 flex space-x-2">
              <Button
                type="button"
                onClick={handleRemove}
                variant="destructive"
                size="icon"
                className="h-7 w-7 rounded-full opacity-80 hover:opacity-100"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div className="relative">
          <div
            className={`border-2 border-dashed rounded-lg p-6 ${
              isOver ? "border-primary bg-primary/5" : "border-muted-foreground/20"
            } transition-colors duration-200 flex flex-col items-center justify-center gap-4 min-h-[180px]`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="rounded-full bg-primary/10 p-3">
              <Upload className="h-6 w-6 text-primary" />
            </div>
            <div className="text-center space-y-1">
              <p className="text-sm font-medium">
                Drag & drop or{" "}
                <label
                  htmlFor="fileInput"
                  className="text-primary hover:text-primary/80 cursor-pointer"
                >
                  browse
                </label>
              </p>
              <p className="text-xs text-muted-foreground">
                Supported formats: {allowedTypes.map(t => t.replace('image/', '')).join(', ')}
              </p>
              <p className="text-xs text-muted-foreground">Max size: {maxSizeMB}MB</p>
              <div className="flex items-center justify-center gap-2 mt-2">
                <div className="bg-primary/20 h-5 w-8 rounded"></div>
                <span className="text-xs text-primary font-medium">16:9 ratio recommended</span>
              </div>
            </div>
            <Input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={handleFileChange}
              accept={allowedTypes.join(",")}
              disabled={disabled}
            />
          </div>
          {error && <p className="text-destructive text-sm mt-1.5">{error}</p>}
        </div>
      )}
    </div>
  );
};

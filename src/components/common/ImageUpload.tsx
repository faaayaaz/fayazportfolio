
import React, { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type ImageUploadProps = {
  value: string;
  onChange: (val: string) => void;
  label?: string;
  className?: string;
};

export const ImageUpload: React.FC<ImageUploadProps> = ({
  value,
  onChange,
  label = "Image",
  className = "",
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    onChange(url);
  };

  return (
    <div className={className}>
      <label className="block mb-1 font-medium">{label}</label>
      <div className="flex items-center gap-4">
        <Input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={handleFileChange}
          className="max-w-xs"
        />
        {value && (
          <img
            src={value}
            alt="upload"
            className="w-20 h-20 object-cover rounded shadow"
          />
        )}
      </div>
    </div>
  );
};

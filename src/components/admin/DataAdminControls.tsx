
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Edit, Link, Image } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { ImageUpload } from "@/components/common/ImageUpload";
import { supabase } from "@/integrations/supabase/client";

interface EditProjectForm {
  title: string;
  description: string;
  tools: string;
  projectUrl: string;
  urlMask: string;
  image_url?: string;
}

export const DataAdminControls = ({ project, onUpdate }: { 
  project?: any;
  onUpdate?: (data: any) => void;
}) => {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showImageDialog, setShowImageDialog] = useState(false);
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<EditProjectForm>({
    defaultValues: {
      title: project?.title || '',
      description: project?.description || '',
      tools: project?.tools || '',
      projectUrl: project?.url || '',
      urlMask: project?.urlMask || '',
      image_url: project?.image_url || ''
    }
  });

  const handleSubmit = (data: EditProjectForm) => {
    if (onUpdate) {
      onUpdate({
        ...project,
        ...data,
        url: data.projectUrl,
      });
    }
    setShowEditDialog(false);
    toast({
      title: "Project updated",
      description: "Your changes have been saved successfully",
    });
  };

  const handleImageUpload = async (imageUrl: string) => {
    if (!project || !imageUrl) return;

    setUploading(true);
    try {
      // Upload the file to Supabase Storage
      const fileName = `${project.id}-${Date.now()}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('images')
        .upload(fileName, await (await fetch(imageUrl)).blob());

      if (uploadError) throw uploadError;

      // Get the public URL
      const { data: { publicUrl } } = supabase.storage
        .from('images')
        .getPublicUrl(fileName);

      // Update the project with the new image URL
      if (onUpdate) {
        onUpdate({
          ...project,
          image_url: publicUrl
        });
      }

      setShowImageDialog(false);
      toast({
        title: "Image uploaded",
        description: "Project image has been updated successfully",
      });
    } catch (error: any) {
      toast({
        title: "Upload failed",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => setShowImageDialog(true)}
          className="bg-background/80 hover:bg-background border-border shadow-sm"
          disabled={uploading}
        >
          <Image className="h-4 w-4 mr-1" />
          Image
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => setShowEditDialog(true)}
          className="bg-background/80 hover:bg-background border-border shadow-sm"
        >
          <Edit className="h-4 w-4 mr-1" />
          Edit
        </Button>
      </div>

      <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Project</DialogTitle>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Title</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="tools"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tools Used</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="projectUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project URL</FormLabel>
                    <FormControl>
                      <Input {...field} type="url" />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="urlMask"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>URL Mask (Display Name)</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <div className="flex justify-between pt-2">
                <Button type="button" variant="outline" onClick={handleImageEdit}>
                  <Image className="h-4 w-4 mr-2" />
                  Edit Image
                </Button>
                <Button type="submit">Save Changes</Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      
      <Dialog open={showImageDialog} onOpenChange={setShowImageDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Project Image</DialogTitle>
          </DialogHeader>
          <ImageUpload 
            value={project?.image_url || ''} 
            onChange={handleImageUpload}
            label="Upload Project Image"
            maxSizeMB={5}
            allowedTypes={["image/jpeg", "image/png", "image/webp"]}
            className="w-full"
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

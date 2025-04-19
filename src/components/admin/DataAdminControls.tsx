
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Edit, Link } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { useForm } from "react-hook-form";

interface EditProjectForm {
  title: string;
  description: string;
  tools: string;
  projectUrl: string;
  urlMask: string;
}

export const DataAdminControls = ({ project, onUpdate }: { 
  project?: any;
  onUpdate?: (data: any) => void;
}) => {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<EditProjectForm>({
    defaultValues: {
      title: project?.title || '',
      description: project?.description || '',
      tools: project?.tools || '',
      projectUrl: project?.url || '',
      urlMask: project?.urlMask || ''
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

  return (
    <>
      <Button 
        variant="outline" 
        onClick={() => setShowEditDialog(true)}
        className="absolute top-4 right-4 z-10"
      >
        <Edit className="h-4 w-4 mr-2" />
        Edit
      </Button>

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
              
              <Button type="submit">Save Changes</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};


import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { PlusCircle, Edit, Trash } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export const FashionAdminControls = () => {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const { toast } = useToast();
  
  const handleEdit = () => {
    setShowEditDialog(true);
    toast({
      title: "Edit mode",
      description: "You can now edit the fashion content",
    });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex gap-2">
      <Button 
        variant="default" 
        onClick={handleEdit}
        className="flex items-center gap-2"
      >
        <Edit className="h-4 w-4" />
        Edit Content
      </Button>
      <Button 
        variant="outline" 
        onClick={() => {
          toast({
            title: "Add new item",
            description: "Feature coming soon",
          });
        }}
        className="flex items-center gap-2"
      >
        <PlusCircle className="h-4 w-4" />
        Add New
      </Button>

      <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Fashion Content</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <p className="text-sm text-muted-foreground">
              Coming soon: Edit capabilities for fashion content.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

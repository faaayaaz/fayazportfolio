
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Facebook, Instagram, Linkedin, Mail, Phone, User } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[30vh] bg-gradient-to-r from-fashion-beige/60 to-data-lightblue/40">
          <div className="relative h-full flex items-center justify-center px-4">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-serif font-bold mb-4"
              >
                Get in Touch
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg max-w-2xl mx-auto"
              >
                Let's discuss your next fashion project or data analysis needs.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-serif mb-6">Contact Information</h2>
                  <p className="text-gray-700 mb-8">
                    Feel free to reach out for collaborations, inquiries, or just to say hello. 
                    I'm always open to discussing new projects, creative ideas, or opportunities 
                    to be part of your vision.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-fashion-beige/30 flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-fashion-charcoal" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Email</h3>
                      <a href="mailto:contact@example.com" className="text-gray-600 hover:text-primary">
                        contact@example.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-fashion-beige/30 flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-fashion-charcoal" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6">
                  <h3 className="text-xl font-serif mb-4">Connect With Me</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="h-10 w-10 rounded-full bg-fashion-taupe flex items-center justify-center text-white hover:bg-fashion-charcoal transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a 
                      href="#" 
                      className="h-10 w-10 rounded-full bg-fashion-taupe flex items-center justify-center text-white hover:bg-fashion-charcoal transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a 
                      href="#" 
                      className="h-10 w-10 rounded-full bg-data-navy flex items-center justify-center text-white hover:bg-data-blue transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                
                <div className="pt-8">
                  <Button variant="outline" className="flex items-center gap-2">
                    Download Resume <User className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-100">
                  <h2 className="text-2xl font-serif mb-6">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-1">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is this regarding?"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message..."
                        rows={5}
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

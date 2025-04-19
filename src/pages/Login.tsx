
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { Lock } from "lucide-react";

export default function Login() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login with a setTimeout to mimic API call
    setTimeout(() => {
      setIsLoading(false);
      
      // Check credentials
      if (credentials.username === "admin" && credentials.password === "password") {
        // Store login status in localStorage
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", credentials.username);
        
        // Show success toast
        toast({
          title: "Login successful!",
          description: "Welcome to the admin dashboard",
        });
        
        // Redirect to home page (in a real app, this would go to an admin dashboard)
        navigate("/");
      } else {
        // Show error toast
        toast({
          title: "Login failed",
          description: "Invalid username or password. Please try again.",
          variant: "destructive"
        });
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        <div className="section-padding">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-md border border-gray-100 dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-2xl font-serif font-bold">Admin Login</h1>
                <p className="text-gray-600 mt-2 dark:text-gray-400">Sign in to access the admin dashboard</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium mb-1">
                    Username
                  </label>
                  <Input
                    id="username"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                    required
                    className="dark:border-gray-600"
                    placeholder="Enter your username"
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-1">
                    Password
                  </label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                    className="dark:border-gray-600"
                    placeholder="Enter your password"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </form>
              
              <div className="mt-6 text-center text-sm">
                <p className="text-gray-600 dark:text-gray-400">
                  For demo purposes use: <button 
                    type="button" 
                    onClick={() => setShowHelp(true)}
                    className="text-primary hover:underline"
                  >
                    View Login Credentials
                  </button>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Dialog open={showHelp} onOpenChange={setShowHelp}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Demo Login Credentials</DialogTitle>
            <DialogDescription>
              Use these credentials to access the admin panel:
            </DialogDescription>
          </DialogHeader>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-md font-mono text-sm">
            <div><strong>Username:</strong> admin</div>
            <div><strong>Password:</strong> password</div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Note: In a production environment, you would have proper authentication with secure credentials.
          </p>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
}

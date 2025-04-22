import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link2, Edit } from "lucide-react";
import { ImageUpload } from "@/components/common/ImageUpload";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DataAdminControls } from "@/components/admin/DataAdminControls";
import { useState, useEffect } from "react";

export default function Data() {
  const [isAdmin, setIsAdmin] = useState(false);

  const barData = [
    { name: 'Jan', value: 12 },
    { name: 'Feb', value: 19 },
    { name: 'Mar', value: 25 },
    { name: 'Apr', value: 18 },
    { name: 'May', value: 29 },
    { name: 'Jun', value: 34 },
  ];

  const lineData = [
    { name: 'Week 1', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Week 2', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Week 3', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Week 4', uv: 2780, pv: 3908, amt: 2000 },
  ];

  const pieData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const dataProjects = [
    {
      id: 1,
      title: "E-commerce Customer Analysis",
      category: "Data Analysis",
      description: "Analyzed customer behavior data to optimize user journey and increase conversions by 24%. Used Python and Pandas to clean and process over 1 million transaction records, identifying key patterns in customer behavior.",
      tools: "Python, Pandas, SQL, Matplotlib",
      year: "2023",
      image: "/placeholder.svg",
      url: "https://example.com/ecommerce-analysis",
      urlMask: "View Analysis"
    },
    {
      id: 2,
      title: "Fashion Inventory Prediction Model",
      category: "Machine Learning",
      description: "Built a prediction model for fashion inventory management with 92% accuracy. Used time series analysis to forecast demand for different product categories based on historical sales data, seasonal trends, and external factors.",
      tools: "R, Time Series Analysis, Python, scikit-learn",
      year: "2022",
      image: "/placeholder.svg",
      url: "https://example.com/inventory-prediction",
      urlMask: "View Model"
    },
    {
      id: 3,
      title: "Market Research Dashboard",
      category: "Data Visualization",
      description: "Created an interactive dashboard to visualize market research data for a major fashion brand. The dashboard helped executives track market trends, competitor analysis, and consumer preferences in real-time.",
      tools: "Tableau, SQL, Python, D3.js",
      year: "2023",
      image: "/placeholder.svg",
      url: "https://example.com/market-dashboard",
      urlMask: "View Dashboard"
    },
    {
      id: 4,
      title: "Social Media Sentiment Analysis",
      category: "NLP",
      description: "Performed sentiment analysis on social media data to gauge public perception of fashion brands. Used natural language processing techniques to analyze thousands of comments and posts, providing actionable insights to marketing teams.",
      tools: "Python, NLTK, spaCy, TensorFlow",
      year: "2021",
      image: "/placeholder.svg",
      url: "https://example.com/sentiment-analysis",
      urlMask: "View Analysis"
    },
    {
      id: 5,
      title: "Retail Store Performance Analysis",
      category: "Data Analysis",
      description: "Analyzed performance metrics across 50+ retail locations to identify key factors affecting sales. Created a scoring model that helped optimize store layouts and product placement, resulting in a 15% increase in revenue.",
      tools: "Python, SQL, Power BI, Excel",
      year: "2022",
      image: "/placeholder.svg",
      url: "https://example.com/retail-performance",
      urlMask: "View Report"
    }
  ];

  const [profile, setProfile] = useState({
    name: "Fayaz Mohamed",
    role: "Data Analyst",
    img: "/lovable-uploads/c2bb14be-8935-4258-a0cf-e45281db002f.png",
    about: "Experienced Data Analyst with a passion for deriving actionable insights from complex data."
  });
  const [showProfileEdit, setShowProfileEdit] = useState(false);
  const [skills, setSkills] = useState({
    languages: [
      "Python (Pandas, NumPy, scikit-learn)",
      "R (tidyverse, ggplot2)",
      "SQL (PostgreSQL, MySQL)",
      "JavaScript (D3.js, Chart.js)"
    ],
    methods: [
      "Statistical Analysis",
      "Machine Learning",
      "Time Series Analysis",
      "Natural Language Processing"
    ],
    tools: [
      "Tableau",
      "Power BI",
      "Matplotlib & Seaborn",
      "D3.js"
    ]
  });
  const [showSkillsEdit, setShowSkillsEdit] = useState(false);
  const [languagesInput, setLanguagesInput] = useState(skills.languages.join("\n"));
  const [methodsInput, setMethodsInput] = useState(skills.methods.join("\n"));
  const [toolsInput, setToolsInput] = useState(skills.tools.join("\n"));
  const [profileImage, setProfileImage] = useState(profile.img);

  const { toast } = useToast();

  useEffect(() => {
    const checkAdmin = () => {
      const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
      setIsAdmin(isLoggedIn);
    };

    checkAdmin();
    window.addEventListener("storage", checkAdmin);
    
    return () => {
      window.removeEventListener("storage", checkAdmin);
    };
  }, []);

  useEffect(() => {
    setLanguagesInput(skills.languages.join("\n"));
    setMethodsInput(skills.methods.join("\n"));
    setToolsInput(skills.tools.join("\n"));
  }, [skills]);

  const handleProjectUpdate = (updatedProject: any) => {
    const updatedProjects = dataProjects.map(project => 
      project.id === updatedProject.id ? updatedProject : project
    );
    console.log("Project updated:", updatedProject);
  };

  const handleProfileEdit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    
    setProfile({
      name: formData.get('name') as string,
      role: formData.get('role') as string,
      img: profileImage,
      about: formData.get('about') as string,
    });
    
    setShowProfileEdit(false);
    toast({
      title: "Profile Updated",
      description: "Your profile info has been updated."
    });
  };

  const handleSkillsEdit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setSkills({
      languages: languagesInput.split("\n").filter(l => l.trim() !== ""),
      methods: methodsInput.split("\n").filter(m => m.trim() !== ""),
      tools: toolsInput.split("\n").filter(t => t.trim() !== "")
    });
    
    setShowSkillsEdit(false);
    toast({
      title: "Skills Updated",
      description: "Your skills info has been updated."
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        <section className="relative h-[50vh]">
          <div className="absolute inset-0 bg-gradient-to-br from-data-navy/10 via-data-lightblue/20 to-background overflow-hidden">
            <div className="h-full w-full bg-grid-pattern opacity-30"></div>
          </div>
          <div className="relative h-full flex items-center justify-center px-4">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-data-navy via-data-blue to-data-teal"
              >
                Data Analysis Projects
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg max-w-2xl mx-auto text-muted-foreground"
              >
                Exploring complex datasets to extract meaningful insights
                using Python, SQL, R, and visualization tools.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-card">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 justify-between items-start">
            <div className="flex items-start gap-6 w-full md:w-auto">
              <div className="relative">
                <img
                  src={profile.img}
                  alt="Profile"
                  className="rounded-full w-32 h-32 object-cover border-4 border-primary/20 shadow-xl"
                />
                {isAdmin && (
                  <Button
                    onClick={() => setShowProfileEdit(true)}
                    variant="outline"
                    size="icon"
                    className="absolute -bottom-2 -right-2 rounded-full shadow-lg bg-background hover:bg-accent"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                )}
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground">{profile.name}</h2>
                <p className="mb-1 text-lg text-primary">{profile.role}</p>
                <p className="text-muted-foreground max-w-md">{profile.about}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-serif text-foreground"
              >
                Data Analysis Toolkit
              </motion.h2>
              {isAdmin && (
                <Button 
                  onClick={() => setShowSkillsEdit(true)} 
                  variant="outline"
                  className="bg-accent hover:bg-accent/80"
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Skills
                </Button>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-background to-accent/20 p-6 rounded-lg shadow-md border border-border"
              >
                <h3 className="text-xl font-serif mb-4 text-foreground">Programming Languages</h3>
                <ul className="space-y-3">
                  {skills.languages.map((lang, idx) => (
                    <li className="flex items-center" key={idx}>
                      <div className="mr-3 h-2 w-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{lang}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-background to-accent/20 p-6 rounded-lg shadow-md border border-border"
              >
                <h3 className="text-xl font-serif mb-4 text-foreground">Analysis Methods</h3>
                <ul className="space-y-3">
                  {skills.methods.map((m, idx) => (
                    <li className="flex items-center" key={idx}>
                      <div className="mr-3 h-2 w-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{m}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-background to-accent/20 p-6 rounded-lg shadow-md border border-border"
              >
                <h3 className="text-xl font-serif mb-4 text-foreground">Visualization Tools</h3>
                <ul className="space-y-3">
                  {skills.tools.map((t, idx) => (
                    <li className="flex items-center" key={idx}>
                      <div className="mr-3 h-2 w-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{t}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-accent/10">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-serif mb-12 text-center text-foreground"
            >
              Featured Data Projects
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dataProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-card hover:bg-accent/5 border border-border rounded-lg shadow-md transition-all duration-300 overflow-visible"
                >
                  {isAdmin && (
                    <DataAdminControls 
                      project={project}
                      onUpdate={handleProjectUpdate}
                    />
                  )}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-serif text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs uppercase tracking-wider bg-accent/30 text-accent-foreground px-2 py-1 rounded">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap items-center justify-between mt-6">
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Tools:</span> {project.tools}
                      </div>
                      <div className="flex items-center gap-2">
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
                          >
                            <Link2 className="h-4 w-4" />
                            {project.urlMask || 'View Project'}
                          </a>
                        )}
                        <div className="text-sm text-muted-foreground">
                          <span className="font-medium">Year:</span> {project.year}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Dialog open={showProfileEdit} onOpenChange={setShowProfileEdit}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile information here.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleProfileEdit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <Input name="name" defaultValue={profile.name} className="w-full" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Role</label>
              <Input name="role" defaultValue={profile.role} className="w-full" />
            </div>
            <ImageUpload value={profileImage} onChange={setProfileImage} label="Profile Image"/>
            <div>
              <label className="block mb-1 font-medium">About You</label>
              <Textarea name="about" defaultValue={profile.about} rows={3} className="w-full" />
            </div>
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => setShowProfileEdit(false)}>
                Cancel
              </Button>
              <Button type="submit">Save Changes</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={showSkillsEdit} onOpenChange={setShowSkillsEdit}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Skills & Toolkit</DialogTitle>
            <DialogDescription>
              Update your skills by adding or removing items. Each skill should be on a new line.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSkillsEdit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Programming Languages</label>
              <Textarea
                value={languagesInput}
                onChange={e => setLanguagesInput(e.target.value)}
                className="w-full min-h-[120px]"
                placeholder="Each language on a new line"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Analysis Methods</label>
              <Textarea
                value={methodsInput}
                onChange={e => setMethodsInput(e.target.value)}
                className="w-full min-h-[120px]"
                placeholder="Each method on a new line"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Visualization Tools</label>
              <Textarea
                value={toolsInput}
                onChange={e => setToolsInput(e.target.value)}
                className="w-full min-h-[120px]"
                placeholder="Each tool on a new line"
              />
            </div>
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => setShowSkillsEdit(false)}>
                Cancel
              </Button>
              <Button type="submit">Save Changes</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
}

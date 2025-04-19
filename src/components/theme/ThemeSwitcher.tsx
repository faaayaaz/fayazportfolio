
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Theme = 'light' | 'dark' | 'vibrant' | 'professional';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>('light');

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.className = savedTheme;
    } else if (prefersDark) {
      setTheme('dark');
      document.documentElement.className = 'dark';
    }
  }, []);

  // Update theme
  const updateTheme = (newTheme: Theme) => {
    localStorage.setItem('portfolio-theme', newTheme);
    document.documentElement.className = newTheme;
    setTheme(newTheme);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
          <div className="relative h-6 w-6 overflow-hidden rounded-full">
            <div className="absolute inset-0 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0">
              <div className="h-full w-full border-2 border-black rounded-full bg-gradient-to-br from-yellow-300 to-yellow-400"></div>
            </div>
            <div className="absolute inset-0 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">
              <div className="h-full w-full rounded-full bg-gradient-to-br from-indigo-400 via-purple-500 to-indigo-800"></div>
            </div>
            <div className="absolute inset-0 rotate-180 scale-0 transition-all vibrant:rotate-0 vibrant:scale-100">
              <div className="h-full w-full rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500"></div>
            </div>
            <div className="absolute inset-0 rotate-270 scale-0 transition-all professional:rotate-0 professional:scale-100">
              <div className="h-full w-full rounded-full bg-gradient-to-br from-blue-700 to-teal-500"></div>
            </div>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem 
          onClick={() => updateTheme('light')}
          className={theme === 'light' ? 'bg-accent text-accent-foreground' : ''}
        >
          Minimalist
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => updateTheme('dark')}
          className={theme === 'dark' ? 'bg-accent text-accent-foreground' : ''}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => updateTheme('vibrant')}
          className={theme === 'vibrant' ? 'bg-accent text-accent-foreground' : ''}
        >
          Vibrant
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => updateTheme('professional')}
          className={theme === 'professional' ? 'bg-accent text-accent-foreground' : ''}
        >
          Professional
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

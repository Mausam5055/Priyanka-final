import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export const Navigation = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-magenta to-neon-cyan">
            Priyanka Nath Mazumdar
          </h1>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-primary">About</a>
            <a href="#journey" className="hover:text-primary">Journey</a>
            <a href="#skills" className="hover:text-primary">Skills</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
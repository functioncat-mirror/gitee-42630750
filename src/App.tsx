import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  // 检查系统主题偏好
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPrefersDark) {
      setTheme('dark');
    }
  }, []);
  
  // 应用主题到DOM
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-primary"></div>
            <span className="font-bold">React Template</span>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleTheme}
              aria-label="切换主题"
            >
              {theme === 'light' ? (
                <MoonIcon className="h-5 w-5" />
              ) : (
                <SunIcon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container flex min-h-[calc(100vh-4rem)] items-center justify-center py-12">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            v1.0.0
          </div>
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            React + TailwindCSS + ShadcnUI + Vite
          </h1>
          <p className="text-balance max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            通用模板 - 开始使用这个现代化模板构建您的应用程序
          </p>
          <div className="flex gap-4 mt-4">
            <div className="h-1 w-12 rounded-full bg-primary"></div>
            <div className="h-1 w-12 rounded-full bg-muted"></div>
            <div className="h-1 w-12 rounded-full bg-muted"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  HomeIcon, 
  SettingsIcon, 
  BarChartIcon, 
  UsersIcon,
  SunIcon,
  MoonIcon
} from "lucide-react";
import { useState, useEffect } from "react";

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

  const features = [
    {
      icon: <HomeIcon className="h-6 w-6" />,
      title: "快速开发",
      description: "基于 Vite 构建，提供极快的开发体验"
    },
    {
      icon: <SettingsIcon className="h-6 w-6" />,
      title: "易于配置",
      description: "TailwindCSS 和 ShadcnUI 提供灵活的样式系统"
    },
    {
      icon: <BarChartIcon className="h-6 w-6" />,
      title: "现代化",
      description: "使用最新的 React 和 TypeScript 技术栈"
    },
    {
      icon: <UsersIcon className="h-6 w-6" />,
      title: "组件丰富",
      description: "内置大量高质量的 UI 组件"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-primary"></div>
            <span className="font-bold">React Template</span>
          </div>
          <nav className="ml-10 hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="#" className="transition-colors hover:text-foreground/80 text-foreground">
              首页
            </a>
            <a href="#" className="transition-colors hover:text-foreground/80 text-foreground/60">
              文档
            </a>
            <a href="#" className="transition-colors hover:text-foreground/80 text-foreground/60">
              组件
            </a>
            <a href="#" className="transition-colors hover:text-foreground/80 text-foreground/60">
              关于
            </a>
          </nav>
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
            <Button variant="outline" size="sm" className="hidden sm:inline-flex">登录</Button>
            <Button size="sm" className="hidden sm:inline-flex">注册</Button>
            <Button variant="outline" size="sm" className="sm:hidden">登录</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container py-12 md:py-24">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              React + TailwindCSS + ShadcnUI + Vite
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              通用模板 - 开始使用这个现代化模板构建您的应用程序
            </p>
          </div>
          
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg">开始使用</Button>
            <Button variant="outline" size="lg">查看文档</Button>
          </div>
        </div>

        {/* Features */}
        <div className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-center rounded-full bg-primary/10 p-3 w-12 h-12">
                  {feature.icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Getting Started */}
        <div className="mt-24">
          <Tabs defaultValue="install" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="install">安装</TabsTrigger>
              <TabsTrigger value="dev">开发</TabsTrigger>
              <TabsTrigger value="components">组件</TabsTrigger>
            </TabsList>
            <TabsContent value="install" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>安装依赖</CardTitle>
                  <CardDescription>使用 pnpm 安装项目依赖</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
                    <div className="grid flex-1 gap-2">
                      <Label htmlFor="link" className="sr-only">
                        安装命令
                      </Label>
                      <Input
                        id="link"
                        defaultValue="pnpm install"
                        readOnly
                        className="font-mono"
                      />
                    </div>
                    <Button type="submit" size="sm" className="px-3">
                      <span className="sr-only">复制</span>
                      复制
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="dev" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>启动开发服务器</CardTitle>
                  <CardDescription>启动本地开发环境</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
                    <div className="grid flex-1 gap-2">
                      <Label htmlFor="link-dev" className="sr-only">
                        开发命令
                      </Label>
                      <Input
                        id="link-dev"
                        defaultValue="pnpm dev"
                        readOnly
                        className="font-mono"
                      />
                    </div>
                    <Button type="submit" size="sm" className="px-3">
                      <span className="sr-only">复制</span>
                      复制
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="components" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>添加 ShadcnUI 组件</CardTitle>
                  <CardDescription>添加更多 UI 组件到您的项目</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
                    <div className="grid flex-1 gap-2">
                      <Label htmlFor="link-components" className="sr-only">
                        组件命令
                      </Label>
                      <Input
                        id="link-components"
                        defaultValue="npx shadcn-ui@latest add [组件名]"
                        readOnly
                        className="font-mono"
                      />
                    </div>
                    <Button type="submit" size="sm" className="px-3">
                      <span className="sr-only">复制</span>
                      复制
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Footer Note */}
        <div className="mt-24 text-center text-sm text-muted-foreground">
          基于 React, TailwindCSS, ShadcnUI 和 Vite 构建
        </div>
      </main>
    </div>
  );
}

export default App;
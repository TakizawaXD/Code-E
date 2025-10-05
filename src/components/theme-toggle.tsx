"use client"

import * as React from "react"
import { Moon, Sun, Palette, Check } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { getDictionary } from "@/lib/i18n"

type Theme = {
  name: string;
  id: string;
  colors: {
    background: string;
    foreground: string;
    primary: string;
    "primary-foreground": string;
    secondary: string;
    "secondary-foreground": string;
    muted: string;
    "muted-foreground": string;
    accent: string;
    "accent-foreground": string;
    destructive: string;
    "destructive-foreground": string;
    card: string;
    "card-foreground": string;
    popover: string;
    "popover-foreground": string;
    border: string;
    input: string;
    ring: string;
  };
};

const themes: Theme[] = [
    {
      name: "Default", id: "default",
      colors: { background: "0 0% 100%", foreground: "222.2 84% 4.9%", primary: "173 57% 45%", "primary-foreground": "210 40% 98%", secondary: "210 40% 96.1%", "secondary-foreground": "222.2 47.4% 11.2%", muted: "210 40% 96.1%", "muted-foreground": "215.4 16.3% 46.9%", accent: "174 79% 88%", "accent-foreground": "222.2 47.4% 11.2%", destructive: "0 84.2% 60.2%", "destructive-foreground": "210 40% 98%", card: "0 0% 100%", "card-foreground": "222.2 84% 4.9%", popover: "0 0% 100%", "popover-foreground": "222.2 84% 4.9%", border: "214.3 31.8% 91.4%", input: "214.3 31.8% 91.4%", ring: "222.2 84% 4.9%" },
    },
    {
        name: "Noche Azul",
        id: "noche-azul",
        colors: {
            background: "220 29% 11%",
            foreground: "0 0% 100%",
            primary: "202 93% 60%",
            "primary-foreground": "220 29% 5%",
            secondary: "220 20% 20%",
            "secondary-foreground": "0 0% 100%",
            muted: "220 20% 20%",
            "muted-foreground": "220 10% 70%",
            accent: "202 93% 50%",
            "accent-foreground": "0 0% 100%",
            destructive: "0 72.2% 50.6%",
            "destructive-foreground": "0 0% 98%",
            card: "220 29% 13%",
            "card-foreground": "0 0% 100%",
            popover: "220 29% 11%",
            "popover-foreground": "0 0% 100%",
            border: "220 20% 20%",
            input: "220 20% 20%",
            ring: "202 93% 60%",
        },
    },
    {
        name: "Lila Futurista",
        id: "lila-futurista",
        colors: {
            background: "220 33% 18%",
            foreground: "220 20% 96%",
            primary: "253 93% 82%",
            "primary-foreground": "220 33% 10%",
            secondary: "220 25% 28%",
            "secondary-foreground": "220 20% 96%",
            muted: "220 25% 28%",
            "muted-foreground": "220 15% 75%",
            accent: "253 93% 72%",
            "accent-foreground": "220 20% 96%",
            destructive: "0 72.2% 50.6%",
            "destructive-foreground": "0 0% 98%",
            card: "220 33% 20%",
            "card-foreground": "220 20% 96%",
            popover: "220 33% 18%",
            "popover-foreground": "220 20% 96%",
            border: "220 25% 28%",
            input: "220 25% 28%",
            ring: "253 93% 82%",
        },
    },
    {
        name: "Hielo Contraste",
        id: "hielo-contraste",
        colors: {
            background: "0 0% 4%",
            foreground: "216 33% 97%",
            primary: "200 81% 48%",
            "primary-foreground": "0 0% 0%",
            secondary: "0 0% 14%",
            "secondary-foreground": "216 33% 97%",
            muted: "0 0% 14%",
            "muted-foreground": "0 0% 60%",
            accent: "200 81% 38%",
            "accent-foreground": "216 33% 97%",
            destructive: "0 72.2% 50.6%",
            "destructive-foreground": "0 0% 98%",
            card: "0 0% 6%",
            "card-foreground": "216 33% 97%",
            popover: "0 0% 4%",
            "popover-foreground": "216 33% 97%",
            border: "0 0% 14%",
            input: "0 0% 14%",
            ring: "200 81% 48%",
        },
    },
    {
        name: "Cyberpunk Suave",
        id: "cyberpunk-suave",
        colors: {
            background: "0 0% 12%",
            foreground: "175 51% 65%",
            primary: "188 84% 56%",
            "primary-foreground": "0 0% 5%",
            secondary: "175 60% 25%",
            "secondary-foreground": "188 84% 86%",
            muted: "175 60% 25%",
            "muted-foreground": "175 30% 55%",
            accent: "188 84% 46%",
            "accent-foreground": "0 0% 100%",
            destructive: "0 72.2% 50.6%",
            "destructive-foreground": "0 0% 98%",
            card: "0 0% 14%",
            "card-foreground": "175 51% 65%",
            popover: "0 0% 12%",
            "popover-foreground": "175 51% 65%",
            border: "175 60% 25%",
            input: "175 60% 25%",
            ring: "188 84% 56%",
        },
    },
    {
        name: "Naranja Tech",
        id: "naranja-tech",
        colors: {
            background: "220 28% 19%",
            foreground: "0 0% 100%",
            primary: "25 95% 53%",
            "primary-foreground": "220 28% 10%",
            secondary: "220 20% 29%",
            "secondary-foreground": "0 0% 100%",
            muted: "220 20% 29%",
            "muted-foreground": "220 10% 70%",
            accent: "25 95% 43%",
            "accent-foreground": "0 0% 100%",
            destructive: "0 72.2% 50.6%",
            "destructive-foreground": "0 0% 98%",
            card: "220 28% 21%",
            "card-foreground": "0 0% 100%",
            popover: "220 28% 19%",
            "popover-foreground": "0 0% 100%",
            border: "220 20% 29%",
            input: "220 20% 29%",
            ring: "25 95% 53%",
        },
    },
    {
        name: "Lima Startup",
        id: "lima-startup",
        colors: {
            background: "220 29% 11%",
            foreground: "0 0% 100%",
            primary: "74 79% 61%",
            "primary-foreground": "220 29% 5%",
            secondary: "220 20% 21%",
            "secondary-foreground": "0 0% 100%",
            muted: "220 20% 21%",
            "muted-foreground": "220 10% 70%",
            accent: "74 79% 51%",
            "accent-foreground": "220 29% 5%",
            destructive: "0 72.2% 50.6%",
            "destructive-foreground": "0 0% 98%",
            card: "220 29% 13%",
            "card-foreground": "0 0% 100%",
            popover: "220 29% 11%",
            "popover-foreground": "0 0% 100%",
            border: "220 20% 21%",
            input: "220 20% 21%",
            ring: "74 79% 61%",
        },
    },
    {
        name: "Cielo Calmo",
        id: "cielo-calmo",
        colors: {
            background: "215 20% 35%",
            foreground: "216 33% 97%",
            primary: "202 93% 60%",
            "primary-foreground": "215 20% 15%",
            secondary: "215 15% 45%",
            "secondary-foreground": "216 33% 97%",
            muted: "215 15% 45%",
            "muted-foreground": "215 10% 80%",
            accent: "202 93% 50%",
            "accent-foreground": "216 33% 97%",
            destructive: "0 72.2% 50.6%",
            "destructive-foreground": "0 0% 98%",
            card: "215 20% 38%",
            "card-foreground": "216 33% 97%",
            popover: "215 20% 35%",
            "popover-foreground": "216 33% 97%",
            border: "215 15% 45%",
            input: "215 15% 45%",
            ring: "202 93% 60%",
        },
    },
    {
        name: "Dashboard Dorado",
        id: "dashboard-dorado",
        colors: {
            background: "0 0% 0%",
            foreground: "210 17% 91%",
            primary: "48 96% 51%",
            "primary-foreground": "0 0% 0%",
            secondary: "0 0% 10%",
            "secondary-foreground": "210 17% 91%",
            muted: "0 0% 10%",
            "muted-foreground": "0 0% 60%",
            accent: "48 96% 41%",
            "accent-foreground": "0 0% 0%",
            destructive: "0 72.2% 50.6%",
            "destructive-foreground": "0 0% 98%",
            card: "0 0% 4%",
            "card-foreground": "210 17% 91%",
            popover: "0 0% 0%",
            "popover-foreground": "210 17% 91%",
            border: "0 0% 10%",
            input: "0 0% 10%",
            ring: "48 96% 51%",
        },
    },
    {
        name: "IA Creativa",
        id: "ia-creativa",
        colors: {
            background: "218 100% 98%",
            foreground: "218 80% 20%",
            primary: "336 88% 85%",
            "primary-foreground": "336 80% 15%",
            secondary: "214 90% 90%",
            "secondary-foreground": "214 80% 20%",
            muted: "214 90% 90%",
            "muted-foreground": "218 30% 50%",
            accent: "214 96% 68%",
            "accent-foreground": "214 80% 15%",
            destructive: "0 72.2% 50.6%",
            "destructive-foreground": "0 0% 98%",
            card: "0 0% 100%",
            "card-foreground": "218 80% 20%",
            popover: "218 100% 98%",
            "popover-foreground": "218 80% 20%",
            border: "214 90% 90%",
            input: "214 90% 90%",
            ring: "336 88% 85%",
        },
    },
    {
        name: "Cosmos Púrpura",
        id: "cosmos-purpura",
        colors: {
            background: "220 29% 11%",
            foreground: "258 70% 85%",
            primary: "258 83% 66%",
            "primary-foreground": "220 29% 5%",
            secondary: "188 84% 56%",
            "secondary-foreground": "220 29% 5%",
            muted: "220 20% 21%",
            "muted-foreground": "220 10% 70%",
            accent: "188 84% 46%",
            "accent-foreground": "220 29% 5%",
            destructive: "0 72.2% 50.6%",
            "destructive-foreground": "0 0% 98%",
            card: "220 29% 13%",
            "card-foreground": "258 70% 85%",
            popover: "220 29% 11%",
            "popover-foreground": "258 70% 85%",
            border: "220 20% 21%",
            input: "220 20% 21%",
            ring: "258 83% 66%",
        },
    },
    {
        name: "Panel Esmeralda",
        id: "panel-esmeralda",
        colors: {
            background: "210 20% 95%",
            foreground: "175 30% 25%",
            primary: "175 84% 39%",
            "primary-foreground": "0 0% 100%",
            secondary: "210 25% 88%",
            "secondary-foreground": "175 30% 25%",
            muted: "210 25% 88%",
            "muted-foreground": "210 15% 55%",
            accent: "175 84% 29%",
            "accent-foreground": "0 0% 100%",
            destructive: "0 72.2% 50.6%",
            "destructive-foreground": "0 0% 98%",
            card: "0 0% 100%",
            "card-foreground": "175 30% 25%",
            popover: "210 20% 95%",
            "popover-foreground": "175 30% 25%",
            border: "210 25% 88%",
            input: "210 25% 88%",
            ring: "175 84% 39%",
        },
    },
    {
        name: "Rojo Startup",
        id: "rojo-startup",
        colors: {
            background: "226 64% 32%",
            foreground: "0 0% 100%",
            primary: "0 91% 71%",
            "primary-foreground": "0 0% 100%",
            secondary: "226 50% 42%",
            "secondary-foreground": "0 0% 100%",
            muted: "226 50% 42%",
            "muted-foreground": "226 20% 80%",
            accent: "0 91% 61%",
            "accent-foreground": "0 0% 100%",
            destructive: "0 72.2% 50.6%",
            "destructive-foreground": "0 0% 98%",
            card: "226 64% 35%",
            "card-foreground": "0 0% 100%",
            popover: "226 64% 32%",
            "popover-foreground": "0 0% 100%",
            border: "226 50% 42%",
            input: "226 50% 42%",
            ring: "0 91% 71%",
        },
    },
    {
        name: "Código Minimalista",
        id: "codigo-minimalista",
        colors: {
            background: "220 29% 11%",
            foreground: "220 14% 96%",
            primary: "217 91% 60%",
            "primary-foreground": "220 14% 98%",
            secondary: "220 20% 21%",
            "secondary-foreground": "220 14% 96%",
            muted: "220 20% 21%",
            "muted-foreground": "220 10% 70%",
            accent: "217 91% 50%",
            "accent-foreground": "220 14% 98%",
            destructive: "0 72.2% 50.6%",
            "destructive-foreground": "0 0% 98%",
            card: "220 29% 13%",
            "card-foreground": "220 14% 96%",
            popover: "220 29% 11%",
            "popover-foreground": "220 14% 96%",
            border: "220 20% 21%",
            input: "220 20% 21%",
            ring: "217 91% 60%",
        },
    },
    {
        name: "Hacker Elegante",
        id: "hacker-elegante",
        colors: {
            background: "220 29% 11%",
            foreground: "185 91% 70%",
            primary: "185 92% 42%",
            "primary-foreground": "0 0% 100%",
            secondary: "266 65% 32%",
            "secondary-foreground": "185 91% 90%",
            muted: "266 65% 32%",
            "muted-foreground": "266 30% 70%",
            accent: "185 92% 32%",
            "accent-foreground": "0 0% 100%",
            destructive: "0 72.2% 50.6%",
            "destructive-foreground": "0 0% 98%",
            card: "266 65% 22%",
            "card-foreground": "185 91% 70%",
            popover: "220 29% 11%",
            "popover-foreground": "185 91% 70%",
            border: "266 65% 32%",
            input: "266 65% 32%",
            ring: "185 92% 42%",
        },
    },
    {
        name: "Ocaso Creativo",
        id: "ocaso-creativo",
        colors: {
            background: "226 64% 32%",
            foreground: "210 17% 91%",
            primary: "29 96% 61%",
            "primary-foreground": "226 64% 12%",
            secondary: "226 50% 42%",
            "secondary-foreground": "210 17% 91%",
            muted: "226 50% 42%",
            "muted-foreground": "226 20% 80%",
            accent: "29 96% 51%",
            "accent-foreground": "226 64% 12%",
            destructive: "0 72.2% 50.6%",
            "destructive-foreground": "0 0% 98%",
            card: "226 64% 35%",
            "card-foreground": "210 17% 91%",
            popover: "226 64% 32%",
            "popover-foreground": "210 17% 91%",
            border: "226 50% 42%",
            input: "226 50% 42%",
            ring: "29 96% 61%",
        },
    },
    {
        name: "Terminal Verde",
        id: "terminal-verde",
        colors: {
            background: "0 0% 0%",
            foreground: "160 100% 80%",
            primary: "160 100% 50%",
            "primary-foreground": "0 0% 0%",
            secondary: "214 15% 27%",
            "secondary-foreground": "160 100% 90%",
            muted: "214 15% 27%",
            "muted-foreground": "214 10% 60%",
            accent: "160 100% 40%",
            "accent-foreground": "0 0% 0%",
            destructive: "0 72.2% 50.6%",
            "destructive-foreground": "0 0% 98%",
            card: "0 0% 4%",
            "card-foreground": "160 100% 80%",
            popover: "0 0% 0%",
            "popover-foreground": "160 100% 80%",
            border: "214 15% 27%",
            input: "214 15% 27%",
            ring: "160 100% 50%",
        },
    },
    {
        name: "Amor Soft",
        id: "amor-soft",
        colors: {
            background: "0 0% 100%",
            foreground: "214 30% 30%",
            primary: "214 95% 78%",
            "primary-foreground": "214 30% 20%",
            secondary: "336 88% 95%",
            "secondary-foreground": "336 30% 40%",
            muted: "336 88% 95%",
            "muted-foreground": "214 20% 60%",
            accent: "336 88% 85%",
            "accent-foreground": "336 30% 20%",
            destructive: "0 72.2% 50.6%",
            "destructive-foreground": "0 0% 98%",
            card: "0 0% 100%",
            "card-foreground": "214 30% 30%",
            popover: "0 0% 100%",
            "popover-foreground": "214 30% 30%",
            border: "336 88% 95%",
            input: "336 88% 95%",
            ring: "214 95% 78%",
        },
    },
    {
        name: "Acero Simple",
        id: "acero-simple",
        colors: {
            background: "0 0% 100%",
            foreground: "0 0% 0%",
            primary: "215 14% 47%",
            "primary-foreground": "0 0% 100%",
            secondary: "215 10% 90%",
            "secondary-foreground": "0 0% 0%",
            muted: "215 10% 90%",
            "muted-foreground": "0 0% 40%",
            accent: "215 14% 37%",
            "accent-foreground": "0 0% 100%",
            destructive: "0 72.2% 50.6%",
            "destructive-foreground": "0 0% 98%",
            card: "0 0% 100%",
            "card-foreground": "0 0% 0%",
            popover: "0 0% 100%",
            "popover-foreground": "0 0% 0%",
            border: "215 10% 90%",
            input: "215 10% 90%",
            ring: "215 14% 47%",
        },
    },
    {
        name: "Portfolio Púrpura",
        id: "portfolio-purpura",
        colors: {
            background: "210 40% 98%",
            foreground: "266 30% 20%",
            primary: "266 83% 70%",
            "primary-foreground": "0 0% 100%",
            secondary: "210 20% 84%",
            "secondary-foreground": "266 30% 20%",
            muted: "210 20% 84%",
            "muted-foreground": "210 10% 50%",
            accent: "266 83% 60%",
            "accent-foreground": "0 0% 100%",
            destructive: "0 72.2% 50.6%",
            "destructive-foreground": "0 0% 98%",
            card: "0 0% 100%",
            "card-foreground": "266 30% 20%",
            popover: "210 40% 98%",
            "popover-foreground": "266 30% 20%",
            border: "210 20% 84%",
            input: "210 20% 84%",
            ring: "266 83% 70%",
        },
    },
    {
        name: "SaaS Confiable",
        id: "saas-confiable",
        colors: {
            background: "207 33% 26%",
            foreground: "220 14% 96%",
            primary: "163 81% 39%",
            "primary-foreground": "0 0% 100%",
            secondary: "207 25% 36%",
            "secondary-foreground": "220 14% 96%",
            muted: "207 25% 36%",
            "muted-foreground": "207 10% 75%",
            accent: "163 81% 29%",
            "accent-foreground": "0 0% 100%",
            destructive: "0 72.2% 50.6%",
            "destructive-foreground": "0 0% 98%",
            card: "207 33% 29%",
            "card-foreground": "220 14% 96%",
            popover: "207 33% 26%",
            "popover-foreground": "220 14% 96%",
            border: "207 25% 36%",
            input: "207 25% 36%",
            ring: "163 81% 39%",
        },
    },
];


export function ThemeToggle() {
  const { setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false);
  const [activeColorTheme, setActiveColorTheme] = React.useState("default");
  const dict = getDictionary();

  React.useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("app-color-theme") || "default";
    applyTheme(storedTheme);
  }, []);

  const applyTheme = (themeId: string) => {
    const theme = themes.find((t) => t.id === themeId);
    if (!theme) return;

    const root = document.documentElement;
    Object.entries(theme.colors).forEach(([name, value]) => {
      root.style.setProperty(`--${name}`, value);
    });

    localStorage.setItem("app-color-theme", themeId);
    setActiveColorTheme(themeId);
  };
  
  if (!mounted) {
    return (
       <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        </Button>
    )
  }

  const themeTranslations = dict.themes;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          {dict.settings.lightMode || 'Claro'}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          {dict.settings.darkMode || 'Oscuro'}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          {dict.settings.systemMode || 'Sistema'}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
            <DropdownMenuSubTrigger>
                <Palette className="mr-2 h-4 w-4" />
                <span>{dict.settings.themesLabel || 'Temas'}</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
                <DropdownMenuSubContent>
                     <div className="grid grid-cols-5 gap-2 p-2 max-w-[360px] max-h-[400px] overflow-y-auto">
                        {themes.map((theme) => (
                            <button
                                key={theme.id}
                                onClick={() => applyTheme(theme.id)}
                                className={cn(
                                "flex flex-col items-center justify-center rounded-md border-2 p-1 w-full text-xs gap-1",
                                activeColorTheme === theme.id ? "border-primary" : "border-transparent"
                                )}
                            >
                                <div
                                className="h-6 w-full rounded-sm"
                                style={{
                                    backgroundColor: `hsl(${theme.colors.primary})`,
                                }}
                                />
                                <div
                                className="h-4 w-full rounded-sm"
                                style={{
                                    backgroundColor: `hsl(${theme.colors.background})`,
                                }}
                                />
                                 {activeColorTheme === theme.id && <Check className="h-3 w-3" />}
                                 <span className="truncate">{themeTranslations[theme.id as keyof typeof themeTranslations] || theme.name}</span>
                            </button>
                        ))}
                    </div>
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

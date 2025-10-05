
"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { getDictionary } from "@/lib/i18n";

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
    name: "Neon Sunrise", id: "neon-sunrise",
    colors: { background: "240 10% 3.9%", foreground: "0 0% 98%", primary: "34.9 98.6% 59.4%", "primary-foreground": "34.9 98.6% 10%", secondary: "240 3.7% 15.9%", "secondary-foreground": "0 0% 98%", muted: "240 3.7% 15.9%", "muted-foreground": "240 5% 64.9%", accent: "34.9 98.6% 59.4%", "accent-foreground": "34.9 98.6% 10%", destructive: "0 72.2% 50.6%", "destructive-foreground": "0 0% 98%", card: "240 10% 3.9%", "card-foreground": "0 0% 98%", popover: "240 10% 3.9%", "popover-foreground": "0 0% 98%", border: "240 3.7% 15.9%", input: "240 3.7% 15.9%", ring: "34.9 98.6% 59.4%" },
  },
  {
    name: "Ocean Deep", id: "ocean-deep",
    colors: { background: "222.2 84% 4.9%", foreground: "210 40% 98%", primary: "194.5 94.2% 47.6%", "primary-foreground": "222.2 47.4% 11.2%", secondary: "217.2 32.6% 17.5%", "secondary-foreground": "210 40% 98%", muted: "217.2 32.6% 17.5%", "muted-foreground": "215 20.2% 65.1%", accent: "194.5 94.2% 47.6%", "accent-foreground": "210 40% 98%", destructive: "0 62.8% 30.6%", "destructive-foreground": "210 40% 98%", card: "222.2 84% 4.9%", "card-foreground": "210 40% 98%", popover: "222.2 84% 4.9%", "popover-foreground": "210 40% 98%", border: "217.2 32.6% 17.5%", input: "217.2 32.6% 17.5%", ring: "194.5 94.2% 47.6%" },
  },
  {
    name: "Forest Whisper", id: "forest-whisper",
    colors: { background: "120 15% 96%", foreground: "120 20% 10%", primary: "140 60% 40%", "primary-foreground": "120 15% 96%", secondary: "110 10% 88%", "secondary-foreground": "120 20% 10%", muted: "110 10% 88%", "muted-foreground": "120 5% 45%", accent: "140 60% 40%", "accent-foreground": "120 15% 96%", destructive: "0 60% 50%", "destructive-foreground": "0 0% 100%", card: "120 15% 98%", "card-foreground": "120 20% 10%", popover: "120 15% 98%", "popover-foreground": "120 20% 10%", border: "110 10% 88%", input: "110 10% 88%", ring: "140 60% 40%" },
  },
  {
    name: "Royal Purple", id: "royal-purple",
    colors: { background: "260 50% 5%", foreground: "260 10% 95%", primary: "260 80% 65%", "primary-foreground": "260 50% 5%", secondary: "260 30% 15%", "secondary-foreground": "260 10% 95%", muted: "260 30% 15%", "muted-foreground": "260 10% 65%", accent: "260 80% 65%", "accent-foreground": "260 50% 5%", destructive: "0 70% 60%", "destructive-foreground": "0 0% 100%", card: "260 40% 10%", "card-foreground": "260 10% 95%", popover: "260 40% 10%", "popover-foreground": "260 10% 95%", border: "260 30% 15%", input: "260 30% 15%", ring: "260 80% 65%" },
  },
  {
    name: "Crimson Night", id: "crimson-night",
    colors: { background: "0 0% 8%", foreground: "0 0% 98%", primary: "350 80% 55%", "primary-foreground": "0 0% 100%", secondary: "0 0% 14%", "secondary-foreground": "0 0% 98%", muted: "0 0% 14%", "muted-foreground": "0 0% 60%", accent: "350 80% 55%", "accent-foreground": "0 0% 100%", destructive: "0 80% 55%", "destructive-foreground": "0 0% 100%", card: "0 0% 10%", "card-foreground": "0 0% 98%", popover: "0 0% 10%", "popover-foreground": "0 0% 98%", border: "0 0% 14%", input: "0 0% 14%", ring: "350 80% 55%" },
  },
  {
    name: "Fresh Mint", id: "fresh-mint",
    colors: { background: "150 50% 98%", foreground: "150 20% 15%", primary: "160 70% 45%", "primary-foreground": "150 50% 98%", secondary: "150 20% 90%", "secondary-foreground": "150 20% 15%", muted: "150 20% 90%", "muted-foreground": "150 10% 50%", accent: "160 70% 45%", "accent-foreground": "150 50% 98%", destructive: "0 60% 55%", "destructive-foreground": "0 0% 100%", card: "150 50% 100%", "card-foreground": "150 20% 15%", popover: "150 50% 100%", "popover-foreground": "150 20% 15%", border: "150 20% 90%", input: "150 20% 90%", ring: "160 70% 45%" },
  },
  {
    name: "Golden Hour", id: "golden-hour",
    colors: { background: "30 90% 95%", foreground: "30 30% 10%", primary: "40 90% 50%", "primary-foreground": "30 30% 10%", secondary: "35 50% 85%", "secondary-foreground": "30 30% 10%", muted: "35 50% 85%", "muted-foreground": "30 10% 45%", accent: "40 90% 50%", "accent-foreground": "30 30% 10%", destructive: "0 70% 55%", "destructive-foreground": "0 0% 100%", card: "30 90% 98%", "card-foreground": "30 30% 10%", popover: "30 90% 98%", "popover-foreground": "30 30% 10%", border: "35 50% 85%", input: "35 50% 85%", ring: "40 90% 50%" },
  },
  {
    name: "Electric Blue", id: "electric-blue",
    colors: { background: "220 50% 10%", foreground: "220 20% 95%", primary: "210 100% 50%", "primary-foreground": "220 50% 5%", secondary: "220 40% 20%", "secondary-foreground": "220 20% 95%", muted: "220 40% 20%", "muted-foreground": "220 10% 60%", accent: "210 100% 50%", "accent-foreground": "220 50% 5%", destructive: "0 80% 60%", "destructive-foreground": "0 0% 100%", card: "220 50% 12%", "card-foreground": "220 20% 95%", popover: "220 50% 12%", "popover-foreground": "220 20% 95%", border: "220 40% 20%", input: "220 40% 20%", ring: "210 100% 50%" },
  },
  {
    name: "Slate Gray", id: "slate-gray",
    colors: { background: "220 13% 94%", foreground: "220 15% 20%", primary: "215 20% 50%", "primary-foreground": "220 13% 98%", secondary: "220 10% 85%", "secondary-foreground": "220 15% 20%", muted: "220 10% 85%", "muted-foreground": "220 10% 40%", accent: "215 20% 50%", "accent-foreground": "220 13% 98%", destructive: "0 70% 50%", "destructive-foreground": "0 0% 100%", card: "220 13% 98%", "card-foreground": "220 15% 20%", popover: "220 13% 98%", "popover-foreground": "220 15% 20%", border: "220 10% 85%", input: "220 10% 85%", ring: "215 20% 50%" },
  },
  {
    name: "Cyberpunk", id: "cyberpunk",
    colors: { background: "270 60% 7%", foreground: "210 100% 90%", primary: "320 100% 50%", "primary-foreground": "270 60% 7%", secondary: "270 40% 15%", "secondary-foreground": "210 100% 90%", muted: "270 40% 15%", "muted-foreground": "210 20% 60%", accent: "320 100% 50%", "accent-foreground": "270 60% 7%", destructive: "180 100% 45%", "destructive-foreground": "180 100% 5%", card: "270 50% 10%", "card-foreground": "210 100% 90%", popover: "270 50% 10%", "popover-foreground": "210 100% 90%", border: "270 40% 15%", input: "270 40% 15%", ring: "320 100% 50%" },
  },
  {
    name: "Pastel Dream", id: "pastel-dream",
    colors: { background: "300 30% 97%", foreground: "300 10% 30%", primary: "320 70% 80%", "primary-foreground": "300 10% 20%", secondary: "20 50% 95%", "secondary-foreground": "20 10% 30%", muted: "20 50% 95%", "muted-foreground": "300 5% 50%", accent: "320 70% 80%", "accent-foreground": "300 10% 20%", destructive: "0 60% 80%", "destructive-foreground": "0 10% 20%", card: "300 30% 99%", "card-foreground": "300 10% 30%", popover: "300 30% 99%", "popover-foreground": "300 10% 30%", border: "20 50% 95%", input: "20 50% 95%", ring: "320 70% 80%" },
  },
  {
    name: "Vintage Charm", id: "vintage-charm",
    colors: { background: "35 40% 92%", foreground: "35 20% 20%", primary: "10 60% 45%", "primary-foreground": "35 40% 95%", secondary: "35 20% 85%", "secondary-foreground": "35 20% 20%", muted: "35 20% 85%", "muted-foreground": "35 10% 40%", accent: "10 60% 45%", "accent-foreground": "35 40% 95%", destructive: "0 50% 40%", "destructive-foreground": "0 0% 100%", card: "35 40% 96%", "card-foreground": "35 20% 20%", popover: "35 40% 96%", "popover-foreground": "35 20% 20%", border: "35 20% 85%", input: "35 20% 85%", ring: "10 60% 45%" },
  },
  {
    name: "Desert Mirage", id: "desert-mirage",
    colors: { background: "39 72% 95%", foreground: "39 30% 20%", primary: "25 80% 60%", "primary-foreground": "39 30% 15%", secondary: "45 50% 88%", "secondary-foreground": "39 30% 20%", muted: "45 50% 88%", "muted-foreground": "39 15% 45%", accent: "25 80% 60%", "accent-foreground": "39 30% 15%", destructive: "0 60% 50%", "destructive-foreground": "0 0% 100%", card: "39 72% 98%", "card-foreground": "39 30% 20%", popover: "39 72% 98%", "popover-foreground": "39 30% 20%", border: "45 50% 88%", input: "45 50% 88%", ring: "25 80% 60%" },
  },
  {
    name: "Toxic Green", id: "toxic-green",
    colors: { background: "100 5% 10%", foreground: "100 80% 85%", primary: "100 100% 50%", "primary-foreground": "100 5% 5%", secondary: "100 10% 20%", "secondary-foreground": "100 80% 85%", muted: "100 10% 20%", "muted-foreground": "100 20% 60%", accent: "100 100% 50%", "accent-foreground": "100 5% 5%", destructive: "0 100% 50%", "destructive-foreground": "0 0% 100%", card: "100 5% 12%", "card-foreground": "100 80% 85%", popover: "100 5% 12%", "popover-foreground": "100 80% 85%", border: "100 10% 20%", input: "100 10% 20%", ring: "100 100% 50%" },
  },
  {
    name: "Rose Quartz", id: "rose-quartz",
    colors: { background: "340 60% 97%", foreground: "340 20% 25%", primary: "340 80% 70%", "primary-foreground": "340 20% 15%", secondary: "340 30% 92%", "secondary-foreground": "340 20% 25%", muted: "340 30% 92%", "muted-foreground": "340 10% 50%", accent: "340 80% 70%", "accent-foreground": "340 20% 15%", destructive: "0 60% 65%", "destructive-foreground": "0 0% 100%", card: "340 60% 99%", "card-foreground": "340 20% 25%", popover: "340 60% 99%", "popover-foreground": "340 20% 25%", border: "340 30% 92%", input: "340 30% 92%", ring: "340 80% 70%" },
  },
  {
    name: "Arctic Night", id: "arctic-night",
    colors: { background: "210 30% 12%", foreground: "210 20% 95%", primary: "200 80% 60%", "primary-foreground": "210 30% 10%", secondary: "210 25% 20%", "secondary-foreground": "210 20% 95%", muted: "210 25% 20%", "muted-foreground": "210 10% 65%", accent: "200 80% 60%", "accent-foreground": "210 30% 10%", destructive: "0 70% 55%", "destructive-foreground": "0 0% 100%", card: "210 30% 15%", "card-foreground": "210 20% 95%", popover: "210 30% 15%", "popover-foreground": "210 20% 95%", border: "210 25% 20%", input: "210 25% 20%", ring: "200 80% 60%" },
  },
  {
    name: "Sunset Orange", id: "sunset-orange",
    colors: { background: "20 10% 97%", foreground: "20 30% 15%", primary: "25 95% 55%", "primary-foreground": "20 10% 98%", secondary: "20 20% 90%", "secondary-foreground": "20 30% 15%", muted: "20 20% 90%", "muted-foreground": "20 10% 50%", accent: "25 95% 55%", "accent-foreground": "20 10% 98%", destructive: "0 70% 50%", "destructive-foreground": "0 0% 100%", card: "20 10% 100%", "card-foreground": "20 30% 15%", popover: "20 10% 100%", "popover-foreground": "20 30% 15%", border: "20 20% 90%", input: "20 20% 90%", ring: "25 95% 55%" },
  },
  {
    name: "Lavender Bliss", id: "lavender-bliss",
    colors: { background: "250 40% 98%", foreground: "250 20% 20%", primary: "250 60% 65%", "primary-foreground": "250 40% 98%", secondary: "250 20% 92%", "secondary-foreground": "250 20% 20%", muted: "250 20% 92%", "muted-foreground": "250 10% 50%", accent: "250 60% 65%", "accent-foreground": "250 40% 98%", destructive: "0 60% 60%", "destructive-foreground": "0 0% 100%", card: "250 40% 100%", "card-foreground": "250 20% 20%", popover: "250 40% 100%", "popover-foreground": "250 20% 20%", border: "250 20% 92%", input: "250 20% 92%", ring: "250 60% 65%" },
  },
  {
    name: "Matrix", id: "matrix",
    colors: { background: "120 100% 2%", foreground: "120 100% 60%", primary: "120 100% 50%", "primary-foreground": "120 100% 2%", secondary: "120 50% 8%", "secondary-foreground": "120 100% 60%", muted: "120 50% 8%", "muted-foreground": "120 30% 40%", accent: "120 100% 50%", "accent-foreground": "120 100% 2%", destructive: "0 100% 50%", "destructive-foreground": "0 0% 100%", card: "120 80% 5%", "card-foreground": "120 100% 60%", popover: "120 80% 5%", "popover-foreground": "120 100% 60%", border: "120 50% 8%", input: "120 50% 8%", ring: "120 100% 50%" },
  },
];

export function ThemeCustomizer() {
  const [mounted, setMounted] = useState(false);
  const [activeTheme, setActiveTheme] = useState("default");
  const dict = getDictionary();

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("app-theme") || "default";
    applyTheme(storedTheme);
    setActiveTheme(storedTheme);
  }, []);

  const applyTheme = (themeId: string) => {
    const theme = themes.find((t) => t.id === themeId);
    if (!theme) return;

    const root = document.documentElement;
    Object.entries(theme.colors).forEach(([name, value]) => {
      root.style.setProperty(`--${name}`, value);
    });

    localStorage.setItem("app-theme", themeId);
    setActiveTheme(themeId);
  };

  if (!mounted) {
    return null; // Or a loader
  }
  
  const themeTranslations = dict.themes;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-4 max-h-[60vh] overflow-y-auto pr-3">
      {themes.map((theme) => (
        <div key={theme.id} className="space-y-2">
          <button
            onClick={() => applyTheme(theme.id)}
            className={cn(
              "flex flex-col items-center justify-center rounded-md border-2 p-1 w-full",
              activeTheme === theme.id ? "border-primary" : "border-transparent"
            )}
          >
            <div
              className="h-12 w-full rounded-sm"
              style={{
                backgroundColor: `hsl(${theme.colors.primary})`,
              }}
            />
             <div
              className="h-8 w-full rounded-sm mt-1"
              style={{
                backgroundColor: `hsl(${theme.colors.background})`,
              }}
            />
          </button>
          <div className="flex items-center justify-center text-xs font-medium">
             {activeTheme === theme.id && <Check className="mr-2 h-4 w-4 text-primary" />}
             {themeTranslations[theme.id as keyof typeof themeTranslations] || theme.name}
          </div>
        </div>
      ))}
    </div>
  );
}

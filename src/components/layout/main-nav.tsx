
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/lib/types";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import React from "react";
import { Code, BrainCircuit, PenTool, Cloud, Users, Briefcase, BookText, Shield, Smartphone, Blocks, Landmark, Paintbrush, TrendingUp, Film, Laptop, Rocket, FileCode, Search, Lightbulb, Video, Languages, LineChart, Scale, HeartPulse, Mic, Swords, MessageCircle } from "lucide-react";

const mainNavItems: NavItem[] = [
  { title: "Rutas", href: "/paths" },
  { title: "Mi Progreso", href: "/dashboard" },
  { title: "Comunicación", href: "/comunicacion" },
  { title: "Guía de Entrevistas", href: "/guides" },
  { title: "Retos Semanales", href: "/challenges" },
  { title: "Programación sin PC", href: "/termux" },
];

const categories: { title: string; href: string; description: string, icon: React.ReactNode }[] = [
  {
    title: "Desarrollo Web",
    href: "/courses?path=desarrollo-web",
    description: "Conviértete en un desarrollador web Full-Stack.",
    icon: <Code />
  },
  {
    title: "Inteligencia Artificial",
    href: "/courses?path=ia-datascience",
    description: "Domina el futuro con IA y Machine Learning.",
    icon: <BrainCircuit />
  },
  {
    title: "Diseño de Producto y UX",
    href: "/courses?path=diseno-ux",
    description: "Crea productos que los usuarios amen.",
    icon: <PenTool />
  },
  {
    title: "Programación",
    href: "/courses?path=programacion",
    description: "Domina los lenguajes que construyen el futuro.",
    icon: <Laptop />
  },
  {
    title: "Startups",
    href: "/courses?path=startups",
    description: "Lanza y escala tu propio negocio tecnológico.",
    icon: <Rocket />
  },
  {
    title: "Marketing Digital",
    href: "/courses?path=marketing",
    description: "Impulsa el crecimiento con estrategias digitales.",
    icon: <TrendingUp />
  },
];


export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center space-x-4 md:flex lg:space-x-6">
       <NavigationMenu>
        <NavigationMenuList>
           <NavigationMenuItem>
            <NavigationMenuTrigger>Cursos</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {categories.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                    icon={component.icon}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {mainNavItems.map((item) => (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink asChild active={pathname === item.href}>
                <Link
                  href={item.href}
                  className={cn(navigationMenuTriggerStyle(), "text-muted-foreground", pathname === item.href && "text-primary")}
                >
                  {item.title}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-3">
            <div className="text-primary">{icon}</div>
            <div>
              <div className="text-sm font-medium leading-none">{title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            </div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

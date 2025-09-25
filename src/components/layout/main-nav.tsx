"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/lib/types";

export function MainNav() {
  const pathname = usePathname();
  const navItems: NavItem[] = [
    { title: "Rutas de Aprendizaje", href: "/paths" },
    { title: "Cursos", href: "/courses" },
    { title: "Mi Panel", href: "/dashboard" },
  ];

  return (
    <nav className="hidden items-center space-x-4 md:flex lg:space-x-6">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === item.href ? "text-primary" : "text-muted-foreground"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}

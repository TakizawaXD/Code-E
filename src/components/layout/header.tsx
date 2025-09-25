import Link from "next/link";
import {
  Bell,
  Menu,
  Search,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MainNav } from "@/components/layout/main-nav";
import { UserNav } from "@/components/layout/user-nav";
import { CodeELogo } from "@/components/icons";
import { notifications } from "@/lib/data";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <CodeELogo className="h-6 w-auto" />
          </Link>
          <MainNav />
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="relative hidden w-full max-w-sm items-center md:flex">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Buscar cursos..."
              className="pl-9"
            />
          </div>
          <nav className="flex items-center space-x-2">
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                   <span className="absolute top-1 right-1 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel>Notificaciones</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {notifications.map((notification) => (
                  <DropdownMenuItem key={notification.id} className="flex flex-col items-start gap-1 py-2">
                      <p className="font-medium">{notification.title}</p>
                      <p className="text-xs text-muted-foreground">{notification.description}</p>
                      <p className="text-xs text-muted-foreground/80 mt-1">{formatDistanceToNow(notification.date, { addSuffix: true, locale: es })}</p>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <UserNav />

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="p-4">
                   <Link
                    href="/"
                    className="flex items-center gap-2 text-lg font-semibold mb-8"
                  >
                    <CodeELogo className="h-6 w-auto" />
                  </Link>
                  <nav className="grid gap-6 text-base font-medium">
                    <Link href="/paths" className="flex items-center justify-between text-muted-foreground hover:text-foreground">
                      Rutas de Aprendizaje
                    </Link>
                    <Link href="/courses" className="flex items-center justify-between text-muted-foreground hover:text-foreground">
                      Cursos
                    </Link>
                    <Link href="/dashboard" className="flex items-center justify-between text-muted-foreground hover:text-foreground">
                      Mi Panel
                    </Link>
                    <Link href="/pricing" className="flex items-center justify-between text-muted-foreground hover:text-foreground">
                      Precios
                    </Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  );
}

    
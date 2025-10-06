
"use client";

import Link from "next/link";
import { Bell, Menu, Search, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
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
import { useFirebase, useUser, useCollection, useFirestore, useMemoFirebase, useDoc } from "@/firebase";
import type { Notification, UserProfile } from "@/lib/types";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";
import { ThemeToggle } from "@/components/theme-toggle";
import { collection, query, orderBy, doc, writeBatch } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import { Separator } from "@/components/ui/separator";

export function Header() {
  const { user } = useUser();
  const firestore = useFirestore();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const userProfileRef = useMemoFirebase(() => {
    if (!user || !firestore) return null;
    return doc(firestore, "users", user.uid);
  }, [user, firestore]);
  const { data: userProfile } = useDoc<UserProfile>(userProfileRef);

  const notificationsQuery = useMemoFirebase(() => {
    if (!user || !firestore) return null;
    return query(collection(firestore, `users/${user.uid}/notifications`), orderBy("date", "desc"));
  }, [firestore, user]);

  const { data: notifications, isLoading: isLoadingNotifications } = useCollection<Notification>(notificationsQuery);
  
  const hasUnread = useMemo(() => {
      return notifications?.some(n => !n.read);
  }, [notifications]);

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      router.push(`/courses?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsMobileMenuOpen(false);
    }
  };

  const handleMarkNotificationsAsRead = async () => {
    if (!user || !firestore || !notifications || !hasUnread) return;
    
    const unreadNotifications = notifications.filter(n => !n.read);
    if (unreadNotifications.length === 0) return;

    const batch = writeBatch(firestore);
    unreadNotifications.forEach(notification => {
        const notifRef = doc(firestore, `users/${user.uid}/notifications`, notification.id);
        batch.update(notifRef, { read: true });
    });
    await batch.commit();
  }

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };


  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        {/* Desktop Navigation */}
        <div className="hidden flex-1 items-center space-x-4 sm:flex md:space-x-6">
          <Link href="/" className="flex items-center space-x-2">
            <CodeELogo className="h-6 w-auto" />
          </Link>
          <MainNav />
        </div>
        
        {/* Mobile Navigation */}
        <div className="flex flex-1 items-center justify-between sm:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0">
                <div className="flex h-full flex-col">
                  <SheetHeader className="p-4">
                    <SheetTitle>
                       <Link href="/" onClick={handleMobileLinkClick} className="flex items-center space-x-2">
                        <CodeELogo className="h-6 w-auto" />
                      </Link>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="p-4">
                     <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          placeholder="Buscar cursos..."
                          className="pl-9"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          onKeyDown={handleSearch}
                        />
                      </div>
                  </div>
                  <nav className="grid gap-2 p-4 text-base font-medium">
                    <Link href="/" className="block rounded-lg py-2 px-3 text-muted-foreground hover:bg-accent hover:text-foreground" onClick={handleMobileLinkClick}>
                      Inicio
                    </Link>
                    <Link href="/paths" className="block rounded-lg py-2 px-3 text-muted-foreground hover:bg-accent hover:text-foreground" onClick={handleMobileLinkClick}>
                      Rutas
                    </Link>
                    <Link href="/dashboard" className="block rounded-lg py-2 px-3 text-muted-foreground hover:bg-accent hover:text-foreground" onClick={handleMobileLinkClick}>
                      Mi Progreso
                    </Link>
                    <Link href="/guides" className="block rounded-lg py-2 px-3 text-muted-foreground hover:bg-accent hover:text-foreground" onClick={handleMobileLinkClick}>
                      Guía de Entrevistas
                    </Link>
                     <Link href="/challenges" className="block rounded-lg py-2 px-3 text-muted-foreground hover:bg-accent hover:text-foreground" onClick={handleMobileLinkClick}>
                      Retos Semanales
                    </Link>
                    <Link href="/termux" className="flex items-center gap-2 rounded-lg py-2 px-3 text-muted-foreground hover:bg-accent hover:text-foreground" onClick={handleMobileLinkClick}>
                      <Smartphone className="h-4 w-4" />
                      Programación sin PC
                    </Link>
                  </nav>
                  <Separator />
                   <div className="p-4 space-y-4">
                     <Button variant="ghost" asChild className="w-full justify-start">
                        <Link href="/pricing" onClick={handleMobileLinkClick}>Planes</Link>
                    </Button>
                     <DropdownMenu onOpenChange={(open) => { if(open) { handleMarkNotificationsAsRead() }}}>
                        <DropdownMenuTrigger asChild>
                           <Button variant="ghost" className="w-full justify-start relative">
                            <Bell className="mr-2 h-5 w-5" />
                            Notificaciones
                             {hasUnread && <span className="absolute top-1 right-1 flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>}
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-80">
                          <DropdownMenuLabel>Notificaciones</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                           {isLoadingNotifications ? (
                            <DropdownMenuItem>Cargando...</DropdownMenuItem>
                           ) : notifications && notifications.length > 0 ? (
                            notifications.map((notification) => (
                              <DropdownMenuItem key={notification.id} className="flex flex-col items-start gap-1 py-2">
                                  <p className="font-medium">{notification.title}</p>
                                  <p className="text-xs text-muted-foreground">{notification.description}</p>
                                  <p className="text-xs text-muted-foreground/80 mt-1">{notification.date && notification.date.toDate ? formatDistanceToNow(notification.date.toDate(), { addSuffix: true, locale: es }) : ''}</p>
                              </DropdownMenuItem>
                            ))
                          ) : (
                            <DropdownMenuItem>No tienes notificaciones.</DropdownMenuItem>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <div className="flex justify-between items-center rounded-lg p-2 hover:bg-accent">
                          <span className="text-sm font-medium text-muted-foreground">Apariencia</span>
                          <ThemeToggle />
                      </div>
                   </div>
                </div>
              </SheetContent>
            </Sheet>
             <Link href="/" className="flex items-center space-x-2">
                <CodeELogo className="h-6 w-auto" />
            </Link>
        </div>


        <div className="flex items-center justify-end space-x-2 md:flex-1">
          <div className="hidden w-full max-w-sm items-center md:flex relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="¿Qué quieres aprender?"
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>
           <div className="sm:hidden">
              <Button variant="ghost" size="icon"><Search className="h-5 w-5"/></Button>
           </div>
           <div className="hidden sm:flex">
             <ThemeToggle />
           </div>
           <div className="hidden sm:flex">
              <DropdownMenu onOpenChange={(open) => { if(open) { handleMarkNotificationsAsRead() }}}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                     {hasUnread && <span className="absolute top-1 right-1 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                  <DropdownMenuLabel>Notificaciones</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                   {isLoadingNotifications ? (
                    <DropdownMenuItem>Cargando...</DropdownMenuItem>
                   ) : notifications && notifications.length > 0 ? (
                    notifications.map((notification) => (
                      <DropdownMenuItem key={notification.id} className="flex flex-col items-start gap-1 py-2">
                          <p className="font-medium">{notification.title}</p>
                          <p className="text-xs text-muted-foreground">{notification.description}</p>
                          <p className="text-xs text-muted-foreground/80 mt-1">{notification.date && notification.date.toDate ? formatDistanceToNow(notification.date.toDate(), { addSuffix: true, locale: es }) : ''}</p>
                      </DropdownMenuItem>
                    ))
                  ) : (
                    <DropdownMenuItem>No tienes notificaciones.</DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <UserNav userProfile={userProfile} />
        </div>
      </div>
    </header>
  );
}

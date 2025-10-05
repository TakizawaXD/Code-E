

"use client";

import Link from "next/link";
import { Bell, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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

export function Header() {
  const { user } = useUser();
  const firestore = useFirestore();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

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
              placeholder="¿Qué quieres aprender?"
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>
          <nav className="flex items-center space-x-1 md:space-x-2">
            <Button variant="ghost" asChild>
                <Link href="/pricing">Planes</Link>
            </Button>
            <ThemeToggle />
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

            <UserNav userProfile={userProfile} />

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
                    <Link href="/" className="flex items-center justify-between text-muted-foreground hover:text-foreground">
                      Inicio
                    </Link>
                    <Link href="/paths" className="flex items-center justify-between text-muted-foreground hover:text-foreground">
                      Rutas
                    </Link>
                    <Link href="/dashboard" className="flex items-center justify-between text-muted-foreground hover:text-foreground">
                      Mi Progreso
                    </Link>
                    <Link href="/community" className="flex items-center justify-between text-muted-foreground hover:text-foreground">
                      Comunidad
                    </Link>
                    <Link href="/guides" className="flex items-center justify-between text-muted-foreground hover:text-foreground">
                      Guía de Entrevistas
                    </Link>
                     <Link href="/challenges" className="flex items-center justify-between text-muted-foreground hover:text-foreground">
                      Retos Semanales
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

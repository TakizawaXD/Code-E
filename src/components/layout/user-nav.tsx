
"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth, useFirebase, useUser } from "@/firebase";
import { CreditCard, LogOut, Settings, User as UserIcon } from "lucide-react";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import type { UserProfile } from "@/lib/types";

interface UserNavProps {
  userProfile: UserProfile | undefined;
}

export function UserNav({ userProfile }: UserNavProps) {
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut(auth);
    router.push("/auth/login");
  };

  if (isUserLoading) {
    return null; // or a loading spinner
  }

  if (!user) {
    return (
      <Button asChild>
        <Link href="/auth/login">Iniciar Sesión</Link>
      </Button>
    );
  }

  const userInitial = user.displayName ? user.displayName.charAt(0).toUpperCase() : (user.email ? user.email.charAt(0).toUpperCase() : '?');
  const displayName = user.displayName || 'Usuario';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
         <Button variant="ghost" className="relative h-10 w-auto px-2 space-x-2">
            <Avatar className="h-8 w-8">
                {user.photoURL && <AvatarImage src={user.photoURL} alt={user.displayName || "User"} />}
                <AvatarFallback>{userInitial}</AvatarFallback>
            </Avatar>
            <div className="hidden md:flex flex-col items-start">
                <span className="text-xs font-bold">{displayName}</span>
                <span className="text-xs text-muted-foreground">{userProfile?.points || 0}pts</span>
            </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{displayName}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
             <Link href="/dashboard">
              <UserIcon className="mr-2 h-4 w-4" />
              <span>Perfil</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/pricing">
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Suscripción</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/dashboard/settings">
              <Settings className="mr-2 h-4 w-4" />
              <span>Ajustes</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Cerrar Sesión</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

import Link from "next/link";
import { KursorLogo } from "@/components/icons";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4">
      <div className="absolute top-4 left-4 md:top-8 md:left-8">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <KursorLogo className="h-6 w-auto" />
        </Link>
      </div>
      <main className="w-full max-w-md">{children}</main>
    </div>
  );
}

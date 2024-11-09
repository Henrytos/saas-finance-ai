"use client";

import { UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export const NavBar = () => {
  const pathName = usePathname();

  return (
    <nav className="flex items-center justify-between border-b border-solid px-8 py-4">
      <div className="flex items-center gap-12">
        <Link href="/">
          <Image
            src="/icon.svg"
            width={180}
            height={40}
            alt="icone da pagina"
          />
        </Link>
        <Link
          href="/"
          className={clsx("test-sm", {
            "text-primary": pathName === "/",
            "text-muted-foreground": pathName !== "/",
            "font-semibold": pathName === "/",
          })}
        >
          Dashboard
        </Link>
        <Link
          href="/transactions"
          className={clsx("test-sm", {
            "text-primary": pathName === "/transactions",
            "font-semibold": pathName === "/transactions",
            "text-muted-foreground": pathName !== "/transactions",
          })}
        >
          Transações
        </Link>
        <Link
          href="/plain"
          className={clsx("test-sm", {
            "text-primary": pathName === "/plain",
            "font-semibold": pathName === "/plain",
            "text-muted-foreground": pathName !== "/plain",
          })}
        >
          Planos
        </Link>
      </div>

      <Button variant="outline">
        <UserButton showName />
      </Button>
    </nav>
  );
};

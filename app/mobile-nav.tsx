"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  ["Services", "#services"],
  ["Sample Work", "#portfolio"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
];

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="mobile-menu-button" variant="outline" size="icon" aria-label="Open navigation menu">
          <Menu aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent className="mobile-menu-panel">
        <SheetHeader>
          <SheetTitle>Marc Lex VA</SheetTitle>
        </SheetHeader>
        <nav aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <SheetClose asChild key={href}>
              <a href={href}>{label}</a>
            </SheetClose>
          ))}
          <SheetClose asChild>
            <a className="mobile-resume-link" href="/Marc-Lex-Mateo-Resume.pdf" download>
              Download résumé
            </a>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

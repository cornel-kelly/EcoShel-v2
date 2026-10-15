"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface MobileNavProps {
  activePath?: string;
}

const navItems = [
  { id: "find-a-rental", label: "Rentals", icon: "search", href: "/find-a-rental" },
  { id: "accra-neighborhoods", label: "Areas", icon: "location_city", href: "/find-a-rental" },
  { id: "list-your-property", label: "List", icon: "add_circle", href: "/list-your-property" },
  { id: "how-it-works", label: "Guide", icon: "help_outline", href: "/find-a-rental" },
  { id: "settings", label: "Account", icon: "account_circle", href: "/settings" },
];

export default function MobileNav({ activePath }: MobileNavProps) {
  const pathname = usePathname();

  const resolveActive = (itemId: string, itemHref: string) => {
    if (activePath) return activePath === itemId;
    return pathname === itemHref || pathname.startsWith(`/${itemId}`);
  };

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-surface-container-lowest shadow-[0_-2px_12px_rgba(0,0,0,0.06)] px-margin py-space-xs border-t border-surface-container-high/40">
      <nav className="flex items-center justify-around" aria-label="Mobile navigation">
        {navItems.map((item) => {
          const isActive = resolveActive(item.id, item.href);
          return (
            <Link
              key={item.id}
              className={`flex flex-col items-center gap-0.5 py-space-xs transition-colors ${
                isActive
                  ? "text-primary font-bold"
                  : "text-on-surface-variant hover:text-primary"
              }`}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
            >
              <span className="material-symbols-outlined text-[1.375rem]">
                {item.icon}
              </span>
              <span className="font-caption text-caption">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

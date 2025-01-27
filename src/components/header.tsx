"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Header() {
  const links = [
    { name: "Skills", href: "/skills" },
    { name: "Work Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Certificates", href: "/certificates" },
    { name: "Contact Me", href: "/contact" },
  ];

  const pathName = usePathname();
  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between container mx-auto text-white p-8">
        <Link
          href={"/"}
          className={
            pathName === "/"
              ? "text-emerald-300 text-3xl font-bold"
              : "text-3xl font-bold"
          }
        >
          Home
        </Link>
        <div className="text-xl space-x-6">
          {links.map((link) => (
            <Link
              href={link.href}
              className={pathName === link.href ? "text-yellow-500" : ""}
              key={link.href}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

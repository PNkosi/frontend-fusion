"use client";
import React from "react";
import {
  IconTools,
  IconUsers,
  IconNews,
  IconLayout,
  IconFiles
} from "@tabler/icons-react";
import Link from "next/link";import ThemeToggler from "./theme-toggler";
;
export default function Navbar() {
  const navItems = [
    {
      name: "Website Builder",
      link: "/web-builder",
      icon: <IconLayout />
    },
    {
      name: "Blog",
      link: "/blog",
      icon: <IconNews size={20} />
    },
    {
      name: "Tools",
      link: "/tools",
      icon: <IconTools size={20} />,
    },
    {
      name: "Docs",
      link: "/docs",
      icon: <IconFiles size={20}/>
    }
  ];
  return (
    <nav className="sticky z-50 top-0 bg-background">
      <div className="container h-[10vh] flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-12">
          <Link href={"/"} className="text-foreground font-bold">
            <span className="bg-indigo-500 text-slate-100 p-2 rounded-xl mr-2">
              ※
            </span>
            <span className="hidden md:inline-block">Frontend</span>
            <span className="text-indigo-500 hidden md:inline-block">Fusion</span>
          </Link>
          <ul className="flex items-center md:gap-4">
            {navItems.map((item) => (
              <li key={item.name} className="">
                <Link className="flex items-center gap-2 nav-link" href={item.link}>
                  {item.icon}
                  <span className="hidden md:inline-block">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <Link className="flex items-center gap-2 nav-link" href="#">
            <IconUsers size={20} />
            <span className="hidden md:inline-block">Community</span>
          </Link>
          <ThemeToggler />
        </div>
      </div>
    </nav>
  );
}

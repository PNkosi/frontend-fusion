"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconBrandGithub, IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Link from "next/link";
import Search from "./search";
import ThemeToggler from "./theme-toggler";
export default function Navbar() {
  const navItems = [
    {
      name: "Tools",
      link: "/tools",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Templates",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <nav className="sticky z-50  top-0 w-full bg-background h-[10vh] container flex items-center justify-between">
      <div className="flex items-center gap-12">
        <Link href={"/"} className="text-foreground font-bold">
          <span className="bg-[#A655F7] text-slate-100 p-2 rounded-xl mr-2">※</span>
          <span className="text-indigo-500">Frontend</span><span className="text-indigo-500">Fusion</span>
        </Link>
        <ul className="flex items-center gap-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <Link href="#">Community</Link>
        <Link href="#"><IconBrandGithub /></Link>
        <ThemeToggler />
        <Search />
      </div>
    </nav>
  );
}

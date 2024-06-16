import React from "react";
import Sidebar from "./_components/sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "CSS Background Color Generator",
    description: "Generate beautiful solid, gradients CSS backgrounds",
  };


export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container md:flex gap-12">
      <Sidebar />
      <main className="flex-1">{children}</main>
    </div>
  );
}

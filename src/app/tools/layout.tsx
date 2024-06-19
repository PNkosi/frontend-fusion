import React from "react";
import Sidebar from "./_components/sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "FrontendFusion - Tools",
    description: "Generate beautiful solid, gradients CSS backgrounds, Color Scheme Generator",
  };


export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="md:flex">
      <Sidebar />
      <main className="container">{children}</main>
    </div>
  );
}

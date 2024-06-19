import React from "react";

export default function GridBg({ children }: { children: React.ReactNode }) {
  return (
    <div className="container flex flex-col h-full dark:bg-grid-slate-500/[0.2] bg-grid-slate-500/[0.2] relative">
      {children}
      <div className="absolute top-0 left-0 pointer-events-none inset-0 flex flex-col items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
}

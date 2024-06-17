import React from "react";

export default function GridBg({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-[90vh] w-full dark:bg-grid-slate-500/[0.2] bg-grid-slate-500/[0.2] relative">
      {children}
      <div className="absolute pointer-events-none inset-0 flex flex-col items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
}

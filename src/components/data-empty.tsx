import { cn } from "@/lib/utils";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import React from "react";

type Props = {
  className?: string;
  title: string;
  description?: string;
  icon?: React.ReactNode
};

export default function EmptyData({ className, title, description, icon }: Props) {
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        {icon}
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}

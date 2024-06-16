import { cn } from "@/lib/utils";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

type Props = {
  className?: string;
  title: string;
  description?: string;
};

export default function EmptyData({ className, title, description }: Props) {
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}

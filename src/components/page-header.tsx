import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

type Props = {
  title: string;
  description: string;
  className?: string;
};

export default function PageHeader({ title, description, className}: Props) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}

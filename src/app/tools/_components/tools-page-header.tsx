type Props = {
  title: string;
  description: string;
};

export default function ToolsPageHeader({ title, description }: Props) {
  return (
    <header className="bg-accent p-4 rounded-xl space-y-6">
      <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
      <p>{description}</p>
    </header>
  );
}

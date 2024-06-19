import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageHeader from "@/components/page-header";
import SolidBackground from "./_components/solidbg";
import GradientGenerator from "./_components/gradientbg";
import GridBg from "@/components/ui/grid-bg";

export default function BackgroundGeneratorPage() {
  return (
    <>
      <PageHeader
        title="CSS Background Generator"
        description="Generate beautiful CSS backgrounds for you projects!"
      />
      <Tabs defaultValue="solid" className="mt-6">
        <TabsList className="h-[7dvh] grid grid-cols-2 items-center md:w-1/2">
          <TabsTrigger value="solid">Solid Background</TabsTrigger>
          <TabsTrigger value="gradient">Gradient Background</TabsTrigger>
        </TabsList>
        <TabsContent value="solid">
          <SolidBackground />
        </TabsContent>
        <TabsContent value="gradient">
          <GradientGenerator />
        </TabsContent>
      </Tabs>
    </>
  );
}

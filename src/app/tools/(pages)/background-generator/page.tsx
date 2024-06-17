import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageHeader from "@/components/page-header";
import SolidBackground from "./_components/solidbg";
import GradientBackground from "./_components/gradientbg";
import GridBg from "@/components/ui/grid-bg";

export default function BackgroundGeneratorPage() {

  return (
    <GridBg>
      <PageHeader
        className="h-[15dvh] p-0"
        title="CSS Background Generator"
        description="Generate beautiful CSS backgrounds for you projects!"
      />

      <Tabs defaultValue="solid" className="h-[70dvh] mt-6">
        <TabsList className="h-[7dvh]">
          <TabsTrigger value="solid">Solid Background</TabsTrigger>
          <TabsTrigger value="gradient">Gradient Background</TabsTrigger>
          <TabsTrigger value="image">Generate From Image</TabsTrigger>
        </TabsList>
        <TabsContent value="solid">
          <SolidBackground />
        </TabsContent>
        <TabsContent value="gradient">
          <GradientBackground />
        </TabsContent>
        <TabsContent value="image">
          Generate from image
        </TabsContent>
      </Tabs>
    </GridBg>
  );
}

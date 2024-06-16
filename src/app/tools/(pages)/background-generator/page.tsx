import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ToolsPageHeader from "../../_components/tools-page-header";
import SolidBackground from "./_components/solidbg";
import GradientBackground from "./_components/gradientbg";
// import { useState } from "react";

export default function BackgroundGeneratorPage() {
  // For gradient
  // const [colorScheme, setColorScheme] = useState({
  //   from: "#abcd29",
  //   via: "#abce60",
  //   to: "#abcd89",
  // });

  return (
    <section className="w-full">
      <ToolsPageHeader
        title="CSS Background Generator"
        description="Generate beautiful CSS backgrounds for you projects!"
      />

      <Tabs defaultValue="solid" className="mt-12">
        <TabsList>
          <TabsTrigger value="solid">Solid Background</TabsTrigger>
          <TabsTrigger value="gradient">Gradient Background</TabsTrigger>
        </TabsList>
        <TabsContent value="solid">
          <SolidBackground />
        </TabsContent>
        <TabsContent value="gradient">
          <GradientBackground />
        </TabsContent>
      </Tabs>
    </section>
  );
}

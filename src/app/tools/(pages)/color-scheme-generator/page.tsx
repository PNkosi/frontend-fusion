import ColorSchemeGenerator from "@/components/color-sheme-generator";
import ImageUploader from "@/components/image-uploader";
import PageHeader from "@/components/page-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

export default function ColorSchemeGeneratorPage() {
  return (
    <>
      <section className="space-y-8">
        <Tabs defaultValue="image-scheme">
          <TabsList>
            <TabsTrigger value="image-scheme">Generate from image</TabsTrigger>
            <TabsTrigger value="color-scheme">Generate from colors</TabsTrigger>
          </TabsList>
          <TabsContent value="image-scheme">
            <PageHeader
              title="Generate Color Scheme From Image"
              description="Generate color schemes from any image. Drag and drop you image to get color codes in the image"
            />
            <ImageUploader />
          </TabsContent>
          <TabsContent value="color-scheme">
          <PageHeader
              title="Generate Color Scheme From Colors"
              description="We recommend that you use more than 1 color. For smoother color shcemes, use colors that 'work' well together"
            />
            <ColorSchemeGenerator />
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
}

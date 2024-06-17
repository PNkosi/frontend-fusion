"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  IconCopy,
  IconHeartFilled,
  IconPalette,
  IconTrash,
} from "@tabler/icons-react";
import Code from "@/components/code";
import { useEffect, useState } from "react";
import { getRandomColor } from "@/lib/utils";
import EmptyData from "@/components/data-empty";
import CopyButton from "@/components/copy-button";

export default function SolidBackground() {
  const [color, setColor] = useState<string>("#abcd29");
  const [storageColors, setStorageColors] = useState<string[]>([]);
  const [showStorageColorsInCode, setShowStorageColorsInCode] =
    useState<boolean>(true);

  let str: string = "";

  /*
    Generates a string consisting of all the colors saved in local storage
    Omits the "\n" character on the first variable 
  */
  storageColors.forEach((color, index) => {
    return (str += `${index == 0 ? "" : "\n"}\t--colorName: ${color};`);
  });

  const code = `/*Generated from FrontendFusion */
${
  showStorageColorsInCode
    ? `:root {
${str}
}`
    : ""
}
.bg-color {
    background-color: ${color};
}
`;

  useEffect(() => {
    const colors = localStorage.getItem("solidColors");
    if (colors) {
      setStorageColors(JSON.parse(colors));
      return;
    }
    localStorage.setItem("solidColors", "[]");
  }, []);

  const toggleFavourite = () => {
    const savedColors = localStorage.getItem("solidColors");
    // Check if we have an colors saved in local storage
    if (savedColors === null) {
      localStorage.setItem("solidColors", "[]");
    }

    const colors = savedColors && JSON.parse(savedColors);

    // Check if we already have the color saved in local storage
    if (colors.includes(color)) return; // Don't save already existing color

    setStorageColors(colors);

    colors.push(color);
    const stringifyColors = JSON.stringify(colors);
    localStorage.setItem("solidColors", stringifyColors);
  };

  const removeColorFromFavourite = (color: string) => {
    const savedColors = localStorage.getItem("solidColors");
    if (savedColors === null) {
      localStorage.setItem("solidColors", "[]");
    }

    const colors = savedColors && JSON.parse(savedColors);
    const filteredColors = colors.filter((col: string) => col !== color);
    setStorageColors(filteredColors);
    localStorage.setItem("solidColors", JSON.stringify(filteredColors));
  };

  return (
    <section className="w-full">
      <div className="grid grid-cols-2 w-full gap-4">
        <Card className="bg-transparent border-none">
          <CardHeader>
            <CardTitle>Solid Background Color</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between bg-card text-card-foreground p-6 rounded-lg border">
              <div className="flex items-center gap-8">
                <IconPalette />
                <p>Choose color</p>
                <div className="relative rounded-full overflow-hidden h-10 w-10 border-2 flex items-center justify-center">
                  <Input
                    className="absolute border-none w-20 h-20 cursor-pointer"
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  />
                </div>
              </div>
              <Button variant="ghost" onClick={toggleFavourite}>
                <IconHeartFilled className="fill-indigo-600" />
              </Button>
              <Button
                onClick={() => {
                  const color = getRandomColor();
                  setColor(color);
                }}
              >
                Random Color
              </Button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p>Your favourite colors</p>
                <div className="flex items-center gap-2">
                  <label htmlFor="showInCss">Include in CSS code?</label>
                  <Input
                    type="checkbox"
                    className="h-5 w-5"
                    id="showInCss"
                    checked={showStorageColorsInCode}
                    onChange={() => {
                      setShowStorageColorsInCode((prev) => !prev);
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {storageColors.length === 0 ? (
                  <EmptyData
                    className="col-span-4 text-center"
                    title="No Favourite Colors"
                    description="Click the ♥️ button to add color to favourites"
                  />
                ) : (
                  storageColors.map((color) => (
                    <div key={color} className="bg-background border space-y-4 p-2 group">
                      <div
                        style={{ backgroundColor: color }}
                        className={"rounded-xl h-10 w-full"}
                      >
                        <Button
                          className="hidden opacity-0 duration-200 group-hover:inline-block group-hover:opacity-100"
                          size={"sm"}
                          onClick={() => {
                            removeColorFromFavourite(color);
                          }}
                        >
                          <IconTrash />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <code>{color}</code>
                        <IconCopy />
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="">
          <Tabs defaultValue="code" className="flex-1">
            <CardHeader>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">CSS Code</TabsTrigger>
              </TabsList>
              <code className="flex items-center justify-between bg-accent p-2 rounded-lg">
                Copy CSS code
                <CopyButton text={code} />
              </code>
            </CardHeader>

            <CardContent className="space-y-2">
              <TabsContent value="preview">
                <div
                  className={`space-y-2 h-40`}
                  style={{
                    backgroundColor: color,
                  }}
                />
              </TabsContent>
              <TabsContent value="code" className="">
                <Code language="css" code={code} />
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>
    </section>
  );
}

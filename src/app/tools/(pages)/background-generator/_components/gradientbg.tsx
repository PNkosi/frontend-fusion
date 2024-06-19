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
  IconPalette,
  IconPlus,
  IconTrash,
} from "@tabler/icons-react";
import Code from "@/components/code";
import { useEffect, useState } from "react";
import { getRandomColor } from "@/lib/utils";
import EmptyData from "@/components/data-empty";
import CopyButton from "@/components/copy-button";
import { gradientDirections } from "@/lib/constants";

export default function GradientGenerator() {
  const [color, setColor] = useState<string>("#abcd29");
  const [storedGradientColors, setStoredGradientColors] = useState<string[]>(
    []
  );
  const [gradientDirection, setGradientDirection] =
    useState<string>("to right");
  const [limitReached, setLimitReached] = useState<boolean>();

  let str: string = "";

  storedGradientColors.forEach((color, index) => {
    return (str += `${index == 0 ? "" : "\n"}\t--colorName: ${color};`);
  });

  const code = `/*Generated from FrontendFusion */
:root {
${str}
}
.gradient-gb {
    background-image: linear-gradient(${gradientDirection},${storedGradientColors.map(
    (color) => color
  )});
}
`;

  useEffect(() => {
    const colors = localStorage.getItem("gradientColors");
    if (colors) {
      setStoredGradientColors(JSON.parse(colors));
      setLimitReached(colors.length === 4);
      return;
    }
    localStorage.setItem("gradientColors", "[]");
  }, []);

  const saveColor = () => {
    const savedColors = localStorage.getItem("gradientColors");
    // Check if we have an colors saved in local storage
    if (savedColors === null) {
      localStorage.setItem("gradientColors", "[]");
    }

    const colors = savedColors && JSON.parse(savedColors);

    // Restrict to 4 colors
    if (colors.length === 4) return;

    // Check if we already have the color saved in local storage
    if (colors.includes(color)) return; // Don't save already existing color

    setStoredGradientColors(colors);

    colors.push(color);
    const stringifyColors = JSON.stringify(colors);
    localStorage.setItem("gradientColors", stringifyColors);
  };

  const deleteColor = (color: string) => {
    const savedColors = localStorage.getItem("gradientColors");
    if (savedColors === null) {
      localStorage.setItem("gradientColors", "[]");
    }

    const colors = savedColors && JSON.parse(savedColors);

    // setLimitReached(colors.length === 4)

    const filteredColors = colors.filter((col: string) => col !== color);
    setStoredGradientColors(filteredColors);
    localStorage.setItem("gradientColors", JSON.stringify(filteredColors));
  };

  return (
    <section>
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="bg-transparent">
          <CardHeader>
            <CardTitle>Gradient Background Generator</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-card text-card-foreground p-6 rounded-lg">
              <div className="flex items-center justify-between">
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
                <Button
                variant={"primary"}
                  onClick={() => {
                    const color = getRandomColor();
                    setColor(color);
                  }}
                >
                  Random Color
                </Button>
              </div>
              <Button
                size={"sm"}
                className={`${
                  limitReached
                    ? "bg-accent pointer-events-none "
                    : "cursor-not-allowed"
                }bg-indigo-500 w-full mt-4`}
                onClick={saveColor}
              >
                {limitReached ? (
                  <>only 4 colors allowed</>
                ) : (
                  <>
                    <IconPlus /> Add Color
                  </>
                )}
              </Button>

              <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-6">
                {gradientDirections.map((dir) => (
                  <Button
                    key={dir.key}
                    variant={"default"}
                    className={`${
                      gradientDirection === dir.value ? "bg-indigo-500" : "bg-transparent"
                    }  text-foreground border hover:bg-indigo-500`}
                    onClick={() => {
                      setGradientDirection(dir.value);
                    }}
                  >
                    {dir.value}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="">
          <Tabs defaultValue="colors">
            <CardHeader>
              <TabsList className="grid grid-cols-3">
                <TabsTrigger value="colors">Colors</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">CSS Code</TabsTrigger>
              </TabsList>
              <code className="flex items-center justify-between bg-accent p-2 rounded-lg">
                Copy CSS code
                <CopyButton text={code} />
              </code>
            </CardHeader>

            <CardContent className="space-y-2">
              <TabsContent value="colors">
                <div className="space-y-4">
                  <p>
                    Your Gradient colors{" "}
                    <span className="text-slate-400">
                      (You can generate up to 4 colors)
                    </span>
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {storedGradientColors.length === 0 ? (
                      <EmptyData
                        className="col-span-4 text-center"
                        title="No Gradient Colors Generated"
                        description="Please generate atleast 2 colors"
                      />
                    ) : (
                      storedGradientColors.map((color) => (
                        <div
                          key={color}
                          className="bg-background border space-y-4 p-2 group"
                        >
                          <div
                        style={{ backgroundColor: color }}
                        className={"rounded-lg h-10 w-full"}
                      >
                        <Button
                          className="hidden opacity-0 duration-200 group-hover:flex items-center justify-items-end h-10 w-full group-hover:opacity-100"
                          size={"sm"}
                          onClick={() => {
                            deleteColor(color);
                          }}
                        >
                          <IconTrash size={15} />
                        </Button>
                      </div>
                          <div className="flex items-center justify-between">
                            <code>{color}</code>
                            <CopyButton text={color}/>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="preview">
                {storedGradientColors.length < 2 ? (
                  <EmptyData title="2 Colors are required to generate gradient" />
                ) : (
                  <div
                    className={`space-y-2 h-40 md:h-72`}
                    style={{
                      backgroundImage: `linear-gradient(${gradientDirection},${storedGradientColors.map(
                        (color) => color
                      )}`,
                    }}
                  />
                )}
              </TabsContent>
              <TabsContent value="code">
                <Code language="css" code={code} />
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>
    </section>
  );
}

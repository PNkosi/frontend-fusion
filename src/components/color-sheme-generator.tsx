"use client";

import { useState } from "react";
import chroma from "chroma-js";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { IconTrash } from "@tabler/icons-react";

export default function ColorSchemeGenerator() {
  const [randomColor, setRandomColor] = useState<string>("#aaccbb");
  const [colors, setColors] = useState<string[]>(["hotpink", "indigo"]);
  const [totalColors, setTotalColots] = useState<number>(6);

  const colorScheme = chroma.scale(colors).mode("rgb").colors(totalColors);
  const Color = chroma.random();

  const generateRandomColor = () => {
    const hexCode = Color.hex();
    setRandomColor(hexCode);
  };

  const addColor = () => {
    if (colors.length === 10) return;

    // Prevents adding the same color twice
    const colorExists = colors.find(color => color === randomColor)
    if (colorExists) return

    setColors((prev) => [...prev, randomColor]);
  };

  /**
   * removeColor removes the color from the list of colors used to generate the color scheme
   * @param rmColor - The color to be removed
   */
  const removeColor = (rmColor: string) => {
    if (colors.length === 1) {
      alert("There must be atleast one color");
      return;
    }
    setColors((prev) => prev.filter((color) => color !== rmColor));
  };

  return (
    <section className="grid md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <div className="grid md:grid-cols-2 gap-2">
            <Button className="col-span-2 md:col-span-1" onClick={generateRandomColor}>Generate random color</Button>
            <div className="grid grid-cols-2 md:col-span-1 gap-2 col-span-2">
              <Button variant={"outline"}>{randomColor}</Button>
              <div
                style={{ backgroundColor: randomColor }}
                className="h-10 w-32 rounded-lg"
              />
            </div>
            <Button className="col-span-2" variant={"primary"} onClick={addColor}>Use Color</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {colors.map((color) => (
              <div
                key={color}
                style={{ backgroundColor: color }}
                className="h-14 w-14 rounded-full border-2 group relative"
              >
                <IconTrash
                  size={30}
                  className="absolute -top-2 -right-2 bg-foreground text-background rounded-full cursor-pointer p-2"
                  onClick={() => removeColor(color)}
                />
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Color Scheme</h3>
            <div>
              <Label htmlFor="numberOfColors">
                <small>How many colors should the color scheme have?</small>
              </Label>
              <Input
                className="w-20"
                type="number"
                id="numberOfColors"
                value={totalColors}
                min={1}
                max={10}
                onChange={(e) => setTotalColots(parseInt(e.target.value))}
              />
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {colorScheme.map((color) => (
                <div
                  style={{ backgroundColor: color }}
                  className="h-20 w-20 rounded-lg border-2"
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Popular Color Schemes</CardTitle>
          <CardDescription>
            We made some dope schemes for you to use
          </CardDescription>
        </CardHeader>
      </Card>
    </section>
  );
}

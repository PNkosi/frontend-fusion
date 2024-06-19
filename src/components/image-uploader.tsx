"use client";

import { ChangeEvent, useState } from "react";
import { IconCode, IconPhotoUp } from "@tabler/icons-react";
import { extractColors } from "extract-colors";

import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { FinalColor } from "extract-colors/lib/types/Color";
import { Button } from "./ui/button";
import EmptyData from "./data-empty";

export default function ImageUploader() {
  const [uploadedImage, setUploadedImage] = useState<
    string | ArrayBuffer | null | undefined
  >();
  const [colorPalette, setColorPalette] = useState<FinalColor[]>();
  const [error, setError] = useState<string | undefined>(undefined);

  const uploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) {
      setError("Failed to upload file. Please try again");
      return;
    }
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
      const img = new Image();

      // Wait for image to load
      img.onload = () => {
        setUploadedImage(event.target?.result);
        setColorPalette(colorPalette);
        extractColors(event.target?.result as string)
          .then((res) => setColorPalette(res))
          .catch((e) => console.log("Error: ", e.message));
      };
      img.src = event.target?.result as string;
    };

    reader.readAsDataURL(file);
  };

  return (
    <section className="grid md:grid-cols-2 gap-4">
      <div className="flex flex-col space-y-4">
        <Input
          type="file"
          id="file"
          accept="png"
          onChange={(e) => uploadImage(e)}
        />
        {uploadedImage ? (
          <Label htmlFor="file">
            <img
              src={uploadedImage as string}
              className="flex flex-col gap-4 items-center justify-center h-80 aspect-auto w-full"
            />
          </Label>
        ) : (
          <>
            <Label
              className="flex flex-col gap-4 items-center justify-center flex-1 border-dashed border-8 border-spacing-60 py-8"
              htmlFor="file"
            >
              <IconPhotoUp className="text-slate-600" size={100} />
              Upload Image
            </Label>
          </>
        )}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Settings <span className="text-sm font-normal text-indigo-500"><small>(Not configured. Comming soon 🙏)</small></span></CardTitle>
          <CardDescription>Tweak these to you liking</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <div>
            <Label>
              How many pixels?{" "}
              <span className="text-slate-400">
                <small>(Total pixels number of the resized picture)</small>
              </span>
            </Label>
            <Input type="number" defaultValue={64000} />
          </div>
          <div>
            <Label>
              Distance{" "}
              <span className="text-slate-400">
                <small>
                  (From 0 to 1 - the color distance not to have near colors)
                </small>
              </span>
            </Label>
            <Input
              type="number"
              defaultValue={0.22}
              step={0.1}
              min={0}
              max={1}
            />
          </div>
          <div>
            <Label>
              Saturation Distance{" "}
              <span className="text-slate-400">
                <small>
                  (From 0 to 1 - Minimum saturation value between two colors
                  otherwise colors are merged)
                </small>
              </span>
            </Label>
            <Input
              type="number"
              defaultValue={0.2}
              step={0.1}
              min={0}
              max={1}
            />
          </div>
          <div>
            <Label>
              Lightness Distance{" "}
              <span className="text-slate-400">
                <small>
                  (From 0 to 1 - Minimum lightness value between two colors
                  otherwise colors are merged)
                </small>
              </span>
            </Label>
            <Input
              type="number"
              defaultValue={0.2}
              step={0.1}
              min={0}
              max={1}
            />
          </div>
          <div>
            <Label>
              Hue Distance{" "}
              <span className="text-slate-400">
                <small>
                  (From 0 to 1 - Minimum hue value between two colors otherwise
                  colors are merged)
                </small>
              </span>
            </Label>
            <Input
              type="number"
              defaultValue={0.083333333}
              step={0.000000001}
              min={0}
              max={1}
            />
          </div>
        </CardContent>
      </Card>
      <Card className="md:col-span-2">
        <CardHeader className="md:grid-cols-2">
          <CardTitle className="flex items-center justify-between gap-4">
            Colors Detected{" "}
            {colorPalette ? (
              <span className=" text-white font-bold bg-indigo-500 h-10 w-10 rounded-lg flex items-center justify-center">
                {colorPalette.length}
              </span>
            ) : null}
          </CardTitle>
          <CardDescription className="col-span-2">
            {colorPalette ? (
              <Button variant={"primary"} className="w-full">
                <IconCode /> View Code
              </Button>
            ) : null}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 w-full">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {!colorPalette ? (
              <EmptyData
                title="Please upload image"
                className="col-span-6 text-center text-slate-600"
              />
            ) : (
              colorPalette?.map((color, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div
                      style={{ backgroundColor: color.hex }}
                      className={`h-10 border-2 rounded-lg1`}
                    />
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    <small className="space-x-4">
                      <span className="p-1 bg-indigo-300/20 rounded-lg">
                        HEX
                      </span>
                      <span>{color.hex.toUpperCase()}</span>
                    </small>
                    <small className="space-x-4">
                      <span className="p-1 bg-indigo-300/20 rounded-lg">
                        RGB
                      </span>
                      <span>
                        {color.red}, {color.green}, {color.blue}
                      </span>
                    </small>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

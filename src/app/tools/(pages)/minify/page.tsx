"use client";

import { ChangeEvent, useState } from "react";
import Code from "@/components/code";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { minifyCode } from "@/actions/code-minify";

export default function CodeMinifyPage() {
  const [uploadedFile, setUploadedFile] = useState<
    string | ArrayBuffer | null | undefined
  >();
  const [error, setError] = useState<string>("");

  const uploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) {
      setError("Failed to upload file. Please try again");
      return;
    }
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = async (event) => {
        
    }
    reader.readAsDataURL(file)
  };

  return (
    <section className="">
      <Card className="flex flex-col">
        <form>
          <CardHeader className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <div>
              <CardTitle>Upload the file containing the code</CardTitle>
              <CardDescription>
                For security reasons, this file is not stored. So feel free,
                your code is safe
              </CardDescription>
            </div>
            <Button
              type="button"
              variant={"primary"}
              onClick={() => minifyCode("")}
            >
              Minify Code
            </Button>
          </CardHeader>
          <CardContent className="flex-1">
            <Label htmlFor="file">Upload source file</Label>
            <Input
              type="file"
              required
              name="file"
              id="file"
              onChange={(e) => uploadFile(e)}
            />
          </CardContent>
        </form>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Minified Code</CardTitle>
        </CardHeader>
        <CardContent className="h-full">
          <Code code={""} language="javascript" />
        </CardContent>
      </Card>
    </section>
  );
}

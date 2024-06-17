"use client";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { useState } from "react";
import { copyToClipboard } from "@/lib/utils";

export default function CopyButton({text}: {text: string}) {
  const [isCopying, setIsCopying] = useState<boolean>(false);

  return (
    <div
      onClick={() => {
        setIsCopying(true);
        setTimeout(() => {
          setIsCopying(false);
        }, 1000);
        copyToClipboard(text);
      }}
    >
      {isCopying ? (
        <IconCheck />
      ) : (
        <IconCopy size={20} className="cursor-pointer" />
      )}
    </div>
  );
}

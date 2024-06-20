"use client";

import React, { useEffect, useState } from "react";
import grapesjs, { Editor } from "grapesjs";
import gjsTyped from "grapesjs-typed";

import gjsImageEditor from "grapesjs-tui-image-editor";
import Navbar from "@/components/navbar";
type Props = {};

const BuilderPage = (props: Props) => {
  const [editor, setEditor] = useState<Editor | null>(null);

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      richTextEditor: {},
      optsCss: {},
      codeManager: {
        optsCodeViewer: {
          backgroundColor: "red",
        },
      },
      assetManager: {},
      pageManager: {
        pages: [
          {
            // without an explicit ID, a random one will be created
            id: 'my-first-page',
            // CSS or a JSON of styles
            styles: '.my-el { color: red }',
            // HTML string or a JSON of components
            component: '<div class="my-el">Hello world!</div>',
          }
       ]
      },
      blockManager: {
        blocks: [
          {
            id: "text",
            label: "Text",
            category: "Custom",
            media: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
    class="tabler-icon tabler-icon-layout ">
    <path d="M4 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
    <path d="M4 13m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
    <path d="M14 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
</svg>`,
            activate: true,
            content: {
              type: "text",
              content: "Insert your text here",
              style: { padding: "10px" },
            },
          },
          {
            id: "button",
            label: "Button",
            category: "Custom",
            media: "<IconText/>",
            activate: true,
            content: {
              type: "button",
              content: "Click Me",
              style: { padding: "10px", display: "inline-block" },
            },
          },
          {
            id: "image",
            label: "Image",
            category: "Custom",
            select: true,
            content: { type: "image" },
            activate: true,
          },
          {
            id: "container",
            label: "Container",
            category: "Custom",
            select: true,
            content: { type: "image" },
            activate: true,
          },
          {
            id: "video",
            label: "Video",
            category: "Custom",
            select: true,
            content: { type: "video" },
            activate: true,
          },
        ],
      },
      plugins: [gjsImageEditor, gjsTyped],
      pluginsOpts: {
        gjsImageEditor: {
          script: [
            // 'https://cdnjs.cloudflare.com/ajax/libs/fabric.js/1.6.7/fabric.min.js',
            "https://uicdn.toast.com/tui.code-snippet/v1.5.2/tui-code-snippet.min.js",
            "https://uicdn.toast.com/tui-color-picker/v2.2.7/tui-color-picker.min.js",
            "https://uicdn.toast.com/tui-image-editor/v3.15.2/tui-image-editor.min.js",
          ],
          style: [
            "https://uicdn.toast.com/tui-color-picker/v2.2.7/tui-color-picker.min.css",
            "https://uicdn.toast.com/tui-image-editor/v3.15.2/tui-image-editor.min.css",
          ],
        },
        gjsTyped: {
          block: {
            category: "Extra",
            content: {
              type: "typed",
              "type-speed": 40,
              strings: ["Text row one", "Text row two", "Text row three"],
            },
          },
        },
      },
    });

    setEditor(editor);
  }, []);

  return (
    <>
      <div id="editor" className="" style={{ height: "90vh" }}></div>
    </>
  );
};

export default BuilderPage;

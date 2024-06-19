type ToolInfo = {
    image: string;
    name: string;
    description: string;
    categories: string[];
    href: string;
}

export const toolsInfo: ToolInfo[] = [
    {
        image: "/bg-tool.png",
        name: "Background Generator",
        description: "Generate beautiful CSS backgrounds for you projects!",
        categories: ['colors'],
        href: "/tools/background-generator"
    },
    {
        image: "/color-palette-tool.png",
        name: "Color Scheme Generator",
        description: "Generate color schemes from any images. Drag and drop you image to get color codes in the image",
        categories: ["colors"],
        href: "/tools/color-scheme-generator"
    },
    {
        image: "/bg-tool.png",
        name: "Color Manipulation",
        description: "Manipulate colors",
        categories: ['colors'],
        href: "/tools/color-manipulation"
    },
    {
        image: "/bg-tool.png",
        name: "Code Minifier",
        description: "Minify your code",
        categories: ["code"],
        href: "/tools/minify"
    }
]
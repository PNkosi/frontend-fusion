import Link from "next/link"
import { toolsInfo } from "../tools-info"

export default function Sidebar() {
    
    return (
        <aside className="flex flex-col gap-8 py-8 h-[90vh] sticky top-0">
            {toolsInfo.map(tool => (
                <Link key={tool.name} href={tool.href}>{tool.name}</Link>
            ))}
        </aside>
    )
}
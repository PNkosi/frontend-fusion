"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { toolsInfo } from "../tools-info"

export default function Sidebar() {
    
    const pathname = usePathname()
    const end = pathname.lastIndexOf('/')
    const route = pathname.slice(end + 1).replaceAll("-", " ")
    
    const [activeLink, setActiveLink] = useState<string>(route)


    
    return (
        <aside className={`container w-64 hidden md:flex flex-col gap-8 py-8 h-[90vh] sticky top-[10vh] border-r-4`}>
            {toolsInfo.map(tool => (
                <Link key={tool.name} className={`${activeLink === tool.name.toLowerCase() ? "text-indigo-500" : ""} text-sm`} href={tool.href} onClick={() => {
                    setActiveLink(tool.name.toLowerCase())
                }}>{tool.name}</Link>
            ))}
        </aside>
    )
}
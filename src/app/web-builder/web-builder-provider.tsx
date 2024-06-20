"use client"
import EmptyData from "@/components/data-empty"
import { IconDeviceMobileCancel } from "@tabler/icons-react"
import { createContext, useEffect, useState } from "react"

const WebBuilderContext = createContext({})



export const WebBuilderProvider = ({ children }: { children: React.ReactNode }) => {
    const [OSPlatform, setOSPlatform] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getOS = async () => {
            setLoading(true)
            const res = await fetch('/api/web-builder')
            const data = await res.json()
            setOSPlatform(data.platform)
            setLoading(false)
        }
        getOS()
    }, [])

    // Don't show Web builder when the user is on a mobile device
    if (OSPlatform !== 'win32') {
        return null
    }

    return (
        <WebBuilderContext.Provider value={OSPlatform}>
           {children}
        </WebBuilderContext.Provider>
    )
}
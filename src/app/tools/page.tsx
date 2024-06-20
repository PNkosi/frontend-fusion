import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toolsInfo } from "./tools-info";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ToolsPage() {
    return (
        <div className="grid md:grid-cols-2 gap-4">
            {toolsInfo.map(data => (
                <Card key={data.name}>
                    <CardHeader>
                        <Image className="w-full h-56" src={data.image} alt={data.name} width={100} height={224} priority/>
                        <CardTitle>{data.name}</CardTitle>
                        <CardDescription>{data.description}</CardDescription>
                    </CardHeader>
                    <CardContent>{data.description}</CardContent>
                    <CardFooter>
                        <Link href={data.href}>
                            <Button>Use Tool</Button>
                        </Link>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { IconArrowRight } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"

const PopularPosts = () => {
    return (
        <div className="grid md:grid-cols-3 gap-16 md:gap-0">
            {[1, 2, 3].map(item => (
                <Card key={item} className="md:flex border-none">
                    <CardHeader className="gap-2 md:gap-8 md:flex-row">
                        <Image
                            className='w-full md:w-20 md:h-20 rounded-lg shadow-2xl shadow-indigo-900/50'
                            src={"/demo-img.png"}
                            alt={"Popular blog post image"}
                            width={100}
                            height={100}
                        />
                        <div className="space-y-2">
                            <CardTitle>Learn React</CardTitle>
                            <CardDescription>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, rerum.</CardDescription>
                            <Link className="hidden md:flex items-center text-indigo-500" href={"#"}>
                                Read More <IconArrowRight />
                            </Link>
                        </div>
                    </CardHeader>
                    <CardContent className="md:hidden">
                        <Link href={"#"}>
                            <Button variant={"primary"}>Read More <IconArrowRight /></Button>
                        </Link>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default PopularPosts
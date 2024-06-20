import { Button } from '@/components/ui/button'
import { IconFilePlus, IconLayout2, IconPalette, IconPhoto, IconVideo } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Sidebar = (props: Props) => {
    return (
        <aside className='flex flex-col items-center h-screen w-[5vw] border-r'>
            <div className='h-[10vh] border-b flex items-center justify-center'>
                <Link className='bg-indigo-500 text-slate-100 p-2 rounded-xl w-full' href={"/"}>
                    <Image src={"/logo.svg"} alt='logo' width={20} height={20} />
                </Link>
            </div>

            <div className='flex flex-col gap-4 py-4'>
                <Button className='hover:btn-shadow' variant={"ghost"} size={"icon"}>
                    <IconLayout2 />
                </Button>
                <Button className='hover:btn-shadow' variant={"ghost"} size={"icon"}>
                    <IconPalette />
                </Button>
                <Button className='hover:btn-shadow' variant={"ghost"} size={"icon"}>
                    <IconPhoto />
                </Button>
                <Button className='hover:btn-shadow' variant={"ghost"} size={"icon"}>
                    <IconVideo />
                </Button>

            </div>
        </aside>
    )
}

export default Sidebar
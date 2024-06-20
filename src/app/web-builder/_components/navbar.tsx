import ThemeToggler from '@/components/theme-toggler'
import { Button } from '@/components/ui/button'
import { IconArrowBackUp, IconArrowForwardUp, IconCloudCode, IconCode, IconDeviceDesktop, IconDeviceFloppy, IconDeviceMobile, IconDeviceTablet, IconEye, IconSettings } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const WebBuilderNavbar = (props: Props) => {
    return (
        <div className='h-[10vh] flex items-center justify-between border w-[75vw] px-4'>
            <div>
                <Button className='hover:btn-shadow' variant="ghost" size={"sm"}>
                    <IconDeviceFloppy />
                </Button>
                <Button className='hover:btn-shadow' variant={"ghost"} size={"sm"}>
                    <IconArrowBackUp />
                </Button>
                <Button className='hover:btn-shadow' variant={"ghost"} size={"sm"}>
                    <IconArrowForwardUp />
                </Button>
            </div>

            <Divider />

            <div className='space-x-4'>
                <Button className='hover:btn-shadow text-indigo-500' size={"sm"} variant={"ghost"}>
                    <IconDeviceDesktop />
                </Button>
                <Button className='hover:btn-shadow' size={"sm"} variant={"ghost"}>
                    <IconDeviceTablet />
                </Button>
                <Button className='hover:btn-shadow' size={"sm"} variant={"ghost"}>
                    <IconDeviceMobile />
                </Button>
            </div>

            <Divider />

            <div className='space-x-4'>
                <Button className='hover:btn-shadow' size={"sm"} variant={"ghost"}>
                    <IconEye />
                </Button>
                <Button className='hover:btn-shadow' size={"sm"} variant={"ghost"}>
                    <IconCode />
                </Button>
            </div>

            <Divider />

            <div>
                <div className='flex gap-4 items-center'>
                    <Button className='hover:btn-shadow' size={"sm"} variant={"ghost"}>
                        <IconSettings />
                    </Button>
                    <ThemeToggler />
                </div>
            </div>

        </div>
    )
}

const Divider = () => (
    <div className='h-10 w-[1px] bg-indigo-500/20 dark:bg-accent' />
)

export default WebBuilderNavbar
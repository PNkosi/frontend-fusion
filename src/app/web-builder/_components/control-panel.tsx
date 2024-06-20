"use client"

import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
import React from 'react'

type Props = {}

const ControlPanel = (props: Props) => {
    return (
        <div className='h-screen w-[20vw] border-l'>
            <div className='px-6 h-[10vh] flex items-center justify-end border-b gap-4'>
                <Image className='rounded-full h-10 w-10 hover:btn-shadow' src={"/demo-pp.png"} alt='user avatar' width={50} height={50} />
                <Button className='hover:btn-shadow' size={"sm"} variant="primary">Publish</Button>
            </div>
            <div className='h-[90vh] px-6'>
                <Tabs defaultValue='styles'>
                    <TabsList className='bg-transparent'>
                        <TabsTrigger className='data-[state=active]:text-indigo-500 data-[state=active]:border-b border-indigo-500 rounded-none data-[state=active]:shadow-none' value='styles'>Styles</TabsTrigger>
                        <TabsTrigger className='data-[state=active]:text-indigo-500 data-[state=active]:border-b border-indigo-500 rounded-none data-[state=active]:shadow-none' value='settings'>Settings</TabsTrigger>
                    </TabsList>
                    <TabsContent value='styles'>
                        <h5 className="">Spacing</h5>


                        <div className='peer w-full h-36 bg-slate-900/50 dark:bg-slate-900 flex items-center justify-center'>
                            <div className='peer-hover:bg-transparent  flex items-center justify-center w-[70%] h-20 bg-slate-800/50 dark:bg-slate-800'>
                                <div className='w-[60%] h-8 bg-slate-700/50 dark:bg-slate-700 p-2'>
                                </div>
                            </div>
                        </div>


                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

export default ControlPanel
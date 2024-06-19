import Image from 'next/image'
import React from 'react'
import BlogAuthor from './blog-author'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { IconCalendar } from '@tabler/icons-react'

type Props = {}

const HotTopic = (props: Props) => {
    return (
        <header className='container py-16 flex flex-col md:flex-row gap-12'>
            <Image
                className='w-full md:w-1/2 rounded-lg shadow-2xl shadow-indigo-900/40'
                src={"/demo-img.png"}
                alt={"Popular blog post image"}
                width={300}
                height={300}
            />
            <article className='space-y-8'>
                <div className='flex items-center gap-2'>
                    <div className='w-3 h-3 bg-indigo-500 rounded-full' />
                    <span className='text-slate-400'>Hot Topic</span>
                </div>
                <h1 className='text-4xl font-bold'>
                    Developers Like Travelling
                </h1>

                <p className='text-slate-600 dark:text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat doloremque at beatae quos.</p>
                <p className='text-slate-400 flex items-center gap-2'><IconCalendar size={20} />19 June 2024</p>

                <Link href={"#"} className='inline-block'>
                    <Button className='bt-shadown' size="lg" variant={"primary"}>Read More</Button>
                </Link>

                <BlogAuthor
                    className=""
                    image='/demo-pp.png'
                    name='Perfect Nkosi'
                    jobTitle='Web Developer'
                    date={"19, June 2024"}
                    socials={{
                        facebook: "www.facebook.com",
                        instagram: "www.facebook.com",
                        twitter: "www.facebook.com",
                    }}
                />
            </article>
        </header>
    )
}

export default HotTopic
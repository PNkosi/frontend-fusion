import { cn } from '@/lib/utils';
import { IconBrandFacebook, IconBrandInstagram, IconBrandX, IconCalendar } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = {
    className: string;
    image: string;
    name: string;
    jobTitle: string;
    date?: string;
    socials:
    {
        facebook: string;
        twitter: string;
        instagram: string;
    }

}

const BlogAuthor = ({ className, name, jobTitle, image, date, socials }: Props) => {
    return (
        <div className={cn("flex flex-col md:flex-row md:items-center items-start  gap-4 md:gap-8", className)}>
            <div className='flex items-center gap-4'>
                <Image src={image} alt={name} width={50} height={50} className='rounded-lg h-10 w-10 border-2 border-indigo-500' />
                <div>
                    <h4 className="text-base font-semibold text-slate-700 dark:text-slate-200">{name}</h4>
                    <small className='text-indigo-500 dark:text-indigo-200'>{jobTitle}</small>
                </div>
            </div>
            <div className='hidden md:block w-[1px] h-8 bg-indigo-500' />
            <div className='flex items-center gap-4'>
                <Link href={socials.facebook}>
                    <IconBrandFacebook className='text-indigo-300' size={20} />
                </Link>
                <Link href={socials.instagram}>
                    <IconBrandInstagram className='text-indigo-300' size={20} />
                </Link>
                <Link href={socials.twitter}>
                    <IconBrandX className='text-indigo-300' size={20} />
                </Link>
            </div>
        </div>
    )
}

export default BlogAuthor
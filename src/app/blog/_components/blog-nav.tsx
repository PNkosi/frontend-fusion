import React from 'react'
import { blogNavLinks } from '../utils'
import Link from 'next/link'
import Search from '@/components/search'
import { Input } from '@/components/ui/input'

type Props = {}

const BlogNav = (props: Props) => {
  return (
    <nav aria-label='blog navigation' className='container sticky top-[10vh] flex items-center gap-4 overflow-x-scroll w-full custom-scrollbar border-t bg-accent'>
        {blogNavLinks.map(link => (
            <Link key={link.title} className="nav-link hover:text-indigo-500 transition-colors" href={link.href}>{link.title}</Link>
        ))}
    </nav>
  )
}

export default BlogNav
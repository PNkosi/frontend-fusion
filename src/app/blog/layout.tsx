import React from 'react'
import { Metadata } from 'next'
import BlogNav from './_components/blog-nav'

type Props = {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: "FrontendFusion - Blog",
    description: "Stay up to date with the lastest trends in tech, programming, and software"
}




const BlogLayout = ({children}: Props) => {
  return (
    <div>
        <BlogNav />
        {children}
    </div>
  )
}

export default BlogLayout
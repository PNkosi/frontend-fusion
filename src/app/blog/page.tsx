import React from 'react'
import HotTopic from './_components/hot-topic'
import PopularPosts from './_components/popular-posts'

type Props = {}

const BlogPage = (props: Props) => {
  return (
    <main>
        <HotTopic />
        <PopularPosts />
    </main>
  )
}

export default BlogPage
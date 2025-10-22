import React from 'react'
import BlogCarousel from '@/Components/Blog/BlogCarousel'
import BlogCard from '@/Components/Blog/BlogCard';
import ConnectSection from '@/Components/Connect/Connect';
import { allBlogPosts } from '@/blogData';

const carouselPosts = allBlogPosts.slice(0, 2);
const gridPosts = allBlogPosts.slice(2);



function BlogPage() {
  return (
    <>
    <BlogCarousel posts={carouselPosts}/>
    <BlogCard content={gridPosts} />
    <ConnectSection sectionId='blog-connect'/>

    </>
  )
}

export default BlogPage

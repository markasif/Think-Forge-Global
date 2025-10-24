import React, { useEffect, useState } from "react";
import BlogCarousel from "@/Components/Blog/BlogCarousel";
import BlogCard from "@/Components/Blog/BlogCard";
import ConnectSection from "@/Components/Connect/Connect";
import { fetchAllBlogs } from "@/utils/blogService";
import Loader from "@/Components/Loader/Loader";


function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBlogs() {
      try {
        const data = await fetchAllBlogs();
        console.log("asduhasdui",data)
        setPosts(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    }
    loadBlogs();
  }, []);


  if (loading) {
    <Loader />
  }

  const carouselPosts = posts.slice(0, 3);
  const gridPosts = posts
  return (
    <>
      <BlogCarousel posts={carouselPosts} />
      <BlogCard content={gridPosts} />
      <ConnectSection  variant="default" />
    </>
  );
}

export default BlogPage;

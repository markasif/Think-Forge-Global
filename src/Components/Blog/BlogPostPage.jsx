import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { allBlogPosts } from '@/blogData';
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from 'lucide-react';

export default function BlogPostPage() {

  const { slug } = useParams();
  

  const post = allBlogPosts.find((p) => p.slug === slug);

 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);


  if (!post) {
    return (
      <div className="bg-white text-black min-h-screen pt-40 text-center">
        <h1 className="text-4xl font-bold">Post not found</h1>
        <p className="mt-4">
          <Link to="/blog" className="text-blue-600 hover:underline">
            Back to Blog
          </Link>
        </p>
      </div>
    );
  }


  return (
    <div>
  
      <div className="bg-black text-white pt-40 pb-20">
        <div className="max-w-4xl mx-auto px-6">
            <Link 
            to="/blog" 
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {post.title}
          </h1>
          
          <div className="flex gap-2 my-8">
            {post.categories.map((category, index) => (
              <Badge key={index} variant="secondary" className="bg-gray-700 text-white border-none">
                {category}
              </Badge>
            ))}
          </div>

          <div className="w-full aspect-video rounded-lg overflow-hidden mt-12">
            <img 
              src={post.detailImageUrl} 
              alt={post.title} 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>

 
      <div className="bg-white text-black py-20">
  
        <div 
          className="prose prose-lg lg:prose-xl max-w-3xl mx-auto px-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}

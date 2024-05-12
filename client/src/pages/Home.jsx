import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts,setPosts] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
   const fetchPosts = async() => {
    const res = await fetch(`${backendUrl}/api/post/getposts`,{
      credentials: "include",
    });
    const data = await res.json();
    setPosts(data.posts);
   }
   fetchPosts();
  },[])
  return (
    <div>
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold lg:text-5xl">Welcome to Echo Ideas</h1>
        <p className="text-gray-500 text-xs sm:text-sm">Here you&apos;ll find a variety of articles and tutorials on various topics. You will also be informed about the latest trends happening in the industry of your interest. </p>
      <Link to='/search' className="text-xs sm:text-sm text-teal-500 font-bold hover:underline">View all posts</Link>
      </div>
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {
          posts && posts.length > 0 && (
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
              <div className="flex flex-wrap gap-4 mx-auto">
                {posts.map((post) => (
                  <PostCard key={post._id} post={post}/>  
                ))}
              </div>
              <Link to={'/search'} className="text-lg text-teal-500 hover:underline text-center">
                View all posts
              </Link>
            </div>
          )
        }
      </div>
      <div className="p-3 bg-amber-100 dark:bg-slate-700">
       <CallToAction />
      </div>
    </div>

  )
}


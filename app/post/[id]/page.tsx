"use client"

import { useEffect,  useState } from "react";

const Post = ({params}) => {
    const id = params.id;

    const [post, setPost] = useState(null)

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_API_URL+'/post/'+id)
        .then(res => res.json())
        .then(res => setPost(res))
    }, [])

  return (
    <>
    {post && <main className="container mx-auto ">
        <h2 className="text-4xl font-bold mb-4">{post.title}</h2>
        <p className="text-gray-500 ">{post.created_at_formatted}</p>
        <img width={300} height={200} src={post.image} alt="" />
        <p>{post.description}</p>
    </main>
    }
    </>
  )
};

export default Post;

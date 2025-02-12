import { useEffect, useState } from "react";


interface Params {
  blogid: string;
}

const BlogId = ({ params }: { params: Params }) => {
  const { blogid } = params; // Accessing the dynamic route parameter
  return (
  
    <>
      <div>This is blog with id: {blogid}</div>
    </>
  )
}
export default BlogId
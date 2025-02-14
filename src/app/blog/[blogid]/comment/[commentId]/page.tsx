"use client"; // This marks the component as a client component

import { useSearchParams } from "next/navigation";
import { use } from "react";

interface Params {
  blogid: string;
  commentId: string;
}

const CommentId = ({ params }: { params: Promise<Params> }) => {
  const searchParams = useSearchParams();
  const { blogid, commentId } = use(params); // Unwrapping the params promise
  const page = searchParams.get("page") || "1";
  const limit = useSearchParams().get("limit") || "10"
  
  // Accessing query parameters
 
  return (
    <div>
      <div>This is Blog with id: { blogid }</div>
      <div>This is Comment with id: { commentId }</div>
      <div>this page have : { page } , and limit with: { limit }</div>
    </div>
  );
};

export default CommentId;
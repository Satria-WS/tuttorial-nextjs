
const PostDetail = async ({ params }: { params: { postid: string } }) => {
  console.log("hello world");
  const awaitedParams = await params;
  console.log(awaitedParams);
  return (
    <>
      <div className="text-red-500">Postx{awaitedParams.postid}</div>
      <div>Postx{awaitedParams.postid[0]}</div>
    </>
  );
};
export default PostDetail;

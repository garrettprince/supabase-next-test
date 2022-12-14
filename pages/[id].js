import supabase from "../utils/supabase";

export async function getServerSideProps({ params }) {
  const { data: post, error } = await supabase.from("posts").select("*").eq('id', params.id).single()

  if (error) {
    throw new Error(error);
  }

  return {
    props: {
        post,
    }
  }
}

export default function PostPage({ post }) {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    )
}

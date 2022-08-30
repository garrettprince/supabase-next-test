import Post from '../components/Post'
import supabase from '../utils/supabase'

export async function getStaticProps() {

  const { data: posts, error } = await supabase.from('posts').select('*')

  if (error) {
    throw new Error(error)
  }

  return {
    props: {
      posts,
    }
  }
}

export default function Home({ posts }) {
  return (
    <div>
      <h1>Hello test</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
      <h2>{posts.title}</h2>
    </div>
  )
}

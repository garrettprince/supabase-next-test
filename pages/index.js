
import Post from '../components/Post'

export function getStaticProps() {
  return {
    props: {
      posts: []
    }
  }
}

export default function Home({ posts }) {
  return (
    <div>
      <h1>Hello test</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  )
}

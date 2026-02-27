import { HomeHero } from '@/components/HomeHero'
import { PostList } from '@/components/PostList'
import { getPosts } from '@/lib/data'

export default async function HomePage() {
  const posts = await getPosts()

  return (
    <div>
      <HomeHero />
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Latest Articles</h2>
        <PostList posts={posts} />
      </div>
    </div>
  )
}

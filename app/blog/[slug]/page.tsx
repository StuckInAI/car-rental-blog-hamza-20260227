import { notFound } from 'next/navigation'
import { getPostBySlug, getRelatedPosts } from '@/lib/data'
import { format } from 'date-fns'
import { Calendar, User, Tag } from 'lucide-react'
import Link from 'next/link'
import { PostList } from '@/components/PostList'

type Params = Promise<{ slug: string }>

export default async function BlogPostPage(props: { params: Params }) {
  const params = await props.params
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    notFound()
  }
  
  const relatedPosts = await getRelatedPosts(post.id, post.categories.map(c => c.id))

  return (
    <article className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            {format(new Date(post.createdAt), 'MMMM dd, yyyy')}
          </div>
          <div className="flex items-center">
            <User className="w-4 h-4 mr-2" />
            {post.author.name}
          </div>
          <div className="flex items-center">
            <Tag className="w-4 h-4 mr-2" />
            {post.categories.map(category => (
              <span key={category.id} className="mr-2 px-2 py-1 bg-gray-100 rounded">
                {category.name}
              </span>
            ))}
          </div>
        </div>
        <img 
          src={post.imageUrl || '/placeholder.jpg'} 
          alt={post.title}
          className="w-full h-96 object-cover rounded-lg mb-6"
        />
      </div>
      
      <div className="prose prose-lg max-w-none mb-12">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
      
      {relatedPosts.length > 0 && (
        <div className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <PostList posts={relatedPosts.slice(0, 3)} />
        </div>
      )}
      
      <div className="mt-8 text-center">
        <Link href="/" className="btn-primary inline-block">
          Back to Home
        </Link>
      </div>
    </article>
  )
}

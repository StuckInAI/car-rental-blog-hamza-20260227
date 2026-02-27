import { Post } from '@/types'
import Link from 'next/link'
import { format } from 'date-fns'
import { Calendar, User } from 'lucide-react'

type PostListProps = {
  posts: Post[]
}

export function PostList({ posts }: PostListProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Link 
          key={post.id} 
          href={`/blog/${post.slug}`}
          className="card hover:shadow-lg transition-shadow"
        >
          <img 
            src={post.imageUrl || '/placeholder.jpg'} 
            alt={post.title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <Calendar className="w-4 h-4 mr-1" />
            {format(new Date(post.createdAt), 'MMM dd, yyyy')}
            <span className="mx-2">•</span>
            <User className="w-4 h-4 mr-1" />
            {post.author.name}
          </div>
          <h3 className="text-xl font-bold mb-2">{post.title}</h3>
          <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.categories.map(category => (
              <span 
                key={category.id} 
                className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded"
              >
                {category.name}
              </span>
            ))}
          </div>
        </Link>
      ))}
    </div>
  )
}

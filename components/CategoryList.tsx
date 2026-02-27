import { Category } from '@/types'
import Link from 'next/link'

type CategoryListProps = {
  categories: Category[]
}

export function CategoryList({ categories }: CategoryListProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {categories.map((category) => (
        <div key={category.id} className="card hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
          <p className="text-gray-600 mb-4">{category.description}</p>
          <div className="space-y-4">
            {category.posts?.slice(0, 3).map(post => (
              <Link 
                key={post.id} 
                href={`/blog/${post.slug}`}
                className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-medium">{post.title}</h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-1">{post.excerpt}</p>
              </Link>
            ))}
          </div>
          {category.posts && category.posts.length > 3 && (
            <div className="mt-4 text-center">
              <Link 
                href={`/categories?filter=${category.slug}`}
                className="text-primary hover:text-secondary font-medium"
              >
                View all {category.posts.length} articles →
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

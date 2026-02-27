import { CategoryList } from '@/components/CategoryList'
import { getCategoriesWithPosts } from '@/lib/data'

export default async function CategoriesPage() {
  const categories = await getCategoriesWithPosts()

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Categories</h1>
      <p className="text-gray-600 mb-8">
        Explore our blog posts by category. Our focus is on Food & Drink travel experiences with car rentals.
      </p>
      <CategoryList categories={categories} />
    </div>
  )
}

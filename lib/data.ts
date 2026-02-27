import { AppDataSource, initializeDatabase } from './db'
import { Post } from '@/entities/Post'
import { Category } from '@/entities/Category'
import { In } from 'typeorm'

// Initialize database on module load
initializeDatabase().catch(console.error)

export async function getPosts() {
  await initializeDatabase()
  const postRepository = AppDataSource.getRepository(Post)
  
  return await postRepository.find({
    relations: ['author', 'categories'],
    order: { createdAt: 'DESC' },
    take: 6,
  })
}

export async function getPostBySlug(slug: string) {
  await initializeDatabase()
  const postRepository = AppDataSource.getRepository(Post)
  
  return await postRepository.findOne({
    where: { slug },
    relations: ['author', 'categories'],
  })
}

export async function getRelatedPosts(postId: number, categoryIds: number[]) {
  await initializeDatabase()
  const postRepository = AppDataSource.getRepository(Post)
  
  return await postRepository.find({
    where: {
      id: Not(postId),
      categories: { id: In(categoryIds) },
    },
    relations: ['author', 'categories'],
    take: 3,
  })
}

export async function getCategoriesWithPosts() {
  await initializeDatabase()
  const categoryRepository = AppDataSource.getRepository(Category)
  
  return await categoryRepository.find({
    relations: ['posts', 'posts.author'],
    order: { name: 'ASC' },
  })
}

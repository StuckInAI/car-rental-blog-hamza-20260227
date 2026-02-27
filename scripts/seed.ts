import 'reflect-metadata'
import { AppDataSource } from '@/lib/db'
import { Post } from '@/entities/Post'
import { Category } from '@/entities/Category'
import { User } from '@/entities/User'

async function seed() {
  try {
    await AppDataSource.initialize()
    console.log('Database connected, seeding...')
    
    const categoryRepository = AppDataSource.getRepository(Category)
    const userRepository = AppDataSource.getRepository(User)
    const postRepository = AppDataSource.getRepository(Post)
    
    // Clear existing data
    await postRepository.clear()
    await categoryRepository.clear()
    await userRepository.clear()
    
    // Create categories
    const categories = await categoryRepository.save([
      { name: 'Food & Drink', slug: 'food-drink', description: 'Culinary adventures and dining experiences accessible by rental car' },
      { name: 'Travel Tips', slug: 'travel-tips', description: 'Practical advice for car rental travel' },
      { name: 'Car Reviews', slug: 'car-reviews', description: 'Reviews of rental cars for food tourism' },
      { name: 'Destination Guides', slug: 'destination-guides', description: 'Food-focused travel destinations' },
    ])
    
    // Create users (authors)
    const users = await userRepository.save([
      { name: 'Alex Johnson', email: 'alex@example.com', bio: 'Food travel enthusiast and car rental expert' },
      { name: 'Maria Chen', email: 'maria@example.com', bio: 'Culinary travel writer focused on road trips' },
    ])
    
    // Create posts
    const posts = [
      {
        title: 'Wine Tasting Road Trip in Napa Valley',
        slug: 'wine-tasting-napa-valley',
        excerpt: 'Discover the best wineries in Napa Valley accessible by rental car',
        content: '<p>Napa Valley offers breathtaking scenery and world-class wines...</p>',
        imageUrl: 'https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?w=800',
        author: users[0],
        categories: [categories[0], categories[3]],
      },
      {
        title: 'Top 10 Food Trucks in Austin Accessible by Car',
        slug: 'food-trucks-austin',
        excerpt: 'A guide to Austin\'s best food trucks with parking tips',
        content: '<p>Austin is famous for its vibrant food truck scene...</p>',
        imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w-800',
        author: users[1],
        categories: [categories[0], categories[1]],
      },
      {
        title: 'Why SUVs Are Perfect for Food Shopping Trips',
        slug: 'suvs-food-shopping',
        excerpt: 'How SUV rentals enhance your culinary shopping experience',
        content: '<p>When planning a food-focused road trip...</p>',
        imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w-800',
        author: users[0],
        categories: [categories[2], categories[0]],
      },
    ]
    
    for (const postData of posts) {
      const post = new Post()
      Object.assign(post, postData)
      post.createdAt = new Date()
      post.updatedAt = new Date()
      await postRepository.save(post)
    }
    
    console.log('Seeding completed successfully!')
    await AppDataSource.destroy()
  } catch (error) {
    console.error('Seeding error:', error)
  }
}

seed()

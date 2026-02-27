import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Post } from '@/entities/Post'
import { Category } from '@/entities/Category'
import { User } from '@/entities/User'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: process.env.DATABASE_URL || './database.sqlite',
  synchronize: process.env.NODE_ENV !== 'production',
  logging: false,
  entities: [Post, Category, User],
  migrations: ['migrations/*.ts'],
  subscribers: [],
})

// Initialize database connection
export async function initializeDatabase() {
  try {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize()
      console.log('Database connection initialized')
    }
    return AppDataSource
  } catch (error) {
    console.error('Error initializing database:', error)
    throw error
  }
}

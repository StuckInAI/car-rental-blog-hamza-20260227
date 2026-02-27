export interface Post {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  imageUrl: string
  createdAt: string
  updatedAt: string
  author: User
  categories: Category[]
}

export interface Category {
  id: number
  name: string
  slug: string
  description: string
  posts?: Post[]
}

export interface User {
  id: number
  name: string
  email: string
  avatarUrl: string
  bio: string
}

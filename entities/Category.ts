import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm'
import { Post } from './Post'

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  name: string

  @Column({ unique: true })
  slug: string

  @Column('text')
  description: string

  @ManyToMany(() => Post, (post) => post.categories)
  posts: Post[]
}

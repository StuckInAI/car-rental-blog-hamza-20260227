import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, JoinTable, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { Category } from './Category'
import { User } from './User'

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column({ unique: true })
  slug: string

  @Column('text')
  excerpt: string

  @Column('text')
  content: string

  @Column({ nullable: true })
  imageUrl: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @ManyToOne(() => User, (user) => user.posts)
  author: User

  @ManyToMany(() => Category, (category) => category.posts)
  @JoinTable()
  categories: Category[]
}

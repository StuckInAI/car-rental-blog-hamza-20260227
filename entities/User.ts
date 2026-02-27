import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Post } from './Post'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({ unique: true })
  email: string

  @Column({ nullable: true })
  avatarUrl: string

  @Column('text', { nullable: true })
  bio: string

  @OneToMany(() => Post, (post) => post.author)
  posts: Post[]
}

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PrismaService } from '../../shared/services/prisma.service'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PostsService {
  constructor(private readonly prismaService: PrismaService) {}
  getPosts() {
    return this.prismaService.post.findMany()
  }

  createPost(body: any) {
    const userId = 1
    return this.prismaService.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId,
      },
    })
  }

  getPost(id: string) {
    return `This is the posts path with id: ${id}`
  }

  updatePost(id: string, body: any) {
    return `This is the update path with id: ${id} and body: ${JSON.stringify(body)}`
  }

  deletePost(id: string) {
    return `This is the delete path with id: ${id}`
  }
}

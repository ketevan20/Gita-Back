import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './schema/post.schema';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<any>, private userService: UsersService) { }

  async create(userId, createPostDto: CreatePostDto) {
    const newPost = await this.postModel.create({ ...createPostDto, user: userId })
    await this.userService.addPost(userId, newPost._id)
    return newPost
  }

  findAll() {
    return this.postModel.find().populate("user");
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}

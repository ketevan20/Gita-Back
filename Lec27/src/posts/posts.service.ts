import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './schema/post.schema';
import { isValidObjectId, Model } from 'mongoose';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postsModel: Model<any>) { }

  async create(userId: string, createPostDto: CreatePostDto) {
    const createUser = await this.postsModel.create({ ...createPostDto, user: userId })
    return createUser
  }

  async findAll() {
    return this.postsModel.find();
  }

  async findOne(id: string) {
    if (!isValidObjectId(id)) throw new BadRequestException()
    const findPostById = await this.postsModel.findById(id)
    if (!findPostById) throw new BadRequestException()
    return findPostById;
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    if (!isValidObjectId(id)) throw new BadRequestException()
    const updatePostById = await this.postsModel.findByIdAndUpdate(id, updatePostDto, { new: true })
    if (!updatePostById) throw new BadRequestException()
    return updatePostById;
  }

  async remove(id: string) {
    if (!isValidObjectId(id)) throw new BadRequestException()
    const removeById = await this.postsModel.findByIdAndDelete(id)
    if (!removeById) throw new BadRequestException()
    return removeById;
  }
}

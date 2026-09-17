import { Injectable, OnModuleInit  } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './schema/post.schema';
import { UsersService } from 'src/users/users.service';

import { faker } from '@faker-js/faker';


@Injectable()
export class PostsService implements OnModuleInit {
  constructor(@InjectModel(Post.name) private postModel: Model<any>, private userService: UsersService) { }

  async onModuleInit() {
    const postsCount = await this.postModel.countDocuments();
    if (postsCount > 0) {
      console.log('Posts already exist. Skipping seeding.');
      return;
    }

    const users = await this.userService.findAll();

    if (!users.length) {
      console.log('No users found. Cannot seed posts.');
      return;
    }

    const posts = Array.from({ length: 10000 }, (_, index) => ({
      title: faker.lorem.sentence().slice(0, 150),
      content: faker.lorem.paragraph().slice(0, 150),
      user: users[index % users.length]._id,
    }));

    await this.postModel.insertMany(posts);

    console.log('Successfully seeded 10000 posts.');
  }
  
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

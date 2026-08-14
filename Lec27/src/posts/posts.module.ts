import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, postsScehma } from './schema/post.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Post.name,schema:postsScehma}])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
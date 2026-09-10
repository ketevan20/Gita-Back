import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { isValidObjectId, Model } from 'mongoose';
import * as bcrypt from "bcrypt"

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.userModel.findOne({ email: createUserDto.email })
    if (existingUser) throw new BadRequestException()
    const newUser = await this.userModel.create(createUserDto)
    return newUser;
  }

  findAll() {
    return this.userModel.find();
  }

  async findOne(id: string) {
    if (!isValidObjectId(id)) throw new BadRequestException("invalid mongo id")
    const user = await this.userModel.findById(id)
    if (!user) throw new NotFoundException("User not found")
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if (!isValidObjectId(id)) throw new BadRequestException("invalid mongo id")
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10)
    }
    const user = await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true })
    if (!user) throw new NotFoundException("User not found")
    return user;
  }

  async remove(id: string) {
    if (!isValidObjectId(id)) throw new BadRequestException("invalid mongo id")
    const user = await this.userModel.findByIdAndDelete(id)
    if (!user) throw new NotFoundException("User not found")
    return user;
  }

  async findOneByEmail(email) {
    const user = this.userModel.findOne({ email: email }).select("+password")
    return user
  }

  async addPost(userId,postId){
    const updateUSer = await this.userModel.findByIdAndUpdate(userId,{$push:{posts:postId}},{new:true})
    return updateUSer
  }
}

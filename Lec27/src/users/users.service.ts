import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/users.schema';
import { isValidObjectId, Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.userModel.findOne({email: createUserDto.email})
    if(existingUser) throw new BadRequestException()
    const newUser = await this.userModel.create(createUserDto)
    return newUser;
  }

  findAll() {
    return this.userModel.find();
  }

  async findOne(id: string) {
    if(!isValidObjectId(id)) throw new BadRequestException()
    const findUserById = await this.userModel.findById(id)
    if(!findUserById) throw new BadRequestException()
    return findUserById;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if(!isValidObjectId(id)) throw new BadRequestException()
    const updateUserById = await this.userModel.findByIdAndUpdate(updateUserDto, {new: true})
    if(!updateUserById) throw new BadRequestException()
    return updateUserById;
  }

  async remove(id: string) {
    if(!isValidObjectId(id)) throw new BadRequestException()
    const removeUserById = await this.userModel.findByIdAndDelete(id)
    if(!removeUserById) throw new BadRequestException()
    return removeUserById;
  }
}

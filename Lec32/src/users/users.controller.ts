import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { User } from 'src/decorators/user.decorator';
import { ISAdminGuard } from 'src/auth/guards/isAdmin.guard';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'List of all users' })
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @ApiOperation({ summary: 'Get a single user by id' })
  @ApiResponse({ status: 200, description: 'User found' })
  @ApiResponse({ status: 404, description: 'User not found' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update the currently logged-in user' })
  @ApiResponse({ status: 200, description: 'User updated successfully' })
  @UseGuards(AuthGuard)
  @Patch()
  update(@User() userId, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(userId, updateUserDto);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete the currently logged-in user' })
  @ApiResponse({ status: 200, description: 'User deleted successfully' })
  @UseGuards(AuthGuard)
  @Delete()
  remove(@User() userId) {
    return this.usersService.remove(userId);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete another user by id (admin only)' })
  @ApiResponse({ status: 200, description: 'User deleted successfully' })
  @ApiResponse({ status: 403, description: 'Forbidden — admin access required' })
  @UseGuards(AuthGuard,ISAdminGuard)
  @Delete(":id")
  removeOtherUser(@Param("id") id){
    return this.usersService.remove(id)
  }
}

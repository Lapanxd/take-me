import {Body, Controller, Get, Param, Post, Put, Query, UseGuards} from '@nestjs/common';
import { User } from '../../core/entities/user.entity';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { SignUpUserDto } from '../../core/dtos/sign-up-user.dto';
import {LocalAuthGuard} from "../auth/guards/local-auth.guard";
import {UpdateUserDto} from "../../core/dtos/update-user.dto";
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findByCredentials(@Query('email') email: string): Promise<User> {
    return await this.usersService.findByCredentials(email);
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<User> {
    console.log(id);
    return await this.usersService.findById(id);
  }

  @Post()
  async create(signUpUserDto: SignUpUserDto): Promise<User> {
    return await this.usersService.create(signUpUserDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
   return await this.usersService.update(id, updateUserDto);
  }

  @Put(':id/password')
  async updatePassword(@Param('id') id: number, @Body() {oldPassword, newPassword}) {
    console.log(oldPassword, newPassword   )
    return await this.usersService.updatePassword(id, { oldPassword, newPassword });
  }
}

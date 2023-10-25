import { Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { User } from '../core/entities/user.entity';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { SignUpUserDto } from '../core/dtos/sign-up-user.dto';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findByCredentials(@Query('email') email: string): Promise<User> {
    return await this.usersService.findByCredentials(email);
  }

  // @UseGuards(JwtAuthGuard)
  @Get()
  async findById(id: number): Promise<User> {
    return await this.usersService.findById(id);
  }

  @Post()
  async create(signUpUserDto: SignUpUserDto): Promise<User> {
    return await this.usersService.create(signUpUserDto);
  }
}

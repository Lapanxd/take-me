import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { SignInUserDto } from '../core/dtos/sign-in-user.dto';
import { SignUpUserDto } from '../core/dtos/sign-up-user.dto';
import { RefreshJwtAuthGuard } from './guards/refresh-jwt-auth.guard';
import * as process from 'process';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('sign-up')
  async register(@Body() signUpUserDto: SignUpUserDto) {
    return this.userService.create(signUpUserDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('sign-in')
  async signIn(@Body() signInUserDto: SignInUserDto) {
    console.log(process.env.JWT_SECRET);
    return this.authService.signIn(signInUserDto);
  }

  @UseGuards(RefreshJwtAuthGuard)
  @Post('refresh')
  async refreshToken(@Request() req) {
    return await this.authService.refreshToken(req.user);
  }
}

import { Body, Controller, Post, UseGuards, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { SignInUserDto } from '../../core/dtos/sign-in-user.dto';
import { SignUpUserDto } from '../../core/dtos/sign-up-user.dto';
import { RefreshJwtAuthGuard } from './guards/refresh-jwt-auth.guard';
import { ConfigService } from '@nestjs/config';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
    private configService : ConfigService,
  ) {}

  @Post('sign-up')
  async register(@Body() signUpUserDto: SignUpUserDto) {
    return this.userService.create(signUpUserDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('sign-in')
  async signIn(@Body() signInUserDto: SignInUserDto) {
    return this.authService.signIn(signInUserDto);
  }

  @UseGuards(RefreshJwtAuthGuard)
  @Post('refresh')
  async refreshToken(@Body() body: any) {
    const refreshToken = body.refreshToken;
    if(!refreshToken) {
      throw new UnauthorizedException('Refresh token is required');
    }
    return await this.authService.refreshToken(refreshToken);
  }
}

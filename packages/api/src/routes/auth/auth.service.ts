import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { SignInUserDto } from '../../core/dtos/sign-in-user.dto';
import { UnauthorizedHttp } from '../../core/exceptions/user.exceptions';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async signIn(signInUserDto: SignInUserDto) {
    const { email, password } = signInUserDto;

    const user = await this.userService.findByCredentials(email);
    if (!user) throw new UnauthorizedHttp();

    const isValidPassword = await user.validatePassword(password);
    if (!isValidPassword) {
      throw new UnauthorizedHttp();
    }

    const payload = { sub: user.id, email: user.email };

    const accessToken = await this.jwtService.signAsync(payload, {
      secret: 'SamHSrSp4eiMneglcwIvCvKaTJGHtnY8',
      expiresIn: '1h',
    });

    const refreshPayload = { sub: user.id };
    const refreshToken = await this.jwtService.signAsync(refreshPayload, {
      secret: 'ThXRemzvBJg58dugGmf24bey5Tsz5D74',
      expiresIn: '7d',
    });

    return { accessToken, refreshToken };
  }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findByCredentials(email);
    if (user && user.validatePassword(pass)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async refreshToken(refreshToken: string): Promise<{ accessToken: string }> {
    try {
      const decoded = await this.jwtService.verifyAsync(refreshToken, {
        secret: 'ThXRemzvBJg58dugGmf24bey5Tsz5D74',
      });

      const payload = { sub: decoded.sub, email: decoded.email };

      const accessToken = await this.jwtService.signAsync(payload, {
        secret: 'SamHSrSp4eiMneglcwIvCvKaTJGHtnY8',
        expiresIn: '1h',
      });

      return { accessToken };
    } catch (e) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }
}

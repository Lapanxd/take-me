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

    console.log(this.configService.get<string>('JWT_SECRET'));
    console.log(this.configService.get<string>('JWT_ACCESS_TOKEN_EXPIRATION_TIME'));

    const accessToken = await this.jwtService.signAsync(payload, {
      secret: this.configService.get<string>('JWT_SECRET'),
      expiresIn: this.configService.get<string>('JWT_ACCESS_TOKEN_EXPIRATION_TIME'),
    });

    const refreshPayload = { sub: user.id };
    const refreshToken = await this.jwtService.signAsync(refreshPayload, {
      secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
      expiresIn: this.configService.get<string>('JWT_REFRESH_TOKEN_EXPIRATION_TIME'),
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
        secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
      });

      const payload = { sub: decoded.sub, email: decoded.email };

      const accessToken = await this.jwtService.signAsync(payload, {
        secret: this.configService.get<string>('JWT_SECRET'),
        expiresIn: this.configService.get('JWT_ACCESS_TOKEN_EXPIRATION_TIME'),
      });

      return { accessToken };
    } catch (e) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }
}

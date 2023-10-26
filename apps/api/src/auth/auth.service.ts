import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { SignInUserDto } from '../core/dtos/sign-in-user.dto';
import { UnauthorizedHttp } from '../core/exceptions/user.exceptions';
import { User } from '../core/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
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
    const accessToken = await this.jwtService.signAsync(payload);
    const refreshToken = await this.jwtService.signAsync(payload, {
      expiresIn: '7d',
    });

    return { accessToken: accessToken, refreshToken: refreshToken };
  }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findByCredentials(email);
    if (user && user.validatePassword(pass)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async refreshToken(user: User) {
    if (!user) throw new UnauthorizedHttp();

    const payload = { sub: user.id, email: user.email };
    const accessToken = await this.jwtService.signAsync(payload);

    return { accessToken: accessToken };
  }
}

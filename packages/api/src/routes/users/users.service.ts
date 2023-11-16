import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../core/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UserNotFound, UserWithEmailAlreadyExists } from '../../core/exceptions/user.exceptions';
import { SignUpUserDto } from '../../core/dtos/sign-up-user.dto';
import { UpdateUserDto } from '../../core/dtos/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(signUpUserDto: SignUpUserDto): Promise<User> {
    const { firstname, lastname, email, password, city } = signUpUserDto;

    if (await this.findByCredentials(email)) {
      throw new UserWithEmailAlreadyExists(email);
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User();
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.password = hashedPassword;
    user.city = city;

    return this.userRepository.save(user);
  }

  async update(userId: number, updateUserDto: UpdateUserDto): Promise<User> {
    const { firstname, lastname, email, city } = updateUserDto;

    const user = await this.findById(userId);

    if (user) {
      user.firstname = firstname || user.firstname;
      user.lastname = lastname || user.lastname;
      user.email = email || user.email;
      user.city = city || user.city;
    }

    return await this.userRepository.save(user);
  }

  async updatePassword(userId, { oldPassword, newPassword }): Promise<User> {
    if (oldPassword === newPassword) {
      throw new Error("je sais pas flemme de faire l'erreur"); // @todo refact
    }

    const user = await this.findById(userId);

    if (!(await user.validatePassword(oldPassword))) {
      throw new Error("là l'erreur c'est que il faut dire que l'ancien mdp c'est pas le bon"); // @todo refact
    }

    if (user) {
      const salt = await bcrypt.genSalt();
      user.password = await bcrypt.hash(newPassword, salt);
    }

    return await this.userRepository.save(user);
  }

  async findByCredentials(email: string): Promise<User> {
    const user = this.userRepository.findOne({ where: { email } });

    if (!user) {
      throw new UserNotFound();
    }

    return user;
  }

  async findById(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new UserNotFound();
    }

    return user;
  }
}

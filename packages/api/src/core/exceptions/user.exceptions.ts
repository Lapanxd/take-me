import { HttpException } from '@nestjs/common';

export class UnauthorizedHttp extends HttpException {
  constructor() {
    super('Bad credentials', 401);
  }
}

export class UserNotFound extends HttpException {
  constructor() {
    super('User not found', 404);
  }
}

export class UserWithEmailAlreadyExists extends HttpException {
  constructor(email: string) {
    super(`User with email : ${email} already exists`, 409);
  }
}

import { HttpException } from '@nestjs/common';

export class RouteNotFoundException extends HttpException {
  constructor() {
    super('Route is not handled', 404);
  }
}

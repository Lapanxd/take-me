import { Injectable, PipeTransform } from '@nestjs/common';
import _ from 'lodash';

@Injectable()
export class SnakeCasePipe implements PipeTransform {
  transform(value: string): string {
    return _.snakeCase(value);
  }
}

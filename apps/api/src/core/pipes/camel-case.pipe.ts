import { Injectable, PipeTransform } from '@nestjs/common';
import _ from 'lodash';

@Injectable()
export class CamelCasePipe implements PipeTransform {
  transform(value: string): string {
    return _.camelCase(value);
  }
}

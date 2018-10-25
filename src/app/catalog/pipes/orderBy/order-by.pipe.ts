import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '../../interfaces';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: ICourse[], key: string): ICourse[] {
    value.sort((a: ICourse, b: ICourse) => {
      return a[key] - b[key];
    });
    return value;
  }

}

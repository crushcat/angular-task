import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '../../interfaces';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: ICourse[], name: string): ICourse[] {
    console.log(value, name);
    return name? value.filter((item) => item.title == name) : value;
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '../../interfaces';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: ICourse[], name: string): ICourse[] {
    return name? value.filter((item) => item.name.toLocaleLowerCase() == name.toLocaleLowerCase()) : value;
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { Model } from '../models/model';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipePipe implements PipeTransform {
  transform(value: Model[], filterText: string): Model[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : ''; //arama ifadesi küçük harfe çevrilir, js  buna duyarlıdır.
    return filterText ? value.filter((m:Model)=> m.Name.toLocaleLowerCase().indexOf(filterText) !== -1): value; //-1den farklı demek model varsa demek
  }
}

//map, filter gibi js operasyonları vardır.

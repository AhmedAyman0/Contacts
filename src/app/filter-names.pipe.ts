import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNames'
})
export class FilterNamesPipe implements PipeTransform {

  transform(listOfNames: string[], nameToFilter: string): string[] {
    if(!listOfNames) return null;
    if(!nameToFilter) return listOfNames;

    return listOfNames.filter(n => n.indexOf(nameToFilter) >= 0);
  }

}

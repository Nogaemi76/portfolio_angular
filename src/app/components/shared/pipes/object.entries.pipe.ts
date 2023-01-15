import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectEntries'
})
export class ObjectEntriesPipe implements PipeTransform {

  transform(objects : any = []): any {
    return Object.entries(objects);
  }

}

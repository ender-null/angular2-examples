import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../shared/list';

@Pipe({
  name: 'done',
  pure: false
})
export class DonePipe implements PipeTransform {
  transform(lists: List[], done: boolean = false): List[] {
    let filteredLists: List[] = [];

    for (let list of lists){
      if (list.completed == done){
        filteredLists.push(list);
      }
    }

    return filteredLists;

  }
}

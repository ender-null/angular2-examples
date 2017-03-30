import { ItemList } from './itemlist';

export class List {
  name: string;
  items: ItemList[];
  completed: boolean;

  constructor ( name: string ){
    this.name = name;
    this.completed = false;
  }
}

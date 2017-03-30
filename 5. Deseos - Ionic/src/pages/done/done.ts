import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ToDo } from '../../providers/todo';

import { DetailsPage } from '../details/details';

import { List } from '../../shared/list';
import { ItemList } from '../../shared/itemlist';

@Component({
  selector: 'page-done',
  templateUrl: 'done.html'
})
export class DonePage {

  constructor(public navCtrl: NavController, private todo: ToDo) {

  }

  listDetails(list, i){
    this.navCtrl.push( DetailsPage, {
      list, i
    } );
  }

  check(list: List, item: ItemList){
    console.log('checked');
    item.done = !item.done;

    let completed = true;
    for(let item of list.items){
      if (!item.done){
        completed = false;
        break;
      }
    }

    list.completed = completed;
    this.todo.saveStorage();
  }

}

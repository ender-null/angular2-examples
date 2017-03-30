import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ToDo } from '../../providers/todo';
import { AddPage } from '../add/add';
import { DetailsPage } from '../details/details';

import { List } from '../../shared/list';
import { ItemList } from '../../shared/itemlist';

@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html'
})
export class ToDoPage {

  constructor(public navCtrl: NavController, private todo: ToDo) {
  }

  addList(){
    this.navCtrl.push( AddPage );
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

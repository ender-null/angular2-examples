import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { List } from '../shared/list';


@Injectable()
export class ToDo {

  lists: List[] = [];

  constructor(public http: Http) {
    this.loadStorage();
    console.log('Hello ToDo Provider');
  }

  saveStorage(){
    localStorage.setItem("data", JSON.stringify(this.lists));
  }

  loadStorage(){
    if(localStorage.getItem("data")){
      this.lists = JSON.parse(localStorage.getItem("data"));}
    }

    addList(list: List) {
      this.lists.push(list);
      this.saveStorage();
    }

    removeList(i: number) {
      this.lists.splice(i, 1);
      this.saveStorage();
    }

  }

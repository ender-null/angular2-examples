import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ToDo } from '../../providers/todo';

import { List } from '../../shared/list';
import { ItemList } from '../../shared/itemlist';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {

  list: List;
  i: number;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public todo: ToDo
  ) {
    this.list = this.navParams.get("list");
    this.i = this.navParams.get("i");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  check(item: ItemList){
    console.log('checked');
    item.done = !item.done;

    let completed = true;
    for(let item of this.list.items){
      if (!item.done){
        completed = false;
        break;
      }
    }

    this.list.completed = completed;
    this.todo.saveStorage();
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: `Remove ${this.list.name}?`,
      message: 'Do you agree to delete this list permanently?',
      buttons: ['Cancel',
        {
          text: 'Confirm',
          handler: () => {
            this.todo.removeList(this.i);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }

}

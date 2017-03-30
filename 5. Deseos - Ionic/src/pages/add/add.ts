import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { List } from '../../shared/list';
import { ItemList } from '../../shared/itemlist';
import { ToDo } from '../../providers/todo';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {

  listname: string = "";
  itemname: string = "";

  items: ItemList[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public todo: ToDo
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  addItem(){
    if(this.itemname.length == 0){
      return;
    }

    let item = new ItemList();
    item.name = this.itemname;
    this.items.push(item);

    this.itemname = "";
  }

  removeItem(i: number) {
    this.items.splice(i, 1);
  }

  saveList(){
    if(this.listname.length == 0){
      let alert = this.alertCtrl.create({
        title: 'List name',
        subTitle: 'You need to name the list.',
        buttons: ['OK']
      });
      alert.present();
      return;
    }

    let list = new List(this.itemname);
    list.items = this.items;
    list.name = this.listname;

    this.todo.addList( list );

    this.navCtrl.pop();
  }

}

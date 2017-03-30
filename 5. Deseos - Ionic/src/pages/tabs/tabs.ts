import { Component } from '@angular/core';

import { ToDo } from '../../providers/todo';

import { ToDoPage } from '../todo/todo';
import { DonePage } from '../done/done';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ToDoPage;
  tab2Root: any = DonePage;

  constructor(private todo: ToDo) {}
}

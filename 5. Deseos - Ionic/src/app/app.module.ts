import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { ToDoPage } from '../pages/todo/todo';
import { DonePage } from '../pages/done/done';
import { AddPage } from '../pages/add/add';
import { DetailsPage } from '../pages/details/details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PlaceholderPipe } from '../pipes/placeholder';
import { DonePipe } from '../pipes/done';

import { ToDo } from '../providers/todo';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ToDoPage,
    DonePage,
    AddPage,
    DetailsPage,
    PlaceholderPipe,
    DonePipe
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ToDoPage,
    DonePage,
    AddPage,
    DetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ToDo,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

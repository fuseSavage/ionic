import { Component } from '@angular/core';

import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( public navCtrl: NavController ) {}

  signin() {
    this.navCtrl.navigateForward('/w2-sign-in');
  }
  bmipage() {
    this.navCtrl.navigateForward('/w3-bmi-page');
  }
  catalogpage() {
    this.navCtrl.navigateForward('/h3-mycatalog');
  }
  aecpage() {
    this.navCtrl.navigateForward('/h3-aec');
  }


}

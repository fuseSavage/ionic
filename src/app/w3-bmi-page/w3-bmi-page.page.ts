import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-w3-bmi-page',
  templateUrl: './w3-bmi-page.page.html',
  styleUrls: ['./w3-bmi-page.page.scss'],
})
export class W3BmiPagePage implements OnInit {

  getweight: number;
  getheight: number;
  getgender: any;
  getage: String;

  constructor( public navCtrl: NavController) { }

  ngOnInit() {
  }

  checkbmi(){
    this.navCtrl.navigateForward('/w3-calbmi-page/' + this.getweight +'/'+ this.getheight);
    // console.log(this.getgender, this.getage);
  }
  popForward(){
    this.navCtrl.pop();
  }

}

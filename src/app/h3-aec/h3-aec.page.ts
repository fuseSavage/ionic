import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-h3-aec',
  templateUrl: './h3-aec.page.html',
  styleUrls: ['./h3-aec.page.scss'],
})
export class H3AecPage implements OnInit {

  aeclist: any;
  countrys: String;


  constructor( public navCtrl: NavController, public actroute: ActivatedRoute ) {}

  ngOnInit() {
    this.aeclist = [
      {id: 1, img:'http://hilight.kapook.com/img_cms2/user/pree/b1_5.jpg', country: 'Brunei Darussalam'},
      {id: 2, img:'http://hilight.kapook.com/img_cms2/user/pree/b2_7.jpg', country: 'Cambodia'},
      {id: 3, img:'http://hilight.kapook.com/img_cms2/user/pree/b3_4.jpg', country: 'Indonesia'},
      {id: 4, img:'http://hilight.kapook.com/img_cms2/user/pree/b4_5.jpg', country: 'Lao'},
      {id: 5, img:'http://hilight.kapook.com/img_cms2/user/pree/b5_4.jpg', country: 'Malaysia'},
      {id: 6, img:'http://hilight.kapook.com/img_cms2/user/pree/b6_3.jpg', country: 'Myanmar'},
      {id: 7, img:'http://hilight.kapook.com/img_cms2/user/pree/b7_3.jpg', country: 'Philippines'},
      {id: 8, img:'http://hilight.kapook.com/img_cms2/user/pree/b8_2.jpg', country: 'Singapore'},
      {id: 9, img:'http://hilight.kapook.com/img_cms2/user/pree/b9_4.jpg', country: 'Thailand'},
      {id: 10, img:'http://hilight.kapook.com/img_cms2/user/pree/b10_1.jpg', country: 'Vietnam'},
      {id: 11, img:'https://s.isanook.com/ca/0/ud/199/997583/r_25328.jpg', country: 'Timor-Leste'},
    ]

    // this.aeclist.forEach(e => {
    //   this.countrylist.push(e.countrylist);
    // });

  }

  async presentActionSheet(country) {
    const actionSheet = document.createElement('ion-action-sheet');

    actionSheet.header = 'SELECT';
    actionSheet.cssClass = 'my-custom-class';
    actionSheet.buttons = [ {
      text: 'Detail',
      icon: 'enter',
      handler: () => {
        // console.log('Favorite clicked');
        this.countrys = country;
        // console.log(this.countrys)
        this.navCtrl.navigateForward('/h3-detail-aec/'+ this.countrys)
      }
    },{
      text: 'Travel',
      icon: 'globe',
      handler: () => {
        // console.log('Details clicked');
        // console.log(country);
        this.countrys = country;
        // console.log(this.countrys)
        this.navCtrl.navigateForward('/h3-travel-aec/'+ this.countrys)
      }
    }];
    document.body.appendChild(actionSheet);
    return actionSheet.present();
  }
  popForward() {
    this.navCtrl.pop();
  }


}

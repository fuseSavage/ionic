import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-w2-sign-in',
  templateUrl: './w2-sign-in.page.html',
  styleUrls: ['./w2-sign-in.page.scss'],
})
export class W2SignInPage implements OnInit {

  getuser: String;
  getpass: String;


  channel: any;

  cblist: any = [
    { id: 1, title: "Facebook", value: "facebook", checked: false, iconname: "logo-facebook" },
    { id: 2, title: "Youtube", value: "youtube", checked: false, iconname: "logo-youtube" },
    { id: 3, title: "Twitter", value: "twitter", checked: false, iconname: "logo-twitter" },
    { id: 4, title: "Tiktok", value: "tiktok", checked: false, iconname: "logo-tiktok" }
  ];

  channellist: any = [
    { id: 1, title: "TV", value: "tv", iconname: "tv-outline" },
    { id: 2, title: "Smartphone", value: "smartphone", iconname: "phone-portrait-outline" },
    { id: 3, title: "Computer", value: "computer", iconname: "logo-chrome" },

  ];



  constructor(public toastCtrl: ToastController, public navCtrl: NavController) { }


  ngOnInit() {
  }


  async checkuser() {
    let social: any = [];

    this.cblist.forEach(e => {
      if (e.checked == true) {
        social.push(e.value);
      };
    });

    // console.log(this.channel);
    // console.log(this.getuser, ' ', this.getpass);
    const toast = await this.toastCtrl.create({
      message: 'Wellcome ' + this.getuser + ' Social is ' + social + ' channal is ' + this.channel,
      duration: 5000,
    });
    toast.present();
  }

  popForward() {
    this.navCtrl.pop();
  }

}

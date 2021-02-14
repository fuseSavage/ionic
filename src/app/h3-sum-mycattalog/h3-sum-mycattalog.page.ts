import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-h3-sum-mycattalog',
  templateUrl: './h3-sum-mycattalog.page.html',
  styleUrls: ['./h3-sum-mycattalog.page.scss'],
})
export class H3SumMycattalogPage implements OnInit {

  productlist: any;
  pricelist: any;
  sumitem: any;

  constructor(public navCtrl: NavController, public actroute: ActivatedRoute, public alertCtrl: AlertController) { }

  ngOnInit() {
    sendid: Number;
    sendproduct: String;
    sendprice: Number;
    sendsumprice: Number;


    let sendproduct = this.actroute.snapshot.paramMap.get('sendproduct');
    let sendprice = this.actroute.snapshot.paramMap.get('sendprice');
    let sendsumprice = this.actroute.snapshot.paramMap.get('sendsumprice');

    // console.log(sendproduct.split(','));

    var product = sendproduct.split(',');
    var price = sendprice.split(',');
    var sum = sendsumprice;

    this.productlist = product;
    this.pricelist = price;
    this.sumitem = sum;
  }


  async showAlert() {
    const alert = await this.alertCtrl.create({
      header: 'ราคารวมสินค้า',
      subHeader: this.sumitem +' $',
      message: 'ได้เพิ่มสินค้าของคุณเรียบร้อย',
      buttons: ['OK']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
    this.navCtrl.pop();

  }
  popForward() {
    this.navCtrl.pop();
  }

}

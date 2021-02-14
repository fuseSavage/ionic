import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-h3-mycatalog',
  templateUrl: './h3-mycatalog.page.html',
  styleUrls: ['./h3-mycatalog.page.scss'],
})
export class H3MycatalogPage implements OnInit {
  productlist: any;


  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    this.productlist = [
      { id: 1, img: "https://img.icons8.com/color/48/000000/rca.png", product: "RCA Cable", price: 4.5, checked: false },
      { id: 2, img: "https://img.icons8.com/color/48/000000/hdmi-cable.png", product: "HDMI Cable", price: 3.5, checked: false },
      { id: 3, img: "https://img.icons8.com/color/48/000000/vga.png", product: "VGA", price: 3.5, checked: false },
      { id: 4, img: "https://img.icons8.com/color/48/000000/ssd.png", product: "SSD M.2", price: 9.5, checked: false },
      { id: 5, img: "https://img.icons8.com/color/48/000000/sd.png", product: "SD Card", price: 6.5, checked: false },
      { id: 6, img: "https://img.icons8.com/color/48/000000/hdd.png", product: "HDD 1TB", price: 11.5, checked: false },
      { id: 7, img: "https://img.icons8.com/color/48/000000/micro-sd.png", product: " Micro SD", price: 10.5, checked: false },

    ]

  }

  sumItem() {
    var idselect: any = [];
    var priceselect: any = [];
    var productselect: any = [];
    var sumprice: number = 0;

    //loop product name
    this.productlist.forEach(e => {
      if (e.checked == true) {
        idselect.push(e.id);
        productselect.push(e.product);
        priceselect.push(e.price);
        sumprice = sumprice + parseFloat(e.price.toFixed(2));
      }
    });
    // console.log(sumprice);
    // console.log(idselect);
    // console.log(priceselect);
    // console.log(productselect);
    this.navCtrl.navigateForward('/h3-sum-mycattalog/' + productselect + '/' + priceselect + '/' + sumprice);

  }
  popForward() {
    this.navCtrl.pop();
  }


}

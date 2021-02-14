import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-w3-calbmi-page',
  templateUrl: './w3-calbmi-page.page.html',
  styleUrls: ['./w3-calbmi-page.page.scss'],
})
export class W3CalbmiPagePage implements OnInit {
  weight: String;
  height: String;
  resultBMI: String;
  discription: String;

  constructor(public navCtrl: NavController, public actroute: ActivatedRoute) { }

  ngOnInit() {
    sendw: Number;
    sendh: Number;


    let sendw = this.actroute.snapshot.paramMap.get('sendw');
    this.weight = " Weight : " + sendw;

    let sendh = this.actroute.snapshot.paramMap.get('sendh');
    this.height = " Height : " + sendh;

    this.resultBMI = " BMI : " + (parseFloat(sendw) / (parseFloat(sendh) ** 2) * 10000);

    if ((parseFloat(sendw) / (parseFloat(sendh) ** 2) * 10000) >= 30) {
      this.discription = "อ้วนมาก = 30.0 ขึ้นไป "+
      "ค่อนข้างอันตราย เสี่ยงต่อการเกิดโรคร้ายแรงที่แฝงมากับความอ้วน"+
      "หากค่า BMI อยู่ในระดับนี้ จะต้องปรับพฤติกรรมการทานอาหาร "+
      "และควรเริ่มออกกำลังกาย และหากเลขยิ่งสูงกว่า 40.0 "+
      "ยิ่งแสดงถึงความอ้วนที่มากขึ้น ควรไปตรวจสุขภาพ และปรึกษาแพทย์";
    }
    else if ((parseFloat(sendw) / (parseFloat(sendh) ** 2) * 10000) >= 25) {
      this.discription = "อ้วน = 25.0 - 29.9"+
      " อ้วนในระดับหนึ่ง ถึงแม้จะไม่ถึงเกณฑ์ที่ถือว่าอ้วนมาก ๆ "+
      "แต่ก็ยังมีความเสี่ยงต่อการเกิดโรคที่มากับความอ้วนได้เช่นกัน "+
      "ทั้งโรคเบาหวาน และความดันโลหิตสูง "+
      "ควรปรับพฤติกรรมการทานอาหาร ออกกำลังกาย และตรวจสุขภาพ"
    }
    else if ((parseFloat(sendw) / (parseFloat(sendh) ** 2) * 10000) >= 18.6) {
      this.discription = "น้ำหนักปกติ เหมาะสม = 18.6 - 24.9 "+
      "น้ำหนักที่เหมาะสมสำหรับคนไทยคือค่า BMI ระหว่าง 18.5-24.9 "+
      "จัดอยู่ในเกณฑ์ปกติ ห่างไกลโรคที่เกิดจากความอ้วน "+
      "และมีความเสี่ยงต่อการเกิดโรคต่าง ๆ น้อยที่สุด "+
      "ควรพยายามรักษาระดับค่า BMI ให้อยู่ในระดับนี้ให้นานที่สุด "+
      "และควรตรวจสุขภาพทุกปี"
    }
    else{
      this.discription = "ผอมเกินไป = น้อยกว่า 18.5 "+
      "น้ำหนักน้อยกว่าปกติก็ไม่ค่อยดี หากคุณสูงมากแต่น้ำหนักน้อยเกินไป "+
      "อาจเสี่ยงต่อการได้รับสารอาหารไม่เพียงพอหรือได้รับพลังงานไม่เพียงพอ "+
      "ส่งผลให้ร่างกายอ่อนเพลียง่าย การรับประทานอาหารให้เพียงพอ "+
      "และการออกกำลังกายเพื่อเสริมสร้างกล้ามเนื้อสามารถช่วยเพิ่มค่า "+
      "BMI ให้อยู่ในเกณฑ์ปกติได้"
    }

  }



  popForward() {
    this.navCtrl.pop();
  }

}

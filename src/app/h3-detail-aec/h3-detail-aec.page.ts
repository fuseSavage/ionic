import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-h3-detail-aec',
  templateUrl: './h3-detail-aec.page.html',
  styleUrls: ['./h3-detail-aec.page.scss'],
})
export class H3DetailAecPage implements OnInit {
  namecountry: String;

  details: {
    nationalFlag: String,
    officialname: String,
    capital: String,
    language: String,
    religion: String,
    currency: String,
    population: String,
    credit: String
  }

  constructor(public navCtrl: NavController, public actroute: ActivatedRoute) { }

  ngOnInit() {
    sendAEC: String;

    let sendAEC = this.actroute.snapshot.paramMap.get('sendAEC');
    // console.log(sendAEC);

    if (sendAEC == 'Brunei Darussalam') {
      this.details = {
        nationalFlag: 'http://hilight.kapook.com/img_cms2/user/pree/b1_5.jpg',
        officialname: 'เนการาบรูไนดารุสซาลาม (Negara Brunei Darussalam (มาเลย์))',
        capital: 'บันดาร์เสรีเบกาวัน',
        language: 'ภาษามาเลย์',
        religion: '	อิสลาม',
        currency: 'ดอลลาร์บรูไน (BND)',
        population: '428,146 คน (ข้อมูลปี พ.ศ. 2554)',
        credit : 'Credit : ' + 'http://th.wikipedia.org/wiki/บรูไน'
      }
      this.namecountry = sendAEC;
    }

    else if (sendAEC == 'Cambodia') {
      this.details = {
        nationalFlag: 'http://hilight.kapook.com/img_cms2/user/pree/b2_7.jpg',
        officialname: 'ราชอาณาจักรกัมพูชา (Kingdom of Cambodia)',
        capital: 'กรุงพนมเปญ (Phnom Penh)',
        language: 'ภาษาเขมร',
        religion: 'ศาสนาพุทธ นิกายเถรวาท',
        currency: 'เงินเรียล (Riel : KHR)',
        population: '14.1 ล้านคน (ปี 2548)',
        credit : 'Credit : ' + 'http://th.wikipedia.org/wiki/กัมพูชา'
      }
      this.namecountry = sendAEC;
    }

    else if (sendAEC == 'Indonesia') {
      this.details = {
        nationalFlag: 'http://hilight.kapook.com/img_cms2/user/pree/b3_4.jpg',
        officialname: 'สาธารณรัฐอินโดนีเซีย (Republic of Indonesia)',
        capital: 'จาการ์ตา (Jakarta)',
        language: 'ภาษาอินโดนีเซีย หรือ Bahasa Indonesia',
        religion: 'ศาสนาอิสลาม',
        currency: 'รูเปียห์ (Rupiah)',
        population: 'ประมาณ 220 ล้านคน ',
        credit : 'Credit : ' + 'http://th.wikipedia.org/wiki/อินโดนีเซีย'
      }
      this.namecountry = sendAEC;
    }

    else if (sendAEC == 'Lao') {
      this.details = {
        nationalFlag: 'http://hilight.kapook.com/img_cms2/user/pree/b4_5.jpg',
        officialname: 'สาธารณรัฐประชาธิปไตยประชาชนลาว (The Lao Peopl "s Democratic Republic of Lao PDR )',
        capital: 'นครเวียงจันทน์',
        language: 'ภาษาลาว',
        religion: 'พุทธ',
        currency: 'กีบ',

        population: 'ประมาณ 6.06 ล้านคน',
        credit : 'Credit : ' + 'http://th.wikipedia.org/wiki/ลาว'
      }
      this.namecountry = sendAEC;
    }

    else if (sendAEC == 'Malaysia') {
      this.details = {
        nationalFlag: 'http://hilight.kapook.com/img_cms2/user/pree/b5_4.jpg',
        officialname: 'มาเลเซีย (Malaysia)',
        capital: 'กรุงกัวลาลัมเปอร์ (Kuala Lumpur)',
        language: '	ภาษามาเลย์ (Bahasa Malaysia)',
        religion: 'อิสลาม',
        currency: 'ริงกิตมาเลเซีย',

        population: 'จำนวน 26.24 ล้านคน (ปี 2549)',
        credit : 'Credit : ' + 'http://th.wikipedia.org/wiki/มาเลเซีย'
      }
      this.namecountry = sendAEC;
    }

    else if (sendAEC == 'Myanmar') {
      this.details = {
        nationalFlag: 'http://hilight.kapook.com/img_cms2/user/pree/b6_3.jpg',
        officialname: '	สาธารณรัฐแห่งสหภาพพม่า',
        capital: 'เนปี่ดอว์ (Naypyidaw)',
        language: 'ภาษาพม่า',
        religion: 'ศาสนาพุทธ',
        currency: '	จ๊าด (Kyat)',

        population: 'ประมาณ 50.51 ล้านคน',
        credit : 'Credit : ' + 'http://th.wikipedia.org/wiki/เมียนมาร์'
      }
      this.namecountry = sendAEC;
    }

    else if (sendAEC == 'Philippines') {
      this.details = {
        nationalFlag: 'http://hilight.kapook.com/img_cms2/user/pree/b7_3.jpg',
        officialname: '	สาธารณรัฐฟิลิปปินส์ - Republic of the Philippines : Republika ng Pilipinas',
        capital: '	กรุงมะนิลา  (Manila)',
        language: '	ฟิลิปิโน (Filipino) และอังกฤษเป็นภาษราชการ',
        religion: 'ศาสนาคริสต์นิกายโรมันคาทอลิก',
        currency: 'เปโซ',
        population: '88.7 ล้านคน (ปี 2540)',
        credit : 'Credit : ' + 'http://th.wikipedia.org/wiki/ฟิลิปปินส์'
      }
      this.namecountry = sendAEC;
    }

    else if (sendAEC == 'Singapore') {
      this.details = {
        nationalFlag: 'http://hilight.kapook.com/img_cms2/user/pree/b8_2.jpg',
        officialname: '	สาธารณรัฐสิงคโปร์ (Republic of Singapore)',
        capital: 'สิงคโปร์',
        language: 'ภาษาอังกฤษ',
        religion: 'พระพุทธศาสนา ศาสนาฮินดู คริสต์ศาสนา และลัทธิเต๋า ตามลำดับ',
        currency: '	ดอลลาร์',
        population: 'ประมาณ 5.08 ล้านคน (2553) ',
        credit : 'Credit : ' + 'http://th.wikipedia.org/wiki/สิงคโปร์'
      }
      this.namecountry = sendAEC;
    }

    else if (sendAEC == 'Thailand') {
      this.details = {
        nationalFlag: 'http://hilight.kapook.com/img_cms2/user/pree/b9_4.jpg',
        officialname: 'ราชอาณาจักรไทย (The Kingdom of Thailand)',
        capital: 'กรุงเทพมหานคร (Bangkok)',
        language: '	ภาษาไทย',
        religion: 'ศาสนาพุทธ',
        currency: '	บาท',
        population: '65,926,261 คน (ข้อมูลปี พ.ศ. 2553)',
        credit : 'Credit : ' + 'http://th.wikipedia.org/wiki/ไทย'
      }
      this.namecountry = sendAEC;
    }

    else if (sendAEC == 'Vietnam') {
      this.details = {
        nationalFlag: 'http://hilight.kapook.com/img_cms2/user/pree/b10_1.jpg',
        officialname: 'สาธารณรัฐสังคมนิยมเวียดนาม',
        capital: '	ฮานอย (Hanoi)',
        language: '	ภาษาเวียดนาม (Vietnamese)',
        religion: 'ศาสนาพุทธ',
        currency: 'ด่อง (Dong : VND)',
        population: 'ประมาณ 84.23 ล้านคน',
        credit : 'Credit : ' + 'http://th.wikipedia.org/wiki/เวียดนาม'
      }
      this.namecountry = sendAEC;
    }

    else if (sendAEC == 'Timor-Leste') {
      this.details = {
        nationalFlag: 'https://s.isanook.com/ca/0/ud/199/997583/r_25328.jpg',
        officialname: 'สาธารณรัฐประชาธิปไตยติมอร์-เลสเต',
        capital: 'ดิลี',
        language: 'ภาษาเตตุม ภาษาโปรตุเกส ภาษาอินโดนีเซีย และภาษาอังกฤษ',
        religion: 'ศาสนาคริสต์นิกายโรมันคาทอลิก',
        currency: 'ดอลลาร์สหรัฐ',
        population: 'ประมาณ 1,177,834 คน',
        credit : 'Credit : ' + 'http://th.wikipedia.org/wiki/ติมอร์-เลสเต'
      }
      this.namecountry = sendAEC;
    }

  }

  popForward() {
    this.navCtrl.pop();
  }

}

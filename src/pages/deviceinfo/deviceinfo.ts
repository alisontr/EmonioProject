import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';




/**
* Generated class for the DeviceinfoPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
 selector: 'page-deviceinfo',
 templateUrl: 'deviceinfo.html',
})
export class DeviceinfoPage {


 constructor(public navCtrl: NavController, public navParams: NavParams) {
   //
   // this.manuu=this.navParams.manu;

   // console.log(this.manuu);
 }

 ionViewDidLoad() {
   console.log('ionViewDidLoad DeviceinfoPage');
 }

}

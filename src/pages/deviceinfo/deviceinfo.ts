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

manu:any;
sysid:any;
pnpid:any;
cert:any;
softwarerevision:any;
firmware:any;
hardwarerevision:any;
serialnr:any;
modelnr:any;


 constructor(public navCtrl: NavController, public navParams: NavParams) {
   //
   // this.manuu=this.navParams.manu;
   // this.manu.navParams.get('manu');
   // console.log(this.manuu);
   // this.obj=this.navParams.data;
   // this.objtwo=this.navParams.data;
   this.manu= this.navParams.data.manu;
   this.sysid=this.navParams.data.sysid;
   this.pnpid=this.navParams.data.pnpid;
   this.cert=this.navParams.data.cert;
  this.softwarerevision=this.navParams.data.softwarerevision;
   this.firmware=this.navParams.data.firmware;
    this.hardwarerevision=this.navParams.data.hardwarerevision;
    this.serialnr=this.navParams.data.serialnr;
    this.modelnr=this.navParams.data.modelnr;


   // this.manu=this.obj.manu;

 }

 ionViewDidLoad() {
   console.log('ionViewDidLoad DeviceinfoPage');
 }

}

import { DetailPage } from './../detail/detail';
import { Component, NgZone } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  devices: any[] = [];

  constructor(public navCtrl: NavController,
              private ble: BLE,
              private ngZone: NgZone,
              public ToastController: ToastController) {
  }

  ionViewDidEnter() { ////scan() wird ausgeführt, wenn seite aufgerufen wird
    console.log('ionViewDidEnter');
    this.scan();
  }

  scan() { // scannt nach BLE-Geräten bis timeout erreicht ist
    this.devices = [];

    this.ble.scan([], 5).subscribe(
      device => this.onDeviceDiscovered(device),
    );

   setTimeout(5000);
  }

  onDeviceDiscovered(device) { //aufgerufen, wenn Gerät gefunden wurde - gibt GeräteInfos zurück
    console.log('Discovered ' + JSON.stringify(device, null, 2));
    this.ngZone.run(() => {
      this.devices.push(device);
    });
  }

  deviceSelected(device){
    console.log(JSON.stringify(device) + ' selected ');
    this.navCtrl.push(DetailPage, {
      device: device
    });
  }


}

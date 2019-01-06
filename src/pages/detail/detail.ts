import { HomePage } from './../home/home';
import { BLE } from '@ionic-native/ble';
import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { DeviceinfoPage } from './../deviceinfo/deviceinfo';

// Bluetooth UUIDs
const SERVICE_UUID = 'E1C98240-3037-419A-AEA4-BD9CC9C49A61';
const WRITE_CHARACTERISTIC = '00000002-EBB1-4BDA-9EDF-D0F5F8A11181';
const RECEIVE_CHARACTERISTIC = '00000003-EBB1-4BDA-9EDF-D0F5F8A11181';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  // converts a string to arraybuffer
  stringToBytes(string) {
    var array = new Uint8Array(string.length);
    for (var i = 0, l = string.length; i < l; i++) {
      array[i] = string.charCodeAt(i);
    }
    return array.buffer;
  }

  // converts arraybuffer to string
  bytesToString(buffer) {
    return String.fromCharCode.apply(null, new Uint8Array(buffer));
  }

  device = [];
  energy = new String;
  login = "login admin:emonio";
  energyGet = "energy";
  // manu:any;

public  manu= new String;
public  sysid= new String;
public  pnpid= new String;
public  cert = new String;
public  softwarerevision= new String;
public  firmware= new String;
public   hardwarerevision= new String;
public   serialnr= new String;
public   modelnr= new String;
// softwarerevision: any[] = [];


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private ble: BLE,
    public toastCtrl: ToastController,
    private ngZone: NgZone) {

    // this.manu=this.navParams.get('manu');
    // this.manu=this.navParams.manu;

    let device = navParams.get('device');

    this.ble.connect(device.id).subscribe(
      device => this.onConnected(device),
      device => this.onDisconnected(device),

    );

  }


  // connection to the peripheral
  onConnected(device) {
    console.log(`Connected to ${device.id}`)
    this.ngZone.run(() => {
      this.device = device;
    });

    // writes to characteristic
    // last parameter must be an arraybuffer - use stringToBytes() to convert strings to arraybuffers
    // if you want to display the data convert the arraybuffer to string with bytesToString()

    this.ble.write(device.id, SERVICE_UUID, WRITE_CHARACTERISTIC, this.stringToBytes(this.login)).then(
      data => console.log("write login commando" + this.bytesToString(data)));

    this.ble.write(device.id, SERVICE_UUID, WRITE_CHARACTERISTIC, this.stringToBytes(this.energyGet)).then(
      data => console.log("write energy commando" + this.bytesToString(data)));


    // reads the current value of the characteristic
    // bytesToString() converts output (arraybuffer) to string

    this.ble.read(device.id, SERVICE_UUID, RECEIVE_CHARACTERISTIC).then(
      buffer => {
        var data = new Uint8Array(buffer);
        console.log("current value: " + this.bytesToString(data));
        this.ngZone.run(() => {
          this.energy = this.bytesToString(data);
        });
      }
    )


    // subscribe for notifications when value changes
    this.ble.startNotification(device.id, SERVICE_UUID, RECEIVE_CHARACTERISTIC).subscribe(
      buffer => {
        var data = new Uint8Array(buffer);
        console.log("value changes: " + this.bytesToString(data));
        this.ngZone.run(() => {
          this.energy = this.bytesToString(data);
        });
      }
    )

//     // 2A23 system id
//
//     this.ble.read(device.id, '180A', '2A23').then(function(buffer) {
//       alert(String.fromCharCode.apply(null, new Uint8Array(buffer)))
//     });
//


this.ble.read(device.id, '180A', '2A23').then(
  buffer => {
    var data = new Uint8Array(buffer);
    console.log("current value: " + this.bytesToString(data));
    this.ngZone.run(() => {
      this.sysid = this.bytesToString(data);
    });
  }
)
//     this.ble.read(device.id, '180A', '2A24').then(function(buffer) {        //model nr  x
//       alert(String.fromCharCode.apply(null, new Uint8Array(buffer)))
//     });
//
this.ble.read(device.id, '180A', '2A24').then(
  buffer => {
    var data = new Uint8Array(buffer);
    console.log("current value: " + this.bytesToString(data));
    this.ngZone.run(() => {
      this.modelnr = this.bytesToString(data);
    });
  }
)

//     // 2A25 serial nr    x
//     this.ble.read(device.id, '180A', '2A25').then(function(buffer) {
//       alert(String.fromCharCode.apply(null, new Uint8Array(buffer)))
//     });
//
this.ble.read(device.id, '180A', '2A25').then(
  buffer => {
    var data = new Uint8Array(buffer);
    console.log("current value: " + this.bytesToString(data));
    this.ngZone.run(() => {
      this.serialnr = this.bytesToString(data);
    });
  }
)

//     //hardware revision string 2A27      x
//     this.ble.read(device.id, '180A', '2A27').then(function(buffer) {
//       alert(String.fromCharCode.apply(null, new Uint8Array(buffer)))
//     });
//
this.ble.read(device.id, '180A', '2A27').then(
  buffer => {
    var data = new Uint8Array(buffer);
    console.log("current value: " + this.bytesToString(data));
    this.ngZone.run(() => {
      this.hardwarerevision = this.bytesToString(data);
    });
  }
)
//     //frimware 2A26     x
//     this.ble.read(device.id, '180A', '2A26').then(function(buffer) {
//       this.variable=(String.fromCharCode.apply(null, new Uint8Array(buffer)))
//
//     });
//
//

this.ble.read(device.id, '180A', '2A26').then(
  buffer => {
    var data = new Uint8Array(buffer);
    console.log("current value: " + this.bytesToString(data));
    this.ngZone.run(() => {
      this.firmware = this.bytesToString(data);
    });
  }
)

//     //software revision string 2A28   x
//     this.ble.read(device.id, '180A', '2A28').then(function(buffer) {
//       alert(String.fromCharCode.apply(null, new Uint8Array(buffer)))
//     });
//
this.ble.read(device.id, '180A', '2A28').then(
  buffer => {
    var data = new Uint8Array(buffer);
    console.log("current value: " + this.bytesToString(data));
    this.ngZone.run(() => {
      this.softwarerevision = this.bytesToString(data);
    });
  }
)
//     // this.ble.read(device.id, '180A', '2A29').then(function(buffer) {          //manufacturer   x
//     //   this.manu=(String.fromCharCode.apply(null, new Uint8Array(buffer)))
//     // });
//
//
// // MANUFACTURER TWO  DELETE MANUFACTURER AFTERWARDS
//
//
//
this.ble.read(device.id, '180A', '2A29').then(
  buffer => {
    var data = new Uint8Array(buffer);
    console.log("current value: " + this.bytesToString(data));
    this.ngZone.run(() => {
      this.manu = this.bytesToString(data);
    });
  }
)
//
//
//
//
//     //2A2A certification data list      noo
//     this.ble.read(device.id, '180A', '2A2A').then(function(buffer) {
//       alert(String.fromCharCode.apply(null, new Uint8Array(buffer)))
//     });

this.ble.read(device.id, '180A', '2A2A').then(
  buffer => {
    var data = new Uint8Array(buffer);
    console.log("current value: " + this.bytesToString(data));
    this.ngZone.run(() => {
      this.cert = this.bytesToString(data);
    });
  }
)
//
//     //pnp id 2A50 noooo
//     this.ble.read(device.id, '180A', '2A50').then(function(buffer) {
//       alert(String.fromCharCode.apply(null, new Uint8Array(buffer)))
//     });
this.ble.read(device.id, '180A', '2A50').then(
  buffer => {
    var data = new Uint8Array(buffer);
    console.log("current value: " + this.bytesToString(data));
    this.ngZone.run(() => {
      this.pnpid = this.bytesToString(data);
    });
  }
)



  }



  onDisconnected(device) {
    console.log(`Disconnected from ${device.id}`)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  /* ionViewWillLeave(){
    console.log('ionViewWillLeave disconnecting Bluetooth');
    this.ble.disconnect(this.device.id).then(
      () => console.log('Disconnected'),
      () => console.log('ERROR disconnecting')
    )
  } */


  goToHomePage() {
    this.navCtrl.push(HomePage)
  }

    //
    // goToDeviceinfoPage() {
    //   console.log(this.manu);
    //   this.navCtrl.push(DeviceinfoPage,{manu:this.manu,softwarerevision:this.softwarerevision});
    // }

    goToDeviceinfoPage() {
      console.log(this.manu + this.sysid + this.pnpid+ this.cert+ this.softwarerevision+ this.firmware+ this.hardwarerevision+this.serialnr+this.modelnr+ 'pushed in');
      this.navCtrl.push(DeviceinfoPage,{manu:this.manu,sysid:this.sysid,pnpid:this.pnpid,cert:this.cert,softwarerevision:this.softwarerevision,firmware:this.firmware,hardwarerevision:this.hardwarerevision,serialnr:this.serialnr,modelnr:this.modelnr });
    }

    // goToDeviceinfoPage(softwarerevision){
    //   console.log(JSON.stringify(softwarerevision) + ' selected ');
    //   this.navCtrl.push(Deviceinfopage, {
    //     softwarerevision:softwarerevision
    //   });
    // }

  // launchToDetailPage()
  // {
  //   let detailinfo={
  //     manu:this.manu
  //   };
  //   this.navCtrl.push(DeviceinfoPage,this.manu);
  // }




}

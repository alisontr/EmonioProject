webpackJsonp([1],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detail_detail__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_ble__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, ble, ngZone, ToastController) {
        this.navCtrl = navCtrl;
        this.ble = ble;
        this.ngZone = ngZone;
        this.ToastController = ToastController;
        this.devices = [];
    }
    HomePage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidEnter');
        this.scan();
    };
    HomePage.prototype.scan = function () {
        var _this = this;
        this.devices = [];
        this.ble.scan([], 5).subscribe(function (device) { return _this.onDeviceDiscovered(device); });
        setTimeout(5000);
    };
    HomePage.prototype.onDeviceDiscovered = function (device) {
        var _this = this;
        console.log('Discovered ' + JSON.stringify(device, null, 2));
        this.ngZone.run(function () {
            _this.devices.push(device);
        });
    };
    HomePage.prototype.deviceSelected = function (device) {
        console.log(JSON.stringify(device) + ' selected ');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__detail_detail__["a" /* DetailPage */], {
            device: device
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/alison/AppEntwicklung/EmonioProject/src/pages/home/home.html"*/'<ion-header> <br>\n  <ion-navbar>\n    <ion-title>\n      List of available devices\n      </ion-title>\n      <ion-buttons end>\n      <button ion-button icon-end>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n  <ion-row style=\'background-color:#305680; color: white\'>\n    <ion-col>\n      <strong>Devices</strong>\n    </ion-col>\n    <ion-col>\n      <strong>RSSI</strong>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col> <button ion-item *ngFor="let device of devices" (click)="deviceSelected(device)">\n           {{ device.name || \'Unnamed\' }} </button>\n   </ion-col>\n    <ion-col>\n      <button ion-item *ngFor="let device of devices">\n        <p>{{ device.rssi }} &nbsp;<ion-icon name="stats"></ion-icon> </p>\n      </button>\n    </ion-col>\n  </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons end>\n      <button ion-button (click)="scan()">\n        Refresh\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/alison/AppEntwicklung/EmonioProject/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_ble__["a" /* BLE */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
* Generated class for the DeviceinfoPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var DeviceinfoPage = /** @class */ (function () {
    function DeviceinfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //
        // this.manuu=this.navParams.manu;
        // this.manu.navParams.get('manu');
        // console.log(this.manuu);
        // this.obj=this.navParams.data;
        // this.objtwo=this.navParams.data;
        this.manu = this.navParams.data.manu;
        this.sysid = this.navParams.data.sysid;
        this.pnpid = this.navParams.data.pnpid;
        this.cert = this.navParams.data.cert;
        this.softwarerevision = this.navParams.data.softwarerevision;
        this.firmware = this.navParams.data.firmware;
        this.hardwarerevision = this.navParams.data.hardwarerevision;
        this.serialnr = this.navParams.data.serialnr;
        this.modelnr = this.navParams.data.modelnr;
        // this.manu=this.obj.manu;
    }
    DeviceinfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DeviceinfoPage');
    };
    DeviceinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-deviceinfo',template:/*ion-inline-start:"/Users/alison/AppEntwicklung/EmonioProject/src/pages/deviceinfo/deviceinfo.html"*/'<!--\n  Generated template for the DeviceinfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n  <ion-grid>\n      <ion-row style=\'background-color:#305680; color: white\'>\n        <ion-col>\n          <strong>Device Information </strong>\n        </ion-col>\n        </ion-row>\n        <!-- <p>{{obj}}</p>\n        <p>{{objtwo}}</p>\n        <!--\n        <p> {{this.softwarerevision}} </p> -->\n        <!-- <p>{{this.manu}}</p> -->\n        <p>System ID {{sysid}}</p>\n            <p>Model Number {{modelnr}}</p>\n                <p>Serial Number {{serialnr}}</p>\n                    <p>Firmware Revision {{firmware}}</p>\n                        <p>Hardware Revision {{hardwarerevision}}</p>\n                            <p>Software Revision {{softwarerevision}}</p>\n                            <p>Manufacture Name{{manu}}</p>\n                            <p>{{cert}} Regulatory Certification Data List</p>\n                            <p>PnP ID {{pnpid}}</p>\n\n\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/alison/AppEntwicklung/EmonioProject/src/pages/deviceinfo/deviceinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], DeviceinfoPage);
    return DeviceinfoPage;
}());

//# sourceMappingURL=deviceinfo.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/deviceinfo/deviceinfo.module": [
		272,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_ble__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__deviceinfo_deviceinfo__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// Bluetooth UUIDs
var SERVICE_UUID = 'E1C98240-3037-419A-AEA4-BD9CC9C49A61';
var WRITE_CHARACTERISTIC = '00000002-EBB1-4BDA-9EDF-D0F5F8A11181';
var RECEIVE_CHARACTERISTIC = '00000003-EBB1-4BDA-9EDF-D0F5F8A11181';
var DetailPage = /** @class */ (function () {
    // softwarerevision: any[] = [];
    function DetailPage(navCtrl, navParams, ble, toastCtrl, ngZone) {
        // this.manu=this.navParams.get('manu');
        // this.manu=this.navParams.manu;
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ble = ble;
        this.toastCtrl = toastCtrl;
        this.ngZone = ngZone;
        this.device = [];
        this.energy = new String;
        this.login = "login admin:emonio";
        this.energyGet = "energy";
        //  manu:any;
        this.manu = new String;
        this.sysid = new String;
        this.pnpid = new String;
        this.cert = new String;
        this.softwarerevision = new String;
        this.firmware = new String;
        this.hardwarerevision = new String;
        this.serialnr = new String;
        this.modelnr = new String;
        var device = navParams.get('device');
        this.ble.connect(device.id).subscribe(function (device) { return _this.onConnected(device); }, function (device) { return _this.onDisconnected(device); });
    }
    // converts a string to arraybuffer
    DetailPage.prototype.stringToBytes = function (string) {
        var array = new Uint8Array(string.length);
        for (var i = 0, l = string.length; i < l; i++) {
            array[i] = string.charCodeAt(i);
        }
        return array.buffer;
    };
    // converts arraybuffer to string
    DetailPage.prototype.bytesToString = function (buffer) {
        return String.fromCharCode.apply(null, new Uint8Array(buffer));
    };
    // connection to the peripheral
    DetailPage.prototype.onConnected = function (device) {
        var _this = this;
        console.log("Connected to " + device.id);
        this.ngZone.run(function () {
            _this.device = device;
        });
        // writes to characteristic
        // last parameter must be an arraybuffer - use stringToBytes() to convert strings to arraybuffers
        // if you want to display the data convert the arraybuffer to string with bytesToString()
        this.ble.write(device.id, SERVICE_UUID, WRITE_CHARACTERISTIC, this.stringToBytes(this.login)).then(function (data) { return console.log("write login commando" + _this.bytesToString(data)); });
        this.ble.write(device.id, SERVICE_UUID, WRITE_CHARACTERISTIC, this.stringToBytes(this.energyGet)).then(function (data) { return console.log("write energy commando" + _this.bytesToString(data)); });
        // reads the current value of the characteristic
        // bytesToString() converts output (arraybuffer) to string
        this.ble.read(device.id, SERVICE_UUID, RECEIVE_CHARACTERISTIC).then(function (buffer) {
            var data = new Uint8Array(buffer);
            console.log("current value: " + _this.bytesToString(data));
            _this.ngZone.run(function () {
                _this.energy = _this.bytesToString(data);
            });
        });
        // subscribe for notifications when value changes
        this.ble.startNotification(device.id, SERVICE_UUID, RECEIVE_CHARACTERISTIC).subscribe(function (buffer) {
            var data = new Uint8Array(buffer);
            console.log("value changes: " + _this.bytesToString(data));
            _this.ngZone.run(function () {
                _this.energy = _this.bytesToString(data);
            });
        });
        //     // 2A23 system id
        //
        //     this.ble.read(device.id, '180A', '2A23').then(function(buffer) {
        //       alert(String.fromCharCode.apply(null, new Uint8Array(buffer)))
        //     });
        //
        this.ble.read(device.id, '180A', '2A23').then(function (buffer) {
            var data = new Uint8Array(buffer);
            console.log("current value: " + _this.bytesToString(data));
            _this.ngZone.run(function () {
                _this.sysid = _this.bytesToString(data);
            });
        });
        //     this.ble.read(device.id, '180A', '2A24').then(function(buffer) {        //model nr  x
        //       alert(String.fromCharCode.apply(null, new Uint8Array(buffer)))
        //     });
        //
        this.ble.read(device.id, '180A', '2A24').then(function (buffer) {
            var data = new Uint8Array(buffer);
            console.log("current value: " + _this.bytesToString(data));
            _this.ngZone.run(function () {
                _this.modelnr = _this.bytesToString(data);
            });
        });
        //     // 2A25 serial nr    x
        //     this.ble.read(device.id, '180A', '2A25').then(function(buffer) {
        //       alert(String.fromCharCode.apply(null, new Uint8Array(buffer)))
        //     });
        //
        this.ble.read(device.id, '180A', '2A25').then(function (buffer) {
            var data = new Uint8Array(buffer);
            console.log("current value: " + _this.bytesToString(data));
            _this.ngZone.run(function () {
                _this.serialnr = _this.bytesToString(data);
            });
        });
        //     //hardware revision string 2A27      x
        //     this.ble.read(device.id, '180A', '2A27').then(function(buffer) {
        //       alert(String.fromCharCode.apply(null, new Uint8Array(buffer)))
        //     });
        //
        this.ble.read(device.id, '180A', '2A27').then(function (buffer) {
            var data = new Uint8Array(buffer);
            console.log("current value: " + _this.bytesToString(data));
            _this.ngZone.run(function () {
                _this.hardwarerevision = _this.bytesToString(data);
            });
        });
        //     //frimware 2A26     x
        //     this.ble.read(device.id, '180A', '2A26').then(function(buffer) {
        //       this.variable=(String.fromCharCode.apply(null, new Uint8Array(buffer)))
        //
        //     });
        //
        //
        this.ble.read(device.id, '180A', '2A26').then(function (buffer) {
            var data = new Uint8Array(buffer);
            console.log("current value: " + _this.bytesToString(data));
            _this.ngZone.run(function () {
                _this.firmware = _this.bytesToString(data);
            });
        });
        //     //software revision string 2A28   x
        //     this.ble.read(device.id, '180A', '2A28').then(function(buffer) {
        //       alert(String.fromCharCode.apply(null, new Uint8Array(buffer)))
        //     });
        //
        this.ble.read(device.id, '180A', '2A28').then(function (buffer) {
            var data = new Uint8Array(buffer);
            console.log("current value: " + _this.bytesToString(data));
            _this.ngZone.run(function () {
                _this.softwarerevision = _this.bytesToString(data);
            });
        });
        //     // this.ble.read(device.id, '180A', '2A29').then(function(buffer) {          //manufacturer   x
        //     //   this.manu=(String.fromCharCode.apply(null, new Uint8Array(buffer)))
        //     // });
        //
        //
        // // MANUFACTURER TWO  DELETE MANUFACTURER AFTERWARDS
        //
        //
        //
        this.ble.read(device.id, '180A', '2A29').then(function (buffer) {
            var data = new Uint8Array(buffer);
            console.log("current value: " + _this.bytesToString(data));
            _this.ngZone.run(function () {
                _this.manu = _this.bytesToString(data);
            });
        });
        //
        //
        //
        //
        //     //2A2A certification data list      noo
        //     this.ble.read(device.id, '180A', '2A2A').then(function(buffer) {
        //       alert(String.fromCharCode.apply(null, new Uint8Array(buffer)))
        //     });
        this.ble.read(device.id, '180A', '2A2A').then(function (buffer) {
            var data = new Uint8Array(buffer);
            console.log("current value: " + _this.bytesToString(data));
            _this.ngZone.run(function () {
                _this.cert = _this.bytesToString(data);
            });
        });
        //
        //     //pnp id 2A50 noooo
        //     this.ble.read(device.id, '180A', '2A50').then(function(buffer) {
        //       alert(String.fromCharCode.apply(null, new Uint8Array(buffer)))
        //     });
        this.ble.read(device.id, '180A', '2A50').then(function (buffer) {
            var data = new Uint8Array(buffer);
            console.log("current value: " + _this.bytesToString(data));
            _this.ngZone.run(function () {
                _this.pnpid = _this.bytesToString(data);
            });
        });
    };
    DetailPage.prototype.onDisconnected = function (device) {
        console.log("Disconnected from " + device.id);
    };
    DetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailPage');
    };
    /* ionViewWillLeave(){
      console.log('ionViewWillLeave disconnecting Bluetooth');
      this.ble.disconnect(this.device.id).then(
        () => console.log('Disconnected'),
        () => console.log('ERROR disconnecting')
      )
    } */
    DetailPage.prototype.goToHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
    };
    //
    // goToDeviceinfoPage() {
    //   console.log(this.manu);
    //   this.navCtrl.push(DeviceinfoPage,{manu:this.manu,softwarerevision:this.softwarerevision});
    // }
    // public obj=
    // {
    //   manu:this.manu,
    //
    //   pnpid:this.pnpid,
    //   cert:this.cert,
    //   softwarerevision:this.softwarerevision,
    //   firmware:this.firmware,
    //   hardwarerevision:this.hardwarerevision,
    //   serialnr:this.serialnr,
    //   modelnr: this.modelnr
    //
    //
    // }
    DetailPage.prototype.goToDeviceinfoPage = function () {
        console.log(this.manu + 'pushed in');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__deviceinfo_deviceinfo__["a" /* DeviceinfoPage */], { manu: this.manu, sysid: this.sysid, pnpid: this.pnpid,
            cert: this.cert,
            softwarerevision: this.softwarerevision,
            firmware: this.firmware,
            hardwarerevision: this.hardwarerevision,
            serialnr: this.serialnr,
            modelnr: this.modelnr });
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"/Users/alison/AppEntwicklung/EmonioProject/src/pages/detail/detail.html"*/'<ion-header> <br>\n  <ion-navbar>\n    <ion-title>\n        {{ device.name ||  \'Unnamed\'}}\n      </ion-title>\n      <ion-buttons end>\n      <button ion-button (click)="goToDeviceinfoPage()" icon-end>\n              <!-- <button ion-button (click)="goToDeviceinfoPage()" icon-end> -->\n        <ion-icon name="menu"></ion-icon>\n      </button>\n       <!-- <button ion-button (click)="goToDeviceinfoPage()"> Deviceinfo</button> -->\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n        <ion-row style=\'background-color:#305680; color: white\'>\n          <ion-col>\n            <strong>Firmware </strong>\n          </ion-col>\n          </ion-row>\n\n                  <p> Energy: {{ energy }} </p>\n          <!-- <p>System ID {{sysid}}  </p>\n              <p>Model Number {{modelnr}}</p>\n                  <p>Serial Number {{serialnr}}</p>\n                      <p>Firmware Revision {{firmware}}</p>\n                          <p>Hardware Revision {{hardwarerevision}}</p>\n                              <p>Software Revision {{softwarerevision}}</p>\n                              <p>Manufacture Name{{manu}}</p>\n                              <p>{{cert}} Regulatory Certification Data List</p>\n                              <p>PnP ID {{pnpid}}</p> -->\n\n\n\n\n    </ion-grid>\n\n\n    <!-- <ion-grid>\n    <ion-row style=\'background-color:#305680; color: white\'>\n      <ion-col>\n        <strong>Device Information</strong>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>  <p> Energy: {{ energy }} </p>  </ion-row>\n    <ion-row>  <p>System ID {{sysid}}</p>  </ion-row>\n    <ion-row>    <p>Model Number {{modelnr}}</p>  </ion-row>\n    <ion-row>    <p>Serial Number {{serialnr}}</p></ion-row>\n    <ion-row>   <p>Firmware Revision {{firmware}}</p>  </ion-row>\n    <ion-row>   <p>Hardware Revision {{hardwarerevision}}</p> </ion-row>\n    <ion-row>   <p>Software Revision {{softwarerevision}}</p> </ion-row>\n    <ion-row> <p>Manufacture Name{{manu}}</p> </ion-row>\n    <ion-row>   <p>{{cert}} Regulatory Certification Data List</p> </ion-row>\n    <ion-row>   <p>PnP ID {{pnpid}}</p> </ion-row>\n\n\n    </ion-grid> -->\n\n\n\n\n</ion-content>\n\n<ion-footer>\n<ion-toolbar>\n  <!--<ion-buttons end>\n    <button ion-button (click)="goToHomePage()">\n      Back\n    </button>\n  </ion-buttons>-->\n</ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/alison/AppEntwicklung/EmonioProject/src/pages/detail/detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_ble__["a" /* BLE */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgZone */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_ble__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_bluetooth_serial__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_deviceinfo_deviceinfo__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_deviceinfo_deviceinfo__["a" /* DeviceinfoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/deviceinfo/deviceinfo.module#DeviceinfoPageModule', name: 'DeviceinfoPage', segment: 'deviceinfo', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_deviceinfo_deviceinfo__["a" /* DeviceinfoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_ble__["a" /* BLE */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */],
                __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__["a" /* DetailPage */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { DeviceinfoPage } from '../pages/deviceinfo/deviceinfo';
// import { DetailPage } from '../pages/detail/detail';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/alison/AppEntwicklung/EmonioProject/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/alison/AppEntwicklung/EmonioProject/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map
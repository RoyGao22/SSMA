// import { AppVersionMock } from "@ionic-native-mocks/app-version";
// import { File } from '@ionic-native/file';
// import { FileMock } from "@ionic-native-mocks/file";
// import { FileOpenerMock } from "@ionic-native-mocks/file-opener";
// import { FileTransferMock } from "@ionic-native-mocks/file-transfer";
// import { AppVersion } from "@ionic-native/app-version";
// import { BackgroundMode } from "@ionic-native/background-mode";
// import { Camera } from "@ionic-native/camera";
// import { FileOpener } from "@ionic-native/file-opener";
// import { FileTransfer } from "@ionic-native/file-transfer";
// import { SMS } from "@ionic-native/sms";
import { SQLite } from "@ionic-native/sqlite";
import { ENV } from "../../../environments/environment";
// import { BackgroundModeMock, CameraMock, LocalNotificationsMocks, MyErrorHandler, SMSMock, SQLiteMock } from "./multiplatfom.mock";
import { SQLiteMock } from "./multiplatfom.mock";
// import { Globalization } from "@ionic-native/globalization";
// import { GlobalizationMock } from "@ionic-native-mocks/globalization";
// import { Geolocation } from "@ionic-native/geolocation";
// import { GeolocationMock } from "@ionic-native-mocks/geolocation";
// import { LocalNotifications } from "@ionic-native/local-notifications";
// import { Vibration } from "@ionic-native/vibration";
// import { VibrationMock } from "@ionic-native-mocks/vibration";
// import { Network } from "@ionic-native/network";
// import { NetworkMock } from "@ionic-native-mocks/network";
import { IonicErrorHandler } from "ionic-angular";



// export function AppVersionMockFactory() {
//     if (ENV.cordova_dependence) {
//       console.log("Get Native AppVersion Mode plugin");
//       return new AppVersion();
//     } else {
//       console.log("Get Mock AppVersion Mode plugin");
//       return new AppVersionMock();
//     }
  
// }

// export function SMSMockFactory() {
//     if (ENV.cordova_dependence) {
//       console.log("Get Native SMS Mode plugin");
//       return new SMS();
//     } else {
//       console.log("Get Mock SMS Mode plugin");
//       return new SMSMock();
//     }
  
// }

// export function BackgroundModeMockFactory() {
//     if (ENV.cordova_dependence) {
//       console.log("Get Native BackgroundMode Mode plugin");
//       return new BackgroundMode();
//     } else {
//       console.log("Get Mock BackgroundMode Mode plugin");
//       return new BackgroundModeMock();
//     }
  
// }

// export function CameraMockFactory() {
//     if (ENV.cordova_dependence) {
//       console.log("Get Native Camera Mode plugin");
//       return new Camera();
//     } else {
//       console.log("Get Mock Camera Mode plugin");
//       return new CameraMock();
//     }
  
// }


export function SQLiteMockFactory() {
    if (ENV.cordova_dependence) {
      console.log("Get Native SQLite Mode plugin");
      return new SQLite();
    } else {
      console.log("Get Mock SQLite Mode plugin");
      return new SQLiteMock();
    }
  
}

// export function FileTransferMockFactory() {
//     if (ENV.cordova_dependence) {
//       console.log("Get Native FileTransfer Mode plugin");
//       return new FileTransfer();
//     } else {
//       console.log("Get Mock FileTransfer Mode plugin");
//       return new FileTransferMock();
//     }
  
// }

// export function FileOpenerMockFactory() {
//     if (ENV.cordova_dependence) {
//       console.log("Get Native FileOpener Mode plugin");
//       return new FileOpener();
//     } else {
//       console.log("Get Mock FileOpener Mode plugin");
//       return new FileOpenerMock();
//     }
  
// }

// export function FileMockFactory() {
//     if (ENV.cordova_dependence) {
//       console.log("Get Native File Mode plugin");
//       return new File();
//     } else {
//       console.log("Get Mock File Mode plugin");
//       return new FileMock();
//     }
  
// }

// export function GlobalizationMockFactory() {
//     if (ENV.cordova_dependence) {
//       console.log("Get Native Globalization Mode plugin");
//       return new Globalization();
//     } else {
//       console.log("Get Mock Globalization Mode plugin");
//       return new GlobalizationMock();
//     }
  
// }

// export function GeolocationMockFactory() {
//     if (ENV.cordova_dependence) {
//       console.log("Get Native Geolocation Mode plugin");
//       return new Geolocation();
//     } else {
//       console.log("Get Mock Geolocation Mode plugin");
//       return new GeolocationMock();
//     }
  
// }

// export function LocalNotificationsMocksFactory() {
//     if (ENV.cordova_dependence) {
//       console.log("Get Native LocalNotifications Mode plugin");
//       return new LocalNotifications();
//     } else {
//       console.log("Get Mock LocalNotifications Mode plugin");
//       return new LocalNotificationsMocks();
//     }
  
// }

// export function VibrationMockFactory() {
//     if (ENV.cordova_dependence) {
//       console.log("Get Native Vibration Mode plugin");
//       return new Vibration();
//     } else {
//       console.log("Get Mock Vibration Mode plugin");
//       return new VibrationMock();
//     }
  
// }

// export function NetworkMockFactory() {
//     if (ENV.cordova_dependence) {
//       console.log("Get Native Network Mode plugin");
//       return new Network();
//     } else {
//       console.log("Get Mock Network Mode plugin");
//       return new NetworkMock();
//     }
  
// }


// import { LocalNotifications, ILocalNotification } from '@ionic-native/local-notifications';
import { SQLiteDatabaseConfig } from "@ionic-native/sqlite";
import * as global from "../../common/AgentConstans";
// import { Camera } from "@ionic-native/camera";
// import { BackgroundMode } from "@ionic-native/background-mode";
// import Rx, { Observable } from "rxjs";
// import { SMS } from "@ionic-native/sms";
import { ErrorHandler, Injectable } from "@angular/core";
// import { CommonService } from "../../providers/CommonService";
// import { WriteLogService } from '../../providers/write-log/Writelog';

declare var SQL;

export class SQLiteMock {
    public create(config: SQLiteDatabaseConfig): Promise<SQLiteObject> {

        var db = new SQL.Database();
        global.SQLObj.db = db;
        console.log(config);
        return new Promise((resolve) => {
            resolve(new SQLiteObject(db));
        });
    }
}

class SQLiteObject {
    _objectInstance: any;

    constructor(_objectInstance: any) {
        this._objectInstance = _objectInstance;
    }

    executeSql(statement: string, params: any): Promise<any> {

        return new Promise((resolve, reject) => {
            try {
                var st = this._objectInstance.prepare(statement, params);
                var rows: Array<any> = [];
                while (st.step()) {
                    var row = st.getAsObject();
                    rows.push(row)
                }
                var payload = {
                    rows: {
                        item: function (i) {
                            return rows[i];
                        },
                        length: rows.length
                    },
                    rowsAffected: this._objectInstance.getRowsModified() || 0,
                    insertId: this._objectInstance.insertId || void 0
                };
                resolve(payload);
            } catch (e) {
                reject(e);
            }
        });
    }

}

// export class CameraMock extends Camera {
//     getPicture(_options) {
//         return new Promise((resolve, _reject) => {
//             resolve("BASE_64_ENCODED_DATA_GOES_HERE");
//         })
//     }
// }
// export class BackgroundModeMock extends BackgroundMode {
//     isActive() {
//         return true;
//     }
//     enable(): void {

//     }
//     on(event: string): Observable<any> {
//         console.log(event);
//         return Rx.Observable.create(function (observe) {
//             observe.next("");
//         });

//     }
//     disable() {
//         return new Promise((resolve, _reject) => {
//             resolve("BASE_64_ENCODED_DATA_GOES_HERE");
//         })
//     }

// }
// export class SMSMock extends SMS {

//     send(phoneNumber: string | string[], message: string) {
//         return new Promise((resolve, _reject) => {
//             resolve(phoneNumber);
//             resolve(message);
//         })
//     }
// }

// @Injectable()
// export class MyErrorHandler implements ErrorHandler {
//     constructor(
//         private writeLogService: WriteLogService
//     ) { }
//     handleError(err: any): void {
//         // do something with the error
//         console.log('*****************');
//         CommonService.hideLoading();
//         console.error(err);
//         let writeLogDto: WriteLogDto = {
//             module: "RUN TIME ERROR",
//             functionName: "",
//             url: "",
//             params: "",
//             response: [],
//             time: ""
//           }
//           writeLogDto.params = err.stack;
//           this.writeLogService.writeLog(writeLogDto);
//         //CommonService.showToast('face issue, please check administrator');
//         //hideLoading();
//     }
// }

// export class LocalNotificationsMocks extends LocalNotifications {

//     clear(notificationId: any): Promise<any> {
//         console.log(notificationId);

//         return Promise.resolve();
//     }

//     cancelAll(): Promise<any> {
//         return Promise.resolve();
//     }

//     clearAll(): Promise<any> {
//         return Promise.resolve();
//     }

//     getDefaults(): Promise<any> {
//         return Promise.resolve();
//     }

//     schedule(options?: ILocalNotification | Array<ILocalNotification>): void {
//         console.log(options);

//         console.log("success");

//     }

//     hasPermission(): Promise<boolean> {
//         return Promise.resolve(true);
//     }

//     requestPermission(): Promise<boolean> {
//         return Promise.resolve(true);
//     }

//     update(options?: ILocalNotification): void {
//         console.log(options);

//         console.log("success");

//     }

//     cancel(notificationId: any): Promise<any> {
//         console.log(notificationId);

//         return Promise.resolve();
//     }

//     on(eventName: string): Observable<any> {
//         console.log(eventName);

//         return Rx.Observable.create(function (observe) {
//             observe.next("");
//         });
//     }

//     isPresent(notificationId: number): Promise<boolean> {
//         console.log(notificationId);

//         return Promise.resolve(true);
//     }
// }

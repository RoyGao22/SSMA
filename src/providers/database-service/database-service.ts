
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { CommonServiceProvider } from '../common-service/common-service';
/*
  Generated class for the DatabaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseServiceProvider {
  myAppDatabase: SQLiteObject;
  constructor(
    private sqlite: SQLite
    ) {
    console.log('Hello DatabaseServiceProvider Provider');
  }
  createdb() {
    if (!this.myAppDatabase) {
        return this.sqlite.create({ name: "data.db", location: "default" }).then((db: SQLiteObject) => {
            this.myAppDatabase = db;
            console.log(db)
            return this.createTable();
        }, (error) => {
            // this.tool.showErrorInfo(error);
            console.error("ERROR: ", error);
        });
    }

}

  createTable() {
    // ProjectBasic
    this.myAppDatabase.executeSql('CREATE TABLE IF NOT EXISTS User (id INTEGER PRIMARY KEY AUTOINCREMENT,RoleID INTEGER, UserInfoID SMALLINT NOT NULL)', [])
        .then(() => {
          console.log("创建成功")
        })
        .catch(e => console.log(e));
  }
}

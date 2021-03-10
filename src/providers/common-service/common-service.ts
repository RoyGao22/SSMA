import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CommonServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CommonServiceProvider Provider');
  }
  static isEmpty(obj): boolean {
    let empty = false;
    if (obj == null || obj == 'null' || obj == '' || obj == undefined || obj == 'undefined' || obj == 0 || obj == false || obj == 'false') {
      empty = true;
    }
    return empty;
  }
}

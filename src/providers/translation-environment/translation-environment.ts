import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { Platform } from 'ionic-angular';
/*
  Generated class for the TranslationEnvironmentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TranslationEnvironmentProvider {

  public readonly EN_LANGUAGE_CODE = "en";
  private readonly ZH_LANGUAGE_CODE = 'zh';

  constructor(
    public http: HttpClient,
    private translate: TranslateService,
    private platform: Platform
    ) {
    console.log('Hello TranslationEnvironmentProvider Provider');
  }
  /**
   * 判断当前的平台（cordova windows）
   * Determine the current platform.
   */
   private checkPlatform(): boolean {
    return this.platform.is("cordova");
  }
  public setTranslationEnvironment(): Promise<any> {
        // Set the default language.
        this.translate.setDefaultLang(this.ZH_LANGUAGE_CODE);
        return Promise.resolve();
  }
}

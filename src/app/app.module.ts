import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate/ng2-translate';
import { TranslateService } from 'ng2-translate';
import { TranslationEnvironmentProvider } from '../providers/translation-environment/translation-environment';
import { SQLite } from '@ionic-native/sqlite';
import { IonicStorageModule } from '@ionic/storage';
import { 
  // AppVersionMockFactory, 
  // BackgroundModeMockFactory, 
  // CameraMockFactory,
  // FileMockFactory, 
  // FileOpenerMockFactory, 
  // FileTransferMockFactory, 
  // GeolocationMockFactory, 
  // GlobalizationMockFactory, 
  // LocalNotificationsMocksFactory, 
  // NetworkMockFactory, 
  // SMSMockFactory, 
  SQLiteMockFactory, 
  // VibrationMockFactory 
} from './mock/multiplatform.mock.factory';
import { DatabaseServiceProvider } from '../providers/database-service/database-service';
import { CommonServiceProvider } from '../providers/common-service/common-service';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),   
    HttpClientModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    TranslationEnvironmentProvider,
    TranslateService,
    { provide: SQLite, useFactory: SQLiteMockFactory },
    DatabaseServiceProvider,
    CommonServiceProvider,
  ]
})
export class AppModule {}

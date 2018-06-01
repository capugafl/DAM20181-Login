import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";
import { LoggedinPage } from "../pages/loggedin/loggedin";

const firebaseAuth ={
  
    apiKey: "AIzaSyBmN3CKq3H8HK8ekLZV3Np1OrM0kea6Hgg",
    authDomain: "login-1a178.firebaseapp.com",
    databaseURL: "https://login-1a178.firebaseio.com",
    projectId: "login-1a178",
    storageBucket: "login-1a178.appspot.com",
    messagingSenderId: "858547154964"
  
};


var config = {
  apiKey: "AIzaSyBmN3CKq3H8HK8ekLZV3Np1OrM0kea6Hgg",
  authDomain: "login-1a178.firebaseapp.com",
  databaseURL: "https://login-1a178.firebaseio.com",
  projectId: "login-1a178",
  storageBucket: "login-1a178.appspot.com",
  messagingSenderId: "858547154964"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LoggedinPage
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LoggedinPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

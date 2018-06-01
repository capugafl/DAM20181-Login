import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { LoggedinPage } from "../loggedin/loggedin";



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(private alertCtrl:AlertController,private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message: string){
    this.alertCtrl.create({
      title: 'Info!' ,
      subTitle: message,
      buttons:['OK']
    }).present();
  }

  signInUser(){
    this.fire.auth.signInWithEmailAndPassword(this.user.value,this.password.value)
    .then(data =>{
      console.log('Tiene Datos',this.fire.auth.currentUser);
      this.alert('Inicio de Sesion Exitoso');
      this.navCtrl.setRoot( LoggedinPage );
    })
    .catch(error =>{
      console.log('Tienes un error', error);
      this.alert(error.message);
    })
    console.log('Iniciar Sesion', this.user.value, this.password.value);
  }

}

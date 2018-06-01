import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";



@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(private alertCtrl: AlertController,private fire: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  alert(message: string){
    this.alertCtrl.create({
      title: 'Info!' ,
      subTitle: message,
      buttons:['OK']
    }).present();
  }

  registerUser(){
    this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.password.value).
    then(data =>{
      console.log('Tiene los datos', data);
      this.alert('Registrado!');

    })
    .catch(error =>{
      console.log("Hay un error", error);
      this.alert('error.message');
    });
    console.log('Registrar Usuario', this.user.value, this.password.value);
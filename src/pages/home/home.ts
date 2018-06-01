import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { LoginPage } from "../login/login";
import { RegisterPage } from "../register/register";


import { AngularFireAuth } from "angularfire2/auth";
import firebase from 'firebase';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('username') uname;
  @ViewChild('password') password;

  provider = {
    name: '',
    profilePicture: '',
    email: '',
    loggedin: false
  }



  constructor(private fire: AngularFireAuth,
    public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  signIn(){
    this.navCtrl.push(LoginPage);
    
  }

  register(){
    this.navCtrl.push(RegisterPage);
    
  }


  loginWithFacebook(){
    this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(res =>{
      console.log('From --Facebok--');
      console.log(res);
      this.provider.loggedin = true;
      this.provider.name = res.user.displayName;
      this.provider.email = res.user.email;
      this.provider.profilePicture = res.user.photoURL;
      console.log(res);
    })
  }

  

  loginWithGoogle(){
    this.fire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(res =>{
      console.log('From --Google--');
      console.log(res);
      this.provider.loggedin = true;
      this.provider.name = res.user.displayName;
      this.provider.email = res.user.email;
      this.provider.profilePicture = res.user.photoURL;
      console.log(res);

    })
    
  }

  loginWithTwitter(){
    this.fire.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider())
    .then(res =>{
      console.log('From --Twitter--');
      console.log(res);
      this.provider.loggedin = true;
      this.provider.name = res.user.displayName;
      this.provider.email = res.user.email;
      this.provider.profilePicture = res.user.photoURL;
      

    })
    
  }


  logout(){
    this.fire.auth.signOut();
    this.provider.loggedin = false;
  }

}

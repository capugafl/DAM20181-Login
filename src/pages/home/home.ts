import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  loginWithFacebook(){
    this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then( res =>{
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

}

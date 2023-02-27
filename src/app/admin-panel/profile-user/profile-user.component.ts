import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css'],
})
export class ProfileUserComponent {
  userId: any;
  emailId: any;
  password: any;
  name: any;
  phoneNumber: any;
  address: any;
  paymentInfo: any;
  post: any;

  constructor(private db: AngularFireDatabase) {
    this.userId = localStorage.getItem('userId');
    firebase
      .database()
      .ref('users/' + this.userId)
      .once('value', (snap) => {
        let data = snap.val();
        console.log(data, 'snapValue');
        this.emailId = data.email;
        this.name = data.firstName + ' ' + data.surName;
        this.phoneNumber = data.phoneNumber;
        this.password = data.password;
        this.address = data.address;
        this.paymentInfo = data.paymentInfo;
        this.post = data.post;
      });
  }

  ngOninit() {}
}

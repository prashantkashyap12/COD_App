import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-my-wallet',
  templateUrl: './my-wallet.component.html',
  styleUrls: ['./my-wallet.component.css'],
})
export class MyWalletComponent {
  username = 'Profile Name';
  walletAmount: number = 0;
  uid: any;

  constructor(private db: AngularFireDatabase) {
    this.uid = localStorage.getItem('userId');
    firebase
      .database()
      .ref('users/' + this.uid)
      .once('value', (snap) => {
        this.walletAmount = snap.val().walletAmount;
      });
  }

  ngOnInit() {
    // const ref = this.db.list('users');
    // ref.valueChanges().subscribe((data) => {
    //   console.log(data, 'WALET');
    // });
  }

  addmoney() {}
}

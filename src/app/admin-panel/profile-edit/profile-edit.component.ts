import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import firebase from 'firebase/compat/app';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css'],
})
export class ProfileEditComponent {
  userId: any;
  firstName: any = ' ';
  surName: any = ' ';
  emailId: any = '';
  address: any;
  walletAmount: number = 0;
  paymentInfo: any;
  phoneNumber: any;
  post: any;

  constructor(
    private db: AngularFireDatabase,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.userId = localStorage.getItem('userId');
  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    firebase
      .database()
      .ref('users/' + this.userId)
      .once('value', (snap) => {
        let data = snap.val();
        console.log(data, 'snapValue');
        this.emailId = data.email;
        this.firstName = data.firstName;
        this.surName = data.surName;
        this.phoneNumber = data.phoneNumber;
        this.address = data.address;
        this.paymentInfo = data.paymentInfo;
      });
  }

  dataupdate() {
    firebase
      .database()
      .ref('users/' + this.userId)
      .set(
        {
          uid: this.userId,
          firstName: this.firstName,
          surName: this.surName,
          email: this.emailId,
          address: this.address,
          phoneNumber: this.phoneNumber,
          paymentInfo: this.paymentInfo,
          post: this.post,
          walletAmount: this.walletAmount,
        },
        (error) => {
          if (error) {
            this.toastr.error('Error in profile update');
          } else {
            this.toastr.success('Profile Updated Successfully');
            this.router.navigate(['/user-profile']);
          }
        }
      );
  }
}

import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-app-forget',
  templateUrl: './app-forget.component.html',
  styleUrls: ['./app-forget.component.css'],
})
export class AppForgetComponent {
  emailId: string = '';

  constructor(
    public af: AngularFireAuth,
    public router: Router,
    private toastr: ToastrService
  ) {}

  // resetPassword() {
  //   if (!this.emailId) {
  //     alert('Type in your email first');
  //   }
  //   this.auth.resetPasswordInit(this.email)
  //   .then(
  //     () => alert('A password reset link has been sent to your email
  //     address'),
  //     (rejectionReason) => alert(rejectionReason))
  //   .catch(e => alert('An error occurred while attempting to reset
  //     your password'));
  // }

  resetPassword() {
    if (!this.emailId) {
      alert('Please Enter your email Id');
    }
    this.af
      .sendPasswordResetEmail(this.emailId)
      .then((resp) => {
        this.toastr.success('Password Reset Link is sent to your email');
        // this.router.navigate(['/forget-otp']);
      })
      .catch((error) => this.toastr.error(error));
  }
}

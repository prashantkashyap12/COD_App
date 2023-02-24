import { Component } from '@angular/core';
import { WindowService } from 'src/app/services/window.service';
import firebase from 'firebase/compat/app';
import { environment } from '../../../../environment';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-app-signup',
  templateUrl: './app-signup.component.html',
  styleUrls: ['./app-signup.component.css'],
})
export class AppSignupComponent {
  windowRef: any;
  phoneNumber!: any;
  verificationCode: any;
  user: any;
  public recaptchaVerifier!: firebase.auth.RecaptchaVerifier;
  firstName: string = '';
  surName: string = '';
  emailId: string = '';
  password: string = '';

  constructor(
    private win: WindowService,
    public router: Router,
    public afAuth: AngularFireAuth,
    private toastr: ToastrService
  ) {
    if (!firebase.apps.length) {
      firebase.initializeApp(environment.firebase);
    }

    console.log(firebase.apps.length, 'lwqength');
  }

  ngOnInit(): void {
    this.windowRef = this.win.windowRef;
    this.windowRef['phoneRecaptchaVerifier'] =
      new firebase.auth.RecaptchaVerifier('phone-sign-in-recaptcha', {
        size: 'invisible',
        callback: function (response: any) {
          console.log(response, 'res');
          // reCAPTCHA solved - will proceed with submit function
        },
        'expired-callback': function () {
          // Reset reCAPTCHA?
        },
      });
  }

  signUp() {
    return this.afAuth
      .createUserWithEmailAndPassword(this.emailId, this.password)
      .then((result) => {
        const { currentUser } = firebase.auth();
        if (currentUser) {
          let uid = currentUser.uid;
          this.saveUserData(uid);
          //this.emailAuth(currentUser);
          this.toastr.success('You have been successfully registered');
          this.router.navigate(['/login']);
        }
      })
      .catch((error) => {
        this.toastr.error(error.message);
      });
  }

  emailAuth() {
    console.log(this.emailId, 'Success');
    var actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be in the authorized domains list in the Firebase Console.
      url: 'http://localhost:4200/signup',
      // This must be true.
      handleCodeInApp: false,
      // dynamicLinkDomain: 'example.page.link',
    };

    firebase
      .auth()
      .sendSignInLinkToEmail(this.emailId, actionCodeSettings)
      .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        console.log('EMAIL SENT');
        localStorage.setItem('emailForSignIn', this.emailId);
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });

    // Confirm the link is a sign-in with email link.
    if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
      // Additional state parameters can also be passed via URL.
      // This can be used to continue the user's intended action before triggering
      // the sign-in operation.
      // Get the email if available. This should be available if the user completes
      // the flow on the same device where they started it.
      console.log('EMAIL SENT signin');

      var email = localStorage.getItem('emailForSignIn');
      if (!email) {
        // User opened the link on a different device. To prevent session fixation
        // attacks, ask the user to provide the associated email again. For example:
        email = window.prompt('Please provide your email for confirmation');
      }
      // The client SDK will parse the code from the link for you.
      firebase
        .auth()
        .signInWithEmailLink(this.emailId, window.location.href)
        .then((result) => {
          // Clear email from storage.
          localStorage.removeItem('emailForSignIn');
          // You can access the new user via result.user
          // Additional user info profile not available via:
          // result.additionalUserInfo.profile == null
          // You can check if the user is new or existing:
          // result.additionalUserInfo.isNewUser
        })
        .catch((error) => {
          // Some error occurred, you can inspect the code: error.code
          // Common errors could be invalid email and invalid or expired OTPs.
        });
    }
  }

  saveUserData(uid: string) {
    firebase
      .database()
      .ref('users/' + uid)
      .set({
        uid: uid,
        firstName: this.firstName,
        surName: this.surName,
        email: this.emailId,
        password: this.password,
        walletAmount: 0,
      });
  }

  sendLoginCode() {
    firebase
      .auth()
      .signInWithPhoneNumber(
        this.phoneNumber,
        this.windowRef['phoneRecaptchaVerifier']
      )
      .then(function (confirmationResult) {
        var code = prompt(
          'We have send a code to ' +
            `this.phoneNumber` +
            ', please enter it here',
          ''
        );
        if (code) {
          confirmationResult
            .confirm(code)
            .then(function (result) {
              console.log(result, 'result');
              // User signed in successfully.
              // Reset reCAPTCHA?
              // ...
            })
            .catch(function (error) {
              console.log(error, 'err');

              // User couldn't sign in (bad verification code?)
              // Reset reCAPTCHA?
              // ...
            });
        }
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  verifyLoginCode() {
    this.windowRef.confirmationResult
      .confirm(this.verificationCode)
      .then((result: { user: any }) => {
        this.user = result.user;
      })
      .catch((error: any) => console.log(error, 'Incorrect code entered?'));
  }
}
